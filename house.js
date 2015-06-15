var House = function(numOfBedrooms){
  this.numOfBedrooms = numOfBedrooms;
  this.rooms = {};

};

House.prototype.getRooms = function(){
  return this.rooms;
};

House.prototype.addRoom = function(room){
  return this.rooms[room.name] = [];

};

module.exports = House;
