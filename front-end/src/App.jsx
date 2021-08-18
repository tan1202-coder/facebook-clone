import { Router, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import {useReducer, useState, useEffect, createContext, lazy, Fragment, Suspense} from 'react'
import {UIReducer, initialUIState} from './context/UIContext'
import {PostReducer, initialPostState} from './context/PostContext'
import {UserReducer, initialUserState} from './context/UserContext'
import {ChatReducer, initialChatState} from './context/ChatContext'
import Loading from './components/Loading'
import Header from './components/Nav/Header'
import jwtDecode from 'jwt-decode'
import  {fetchCurrentUser}  from './services/AuthService'
import io from 'socket.io-client'
import ProtectedRoute from './utils/ProtectedRoute'
import Nav from './components/Nav/Nav';
const Home = lazy(() => import('./screens/Home'))
const LeftSide = lazy(() => import('./components/Nav/LeftSide'))
const RightSide = lazy(() => import('./components/Nav/RightSide'))
const Auth = lazy(() => import('./screens/Auth'));




const token = localStorage.token && JSON.parse(localStorage.token)

export const UIContext = createContext()
export const UserContext = createContext()
export const PostContext = createContext()
export const ChatContext = createContext()

function App() {
  const [uiState, uiDispatch] = useReducer(UIReducer, initialUIState);
  const [postState, postDispatch] = useReducer(PostReducer, initialPostState);
  const [userState, userDispatch] = useReducer(UserReducer, initialUserState);
  const [chatState, chatDispatch] = useReducer(ChatReducer, initialChatState);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCurrentUser() {
      if (token) {
        const decodeToken = jwtDecode(token)

        if (decodeToken.exp * 1000 < Date.now()) {
          userDispatch({ type: 'LOGOUT_USER' })
        } else {
          const currentUser = await fetchCurrentUser()
          if (currentUser && currentUser.data) {
            userDispatch({
              type: 'SET_CURRENT_USER',
              payload: currentUser.data.user,
            })

            uiDispatch({
              type: 'SET_NOTIFICATIONS',
              payload: currentUser.data.notifications,
            })
          }
        }
      }
    }

    function loadRecentAccounts() {
      const accounts = localStorage.accounts
        ? JSON.parse(localStorage.accounts)
        : []
      userDispatch({ type: 'RECENT_ACCOUNTS', payload: accounts })
    }

    loadCurrentUser()
    //loadRecentAccounts()
  },[]);

  useEffect(() => {
    if (userState.isLoggedIn) {
      let socketio = io(`${process.env.REACT_APP_ENDPOINT}`, { transports: ['websocket'] })
      userDispatch({ type: 'SET_SOCKETIO', payload: socketio })
      socketio.on('connect', () => {
        console.log('connected')
      })

      socketio.on('friend-logout-status', ({ user_id }) => {
        userDispatch({ type: 'FRIEND_LOGOUT', payload: user_id })
      })

      socketio.on('friend-login-status', ({ user_id }) => {
        userDispatch({ type: 'FRIEND_LOGIN', payload: user_id })
      })

      socketio.on('friend-request-status', ({ sender }) => {
        userDispatch({
          type: 'ADD_FRIENDS_REQUEST_RECEIVED',
          payload: sender,
        })
      })

      socketio.on('sended-friend-request-cancel', ({ requestId }) => {
        userDispatch({
          type: 'REMOVE_FRIENDS_REQUEST_RECEIVED',
          payload: requestId,
        })
      })

      socketio.on('friend-request-accept-status', ({ user, request_id }) => {
        userDispatch({
          type: 'ADD_FRIEND',
          payload: user,
        })
        userDispatch({
          type: 'REMOVE_FRIENDS_REQUEST_RECEIVED',
          payload: request_id,
        })
        userDispatch({
          type: 'REMOVE_FRIENDS_REQUEST_SENDED',
          payload: request_id,
        })
      })

      socketio.on('received-friend-request-decline', ({ requestId }) => {
        console.log(requestId)
        userDispatch({
          type: 'REMOVE_FRIENDS_REQUEST_SENDED',
          payload: requestId,
        })
      })

      socketio.on('new-post', ({ data }) => {
        postDispatch({ type: 'ADD_POST', payload: data })
      })

      socketio.on('post-like-change', ({ data }) => {
        postDispatch({
          type: 'LIKE_UNLIKE_POST',
          payload: data,
        })
      })

      socketio.on('post-comment', ({ data }) => {
        postDispatch({ type: 'ADD_POST_COMMENT', payload: data })
      })

      socketio.on('comment-like-change', ({ data }) => {
        postDispatch({
          type: 'LIKE_UNLIKE_COMMENT',
          payload: data,
        })
      })

      socketio.on('new-message', ({ data }) => {
        chatDispatch({ type: 'ADD_MESSAGE', payload: data })
      })

      // Realtime  Notification releted stuff

      socketio.on('Notification', ({ data }) => {
        uiDispatch({ type: 'ADD_NOTIFICATION', payload: data })
      })

      return () => {
        socketio.disconnect()
        userDispatch({ type: 'SET_SOCKETIO', payload: null })
        console.log('disconnect')
      }
    }
  }, [userState.isLoggedIn])


  return (
     <UIContext.Provider value = {{uiState, uiDispatch}}>
       <UserContext.Provider value = {{userState, userDispatch}}>
          <PostContext.Provider value = {{postState, postDispatch}}>
            <ChatContext.Provider value = {{chatState, chatDispatch}}>
                <Fragment>
                  <BrowserRouter>
                  {userState.isLoggedIn && <Nav />}

                  <Suspense fallback={null}>
                    {loading ? null :
                  
                    (<Switch>
                      <Route
                        exact
                        path="/"
                        render={(props) =>
                          !userState.isLoggedIn ? (
                            <Auth />
                          ) : (
                            <Redirect to="/home"/>
                          )
                        }
                      />

                      <ProtectedRoute 
                        exact path="/home" component={Home} isLoggedIn = {userState.isLoggedIn}/>
                      </Switch>)}
                  
                   </Suspense>
                
                </BrowserRouter>
                </Fragment>
            </ChatContext.Provider>
          </PostContext.Provider>
       </UserContext.Provider>
     </UIContext.Provider>
  );
}

export default App;
