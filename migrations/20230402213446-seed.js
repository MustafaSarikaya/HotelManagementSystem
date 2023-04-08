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
  var chains = `INSERT INTO chain (chain_name, email,number_hotels, phone_number, address)
  VALUES
    ("Sed Libero Hotel Chain","blandit.mattis@aol.net",4,"(502) 132-5205","702-4738 Id, Street"),
    ("Proin Ultrices Hotel Chain","pede@yahoo.org",5,"1-347-555-6277","Ap #257-6835 At, Ave"),
    ("Vivamus Rhoncus Hotel Chain","mauris@outlook.edu",6,"(482) 288-8085","P.O. Box 129, 4957 Odio Rd."),
    ("Adipiscing Mauris Hotel Chain","eros.nam@aol.com",3,"1-602-554-7885","193 Sed Rd."),
    ("Nunc Quis Arcu Hotel Chain","ornare.lectus@protonmail.org",10,"1-393-947-0818","862-4396 Erat, Street");`;
  
  return db.runSql(chains);
};

exports.down = function(db) {
  var chain = `DELETE FROM chain;`;
  return db.runSql(chain);
};

exports._meta = {
  "version": 1
};
