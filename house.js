var House = function(numOfBedrooms){
  this.numOfBedrooms = numOfBedrooms;
  this.rooms = {};
};

House.prototype.getRooms = function() {
  return this.rooms;
};

House.prototype.addRoom = function(room) {
  this.rooms[room["name"]] = room.contents;
};


module.exports = House;
