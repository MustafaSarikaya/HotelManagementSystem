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
  return null;
};

exports.down = function(db) {
  var chains = `INSERT INTO chain (chain_name, email,number_hotels, phone_number, address)
  VALUES
    ("Sed Libero Hotel Chain","blandit.mattis@aol.net",4,"(502) 132-5205","702-4738 Id, Street"),
    ("Proin Ultrices Hotel Chain","pede@yahoo.org",5,"1-347-555-6277","Ap #257-6835 At, Ave"),
    ("Vivamus Rhoncus Hotel Chain","mauris@outlook.edu",6,"(482) 288-8085","P.O. Box 129, 4957 Odio Rd."),
    ("Adipiscing Mauris Hotel Chain","eros.nam@aol.com",3,"1-602-554-7885","193 Sed Rd."),
    ("Nunc Quis Arcu Hotel Chain","ornare.lectus@protonmail.org",10,"1-393-947-0818","862-4396 Erat, Street");`;
  
  db.rawSql(chains);

  var hotels = `INSERT INTO hotel (chain_ID, name, rating, number_rooms , email, manager_ID, phone_number, address)
  VALUES
    (1,"Vel Vulputate Eu Hotel",5,5,"commodo.auctor@aol.com",1,"1-645-339-4486","Ap #967-5090 Et Road, Toronto"),
    (5,"Ante Iaculis Hotel",4,5,"venenatis.a@yahoo.ca",2,"1-473-613-1675","Ap #987-615 Nascetur Avenue, Toronto"),
    (4,"Non Dapibus Hotel",4,5,"amet.dapibus.id@aol.edu",3,"(742) 176-2342","P.O. Box 883, 5641 Sociis Ave, Ottawa"),
    (2,"Vestibulum Hotel",2,5,"orci@protonmail.com",4,"1-324-403-1281","214 Arcu St., Ottawa"),
    (2,"Magna Phasellus Hotel.",5,5,"mauris@google.edu",5,"(172) 595-6776","3671 Euismod Av., Vancouver"),
    (3,"Dignissim Tempor Arcu Hotel",0,5,"porta.elit@outlook.edu",6,"(627) 998-5743","Ap #538-2496 Dapibus Road, Vancouver"),
    (4,"Odio Nam Hotel",2,5,"fusce.fermentum@yahoo.ca",7,"(637) 625-5174","6898 Donec Rd., New York"),
    (1,"Donec Porttitor Hotel",0,5,"euismod.enim@hotmail.ca",8,"(805) 686-9044","2997 At, St., Houston");
  `;

  db.rawSql(hotels);

  var rooms = ``;


  return null;
};

exports._meta = {
  "version": 1
};
