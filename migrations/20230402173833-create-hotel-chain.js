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
  var sql = `CREATE TABLE chain 
                    (chain_ID INT(11) NOT NULL AUTO_INCREMENT,
                    chain_name VARCHAR(100) NOT NULL, 
                    email VARCHAR(255) NOT NULL, 
                    number_hotels INT(4) NOT NULL CHECK (number_hotels > 0), 
                    phone_number VARCHAR(12) NOT NULL, 
                    address VARCHAR(255) NOT NULL,
                    PRIMARY KEY (chain_ID));`;

  return db.runSql(sql);
};

exports.down = function(db) {
  var sql = `DROP TABLE chain;`;
  return db.runSql(sql);
};

exports._meta = {
  "version": 1
};
