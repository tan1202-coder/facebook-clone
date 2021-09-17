const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  body: {
    image: String,
    text: {
      type: String,
      trim: true,
    },
  },

  responseTo: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],

},
{timestamps: true}
)

module.exports = model('Comment', commentSchema)
