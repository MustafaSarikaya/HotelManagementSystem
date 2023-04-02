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
  var sql = `CREATE TABLE rental_log (
                    log_ID INT(11) NOT NULL AUTO_INCREMENT,
                    rental_ID INT(11) NOT NULL,
                    hotel_ID INT(11) NOT NULL,
                    chain_ID INT(11) NOT NULL,
                    start_date DATE NOT NULL,
                    end_date DATE NOT NULL,
                    guest_name DATE NOT NULL,
                    room_number INT(3) NOT NULL,
                    rental_price DECIMAL(7,2) NOT NULL,
                    additional_charges DECIMAL(7,2),
                    amenities VARCHAR(255),
                    room_capacity INT(2) NOT NULL,
                    view_type ENUM('sea', 'mountain') NOT NULL,
                    extendability INT(1) NOT NULL,
                    problems VARCHAR(255),
                    action VARCHAR(10) NOT NULL,
                    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                    PRIMARY KEY (log_ID)
);`;

return db.runSql(sql);
};

exports.down = function(db) {
var sql = `DROP TABLE rental_log;`;
return db.runSql(sql);
};

exports._meta = {
  "version": 1
};
