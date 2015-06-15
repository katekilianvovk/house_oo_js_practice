var Room = require('../room');
var Furniture = require('../furniture');

describe('Room', function(){
  var room = new Room("office", 11, 13)

  it('the room is empty until it is moved in', function(){
    expect(room.contents).toEqual([]);
  })

  it('has a name', function(){
    expect(room.name).toEqual("office");
  })

  it('has a width', function(){
    expect(room.width).toEqual(11);
  })

  it('has a length', function(){
    expect(room.length).toEqual(13);
  })
})

describe('#addFurniture', function(){
  var bedroom;
  beforeEach(function(){
    bedroom = new Room(11,13);
    bed = new Furniture("bed")
    chair = new Furniture("chair")
    dresser = new Furniture("dresser")
    desk = new Furniture("desk")
  });

  it('takes an argument for the furniture', function(){
    bedroom.addFurniture(bed);
    expect(bedroom.contents).toEqual([bed]);
  });

  it('correctly handles multiple furniture', function(){
    bedroom.addFurniture(chair);
    bedroom.addFurniture(desk);
    expect(bedroom.contents).toEqual([chair, desk]);
  });

  it('does not allow duplicate furniture', function(){
    bedroom.addFurniture(bed);
    expect(bedroom.addFurniture(bed)).toEqual("sorry, you can't have two of those");
    expect(bedroom.contents).toEqual([bed]);
  })
});

describe('#removeFurniture', function(){
  var bedroom;
  beforeEach(function(){
    bedroom = new Room(15,20);
    bed = new Furniture("bed")
    chair = new Furniture("chair")
    dresser = new Furniture("dresser")
    desk = new Furniture("desk")
  });

  it('deletes an item', function(){
    bedroom.addFurniture(bed);
    bedroom.addFurniture(chair);
    bedroom.addFurniture(desk);
    expect(bedroom.contents).toEqual([bed, chair, desk]);
    bedroom.removeFurniture(desk);
    expect(bedroom.contents).toEqual([bed, chair]);
  });
})
