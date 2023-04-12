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
  const numberOfRoomsByCity = `
    CREATE VIEW number_of_rooms_by_address AS
    SELECT COUNT(room_number) AS NumberOfRooms, address
    FROM room JOIN hotel ON room.hotel_ID = hotel.hotel_ID
    GROUP BY address;
  `;

  db.runSql(numberOfRoomsByCity, totalHotelCapacity);
    
    
  function totalHotelCapacity(err) {
    if (err) { callback(err); return; }

    const totalCapacityByHotel = `
      CREATE VIEW total_capacity_by_hotel AS
      SELECT SUM(room_capacity) AS TotalCapacity, name, address, hotel_ID
      FROM (room NATURAL JOIN hotel)
      GROUP BY hotel_ID;
    `;
    db.runSql(totalCapacityByHotel, roomHotel);
  }  
    function roomHotel(err) {
      if (err) { callback(err); return; }
      const roomHotel = `
        CREATE VIEW room_hotel AS
        SELECT *
        FROM room NATURAL JOIN hotel;
      `;
      db.runSql(roomHotel, callback);
    }
  };

  exports.down = function(db, callback) {
    const dropRoomHotel = `
      DROP VIEW IF EXISTS room_hotel;
    `;
    db.runSql(dropRoomHotel, dropTotalCapacityByHotel);
    
    function dropTotalCapacityByHotel(err) {
      if (err) { callback(err); return; }
      const dropTotalCapacityByHotel = `
        DROP VIEW IF EXISTS total_capacity_by_hotel;
      `;
      db.runSql(dropTotalCapacityByHotel, dropNumberOfRoomsByCity);
    }
  
    function dropNumberOfRoomsByCity(err) {
      if (err) { callback(err); return; }
      const dropNumberOfRoomsByCity = `
        DROP VIEW IF EXISTS number_of_rooms_by_address;
      `;
      db.runSql(dropNumberOfRoomsByCity, callback);
    }
  };

exports._meta = {
  "version": 1
};
