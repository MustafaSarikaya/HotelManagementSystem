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
  var sql = `CREATE TABLE hotel (
                    hotel_ID INT(11) NOT NULL AUTO_INCREMENT,
                    chain_ID INT(11) NOT NULL,
                    name VARCHAR(100) NOT NULL,
                    rating INT(1) NOT NULL,
                    number_rooms INT(4) NOT NULL CHECK (number_rooms > 0),
                    email VARCHAR(50) NOT NULL,
                    manager_ID INT(11) NOT NULL,
                    phone_number VARCHAR(100) NOT NULL, 
                    address VARCHAR(255) NOT NULL,
                    PRIMARY KEY (hotel_ID),
                    FOREIGN KEY (chain_ID) REFERENCES chain (chain_ID)
                      ON DELETE CASCADE
  ) AUTO_INCREMENT=1;`;

  return db.runSql(sql);
};

exports.down = function(db) {
  var sql = `DROP TABLE hotel;`;
  return db.runSql(sql);
};

exports._meta = {
  "version": 1
};
