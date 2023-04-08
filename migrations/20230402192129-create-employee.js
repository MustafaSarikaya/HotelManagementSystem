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
  var sql = `CREATE TABLE employee (
                    employee_ID INT(11) NOT NULL AUTO_INCREMENT,
                    hotel_ID INT(11) NOT NULL,
                    name VARCHAR(50) NOT NULL,
                    position VARCHAR(255) NOT NULL,
                    SIN INT(9) NOT NULL,
                    salary DECIMAL(8,2) NOT NULL,
                    phone_number VARCHAR(100) NOT NULL, 
                    address VARCHAR(255) NOT NULL,
                    PRIMARY KEY (employee_ID)
  );`;

return db.runSql(sql);
};

exports.down = function(db) {
  var sql = `DROP TABLE employee;`;
  return db.runSql(sql);
};

exports._meta = {
  "version": 1
};
