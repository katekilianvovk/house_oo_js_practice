var Room = function(name, width, length){
  this.contents = [];
  this.name = name;
  this.width = width;
  this.length = length;
};

Room.prototype.addFurniture = function(furniture) {
  if (this.contents.indexOf(furniture) !== -1) {
    return "sorry, you can't have two of those";
  } else {
    this.contents.push(furniture);
  }
};

Room.prototype.removeFurniture = function() {
  this.contents.pop();
  return this.contents;
};

module.exports = Room;
