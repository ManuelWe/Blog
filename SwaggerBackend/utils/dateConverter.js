
exports.convertDate = function(objects) {
  let objectCopy = JSON.parse(JSON.stringify(objects));
  if (Array.isArray(objectCopy)) {
    for (const i in objectCopy) {
      objectCopy[i].date = objectCopy[i].date.substr(5, 2) + '/' +
        objectCopy[i].date.substr(8, 2) + '/' + objectCopy[i].date.substr(0, 4);
    }
  } else if (objectCopy != null) {
    objectCopy.date = objectCopy.date.substr(5, 2) + '/' +
      objectCopy.date.substr(8, 2) + '/' + objectCopy.date.substr(0, 4);
  }
  return objectCopy;
};

