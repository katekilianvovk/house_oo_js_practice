var House = require('../house');
var Family = require('../family');
var Room = require('../room');
var Furniture = require('../furniture')

describe('House', function(){
  var boulder_home = new House(3)

  it('has a number of bedrooms', function(){
    expect(boulder_home.numOfBedrooms).toEqual(3);
  });
});

describe('getRooms', function() {
  it('returns all rooms in the House', function() {
    var boulderHouse = new House();
    expect(boulderHouse.getRooms()).toEqual({});
  });
});


describe('addRoom', function() {
  it('adds a room to the house with no furniture entered', function() {
    var room = new Room('family room', 16, 16);
    var house = new House();
    house.addRoom(room);

    expect(house.getRooms()).toEqual({'family room': []});
  });


  it('adds a room if the family size is < 5', function(){
    var room = new Room('family room', 16, 16);
    var lgFamily = new Family(7);
    var house = new House();
    house.addRoom(room);

    expect(house.getRooms()).toEqual({'family room': []});
  })
});
