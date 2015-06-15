var Room = require('../room');

describe('Room', function(){
  var katieRoom = new Room(office, 11, 13)

  it('the room is empty until it is moved in', function(){
    expect(room.contents).toEqual([]);
  })

  it('has a name', function(){
    expect(list.name).toEqual(office);
  })

  it('has a width', function(){
    expect(list.width).toEqual(11);
  })

  it('has a length', function(){
    expect(list.length).toEqual(13);
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
    list.addFurniture(bed);
    expect(bedroom.contents).toEqual([bed]);
  });

  it('correctly handles multiple furniture', function(){
    bedroom.addFurniture(chair);
    bedroom.addFurniture(desk);
    expect(bedroom.contents).toEqual([desk, chair]);
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
    list.removeFurniture(desk);
    expect(bedroom.contents).toEqual([bed, chair]);
  });
})
