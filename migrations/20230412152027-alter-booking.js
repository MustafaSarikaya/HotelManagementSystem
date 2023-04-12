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
  const sql = `ALTER TABLE booking
                    DROP COLUMN guest_name,
                    DROP COLUMN room_number,
                    DROP COLUMN amenities,
                    DROP COLUMN room_capacity,
                    DROP COLUMN view_type,
                    DROP COLUMN extendability,
                    DROP COLUMN problems,
                    ADD COLUMN customer_ID INT(11) NOT NULL;`;

  db.runSql(sql, callback);
};

exports.down = function(db, callback) {
  const sql = `ALTER TABLE booking
                    ADD COLUMN guest_name,
                    ADD COLUMN room_number,
                    ADD COLUMN amenities,
                    ADD COLUMN view_type,
                    ADD COLUMN extendability,
                    ADD COLUMN room_capacity,
                    ADD COLUMN problems,
                    DROP COLUMN customer_ID INT(11) NOT NULL;`;

  db.runSql(sql, callback);
};

exports._meta = {
  "version": 1
};
