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
  const room_capacity = `CREATE INDEX room_capacity_price_idx
                                 ON room(room_capacity, price_per_night);`
  db.runSql(room_capacity, hotelRatingAddress);

  function hotelRatingAddress(err) {
    if (err) { callback(err); return; }

    const hotel_rating_address = `CREATE INDEX hotel_address_rating_idx
                                          ON hotel(address, rating);`;
              
    db.runSql(hotel_rating_address, customerName);
  }

  function customerName(err) {
    if (err) { callback(err); return; }

    const customer_name = `CREATE INDEX customer_name_idx
                                    ON customer(name)`;

    db.runSql(customer_name, callback);
  }
};

exports.down = function(db, callback) {
  const drop_room_capacity_idx = `DROP INDEX IF EXISTS room_capacity_idx`;
  db.runSql(drop_room_capacity_idx, drop_room_price_idx);

  function drop_room_price_idx(err) {
    if (err) { callback(err); return; }

    const drop_room_price_idx = `DROP INDEX IF EXISTS room_price_idx;`;
    
    db.runSql(drop_room_price_idx, drop_hotel_address_rating_idx);
  }

  function drop_hotel_address_rating_idx(err) {
    if (err) { callback(err); return; }

    const drop_hotel_address_rating_idx = `DROP INDEX IF EXISTS hotel_address_rating_idx;`;
              
    db.runSql(drop_hotel_address_rating_idx, drop_customer_name_idx);
  }

  function drop_customer_name_idx(err) {
    if (err) { callback(err); return; }

    const drop_customer_name_idx = `DROP INDEX IF EXISTS customer_name_idx;`;

    db.runSql(drop_customer_name_idx, callback);
  }
};

exports._meta = {
  "version": 1
};
