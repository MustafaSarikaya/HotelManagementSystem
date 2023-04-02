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
  var sql = `CREATE TABLE customer (
                    customer_ID INT(11) NOT NULL AUTO_INCREMENT,
                    registration_date DATE NOT NULL,
                    name VARCHAR(50) NOT NULL,
                    phone_number VARCHAR(12) NOT NULL, 
                    SIN INT(9) NOT NULL,
                    address VARCHAR(255) NOT NULL,
                    PRIMARY KEY (customer_ID)
  );`;

return db.runSql(sql);
};

exports.down = function(db) {
var sql = `DROP TABLE customer;`;
return db.runSql(sql);
};

exports._meta = {
  "version": 1
};
