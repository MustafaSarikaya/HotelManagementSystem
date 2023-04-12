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
  const sql = `INSERT INTO customer (registration_Date,name,phone_number,SIN,address)
  VALUES
    ("15.02.22","Dalton Dotson","1-446-893-1816",919089716,"Ap #248-7039 Adipiscing Rd."),
    ("18.02.24","Garrett O'brien","1-408-668-4978",481518299,"599-8241 Adipiscing. Avenue"),
    ("26.09.23","Lionel Wilcox","1-211-361-8626",928454159,"P.O. Box 611, 7924 Non, Rd."),
    ("22.05.23","Hedda Olsen","1-380-287-4935",293864884,"794-2551 Est, Rd."),
    ("03.01.24","Adrian Wall","(493) 628-6769",335769243,"Ap #816-9630 Nulla Av."),
    ("23.07.22","Mohammad Edwards","(624) 586-7518",861178911,"Ap #864-1831 Fames Road"),
    ("15.02.22","Amanda Sawyer","(411) 675-4784",316854093,"538-9350 Adipiscing Street"),
    ("11.04.22","Salvador Graham","(461) 447-7430",589542673,"1759 Purus, Avenue"),
    ("07.12.22","Vaughan Atkinson","(633) 687-2755",355714725,"5863 Arcu St."),
    ("03.06.23","Bradley Sandoval","1-420-561-1724",428564448,"Ap #390-2989 Bibendum Rd."); 
  `

  db.runSql(sql, callback);
};

exports.down = function(db, callback) {
  const sql = `DELETE FROM customer;`;
  return db.runSql(sql, callback);
};

exports._meta = {
  "version": 1
};
