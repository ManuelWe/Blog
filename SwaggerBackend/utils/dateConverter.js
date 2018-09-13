
exports.convertDate = function(object) {
  let objectCopy = JSON.parse(JSON.stringify(object));
  for (const i in objectCopy) {
    objectCopy[i].date = objectCopy[i].date.substr(5, 2) + '/' +
      objectCopy[i].date.substr(8, 2) + '/' + objectCopy[i].date.substr(0, 4);
  }
  return objectCopy;
};
