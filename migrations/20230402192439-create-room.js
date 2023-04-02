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

exports.up = function(db) {
  var sql = `CREATE TABLE room (
                    room_ID INT(11) NOT NULL AUTO_INCREMENT,
                    hotel_ID INT(11) NOT NULL,
                    chain_ID INT(11) NOT NULL,
                    room_number INT(3) NOT NULL,
                    price_per_night DECIMAL(6,2) NOT NULL,
                    amenities VARCHAR(255),
                    room_capacity INT(2) NOT NULL,
                    view_type ENUM('sea', 'mountain') NOT NULL,
                    extendability INT(1) NOT NULL,
                    problems VARCHAR(255),
                    PRIMARY KEY (room_ID),
                    FOREIGN KEY (chain_ID) REFERENCES chain (chain_ID)
                      ON DELETE CASCADE,
                    FOREIGN KEY (hotel_ID) REFERENCES hotel (hotel_ID)
                      ON DELETE CASCADE
  );`;

return db.runSql(sql);
};

exports.down = function(db) {
  var sql = `DROP TABLE room;`;
  return db.runSql(sql);
};

exports._meta = {
  "version": 1
};
