export const filterArray = (originalArray) => {
  var newArray = []
  var lookupObject = {}

  for (var i in originalArray) {
    if(originalArray[i].id)
    lookupObject[originalArray[i].id] = originalArray[i]
  }

  for (i in lookupObject) {
    newArray.push(lookupObject[i])
  }
  return newArray
}

