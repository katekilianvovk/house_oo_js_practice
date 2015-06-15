var Room = function(name, width, length){
  this.name = name;
  this.contents = [];
  this.width = width;
  this.length = length;

};

Room.prototype.addFurniture = function(item){
  if (this.contents.indexOf(item) == -1){
    this.contents.push(item);
    return this.contents;
  } else {
    return 'sorry, you can\'t have two of those'
  }
};

Room.prototype.removeFurniture = function(item){
  if (this.contents.indexOf(item) !== -1){
    this.contents.splice(this.contents.indexOf(item), 1)
  }
  return this.contents;
};

module.exports = Room;
