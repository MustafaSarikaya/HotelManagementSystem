'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  var room1 = `INSERT INTO room (hotel_ID, room_number, price_per_night, amenities, room_capacity, view_type, extendability, problems)
  VALUES
    (25,450,668,"wifi,TV,soda,hottub,kitchen",1,"sea","1","furniture,internet"),
    (25,669,498,"wifi,TV,soda,hottub,kitchen",9,"sea","0","internet,heating"),
    (25,600,769,"wifi,TV,soda,hottub,kitchen",9,"sea","1","tiling,ceiling"),
    (25,436,688,"wifi,TV,soda,hottub,kitchen",8,"sea","1","internet,heating"),
    (25,793,385,"TV,soda,hottub,kitchen,printer",2,"sea","1","flooring,tiling"),
    (26,728,158,"wifi,TV,soda,hottub,kitchen",7,"sea","1","plumbing,flooring"),
    (26,508,667,"TV,soda,hottub,kitchen,printer",4,"sea","0","tiling,ceiling"),
    (26,692,961,"wifi,TV,soda,hottub,kitchen",1,"sea","0","tiling,ceiling"),
    (26,712,475,"TV,soda,hottub,kitchen,printer",3,"sea","0","furniture,internet"),
    (26,609,887,"wifi,TV,soda,hottub,kitchen",5,"sea","1","furniture,internet")
  ;`;

  db.runSql(room1, insertRooms2);

  function insertRooms2(err) {
    if (err) { callback(err); return; }

    var room2 = `INSERT INTO room (hotel_ID, room_number, price_per_night, amenities, room_capacity, view_type, extendability, problems)
    VALUES
      (27,508,947,"wifi,TV,soda,hottub,kitchen",6,"sea","1","ceiling,furniture"),
      (27,749,572,"TV,soda,hottub,kitchen,printer",1,"sea","0","internet,heating"),
      (27,453,772,"TV,soda,hottub,kitchen,printer",5,"sea","0","plumbing,flooring"),
      (27,257,826,"TV,soda,hottub,kitchen,printer",9,"sea","1","internet,heating"),
      (27,756,379,"wifi,TV,soda,hottub,kitchen",4,"sea","0","ceiling,furniture"),
      (28,965,508,"TV,soda,hottub,kitchen,printer",1,"sea","1","flooring,tiling"),
      (28,110,828,"wifi,TV,soda,hottub,kitchen",6,"sea","1","tiling,ceiling"),
      (28,726,214,"TV,soda,hottub,kitchen,printer",6,"sea","0","tiling,ceiling"),
      (28,901,796,"TV,soda,hottub,kitchen,printer",4,"sea","0","internet,heating"),
      (28,629,309,"TV,soda,hottub,kitchen,printer",10,"sea","1","tiling,ceiling")
    ;`;

    db.runSql(room2, insertRooms3);
  }

  function insertRooms3(err) {
    if (err) { callback(err); return; }

    var room3 = `INSERT INTO room (hotel_ID, room_number, price_per_night, amenities, room_capacity, view_type, extendability, problems)
    VALUES
      (29,939,167,"wifi,TV,soda,hottub,kitchen",7,"sea","0","internet,heating"),
      (29,196,351,"wifi,TV,soda,hottub,kitchen",3,"sea","1","tiling,ceiling"),
      (29,898,534,"wifi,TV,soda,hottub,kitchen",4,"sea","0","flooring,tiling"),
      (29,548,290,"TV,soda,hottub,kitchen,printer",9,"sea","1","furniture,internet"),
      (29,927,350,"TV,soda,hottub,kitchen,printer",7,"sea","1","internet,heating"),
      (30,144,572,"wifi,TV,soda,hottub,kitchen",8,"sea","1","furniture,internet"),
      (30,119,876,"wifi,TV,soda,hottub,kitchen",3,"sea","0","ceiling,furniture"),
      (30,211,651,"TV,soda,hottub,kitchen,printer",8,"sea","1","plumbing,flooring"),
      (30,72,162,"wifi,TV,soda,hottub,kitchen",9,"sea","1","tiling,ceiling"),
      (30,42,654,"wifi,TV,soda,hottub,kitchen",10,"sea","1","flooring,tiling")
    ;`;

    db.runSql(room3, insertRooms4);
  }

  function insertRooms4(err) {
    if (err) { callback(err); return; }

    var room4 = `INSERT INTO room (hotel_ID, room_number, price_per_night, amenities, room_capacity, view_type, extendability, problems)
    VALUES
      (31,569,566,"wifi,TV,soda,hottub,kitchen",7,"sea","0","furniture,internet"),
      (31,512,545,"wifi,TV,soda,hottub,kitchen",4,"sea","0","tiling,ceiling"),
      (31,696,423,"TV,soda,hottub,kitchen,printer",3,"sea","0","plumbing,flooring"),
      (31,497,218,"TV,soda,hottub,kitchen,printer",9,"sea","1","flooring,tiling"),
      (31,390,309,"wifi,TV,soda,hottub,kitchen",6,"sea","0","furniture,internet"),
      (32,702,479,"TV,soda,hottub,kitchen,printer",8,"sea","1","ceiling,furniture"),
      (32,954,771,"wifi,TV,soda,hottub,kitchen",3,"sea","1","ceiling,furniture"),
      (32,890,223,"wifi,TV,soda,hottub,kitchen",6,"sea","0","ceiling,furniture"),
      (32,619,991,"wifi,TV,soda,hottub,kitchen",3,"sea","0","furniture,internet"),
      (32,822,323,"wifi,TV,soda,hottub,kitchen",10,"sea","0","ceiling,furniture")
    ;`;

    db.runSql(room4, callback);
  }
};

exports.down = function(db, callback) {
  var room = `DELETE FROM room;`;
  db.runSql(room, callback);
};

exports._meta = {
  "version": 1
};
