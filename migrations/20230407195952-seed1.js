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
  var hotels = `INSERT INTO hotel (chain_ID, name, rating, number_rooms , email, manager_ID, phone_number, address)
  VALUES
    (26,"Vel Vulputate Eu Hotel",5,5,"commodo.auctor@aol.com",1,"1-645-339-4486","Ap #967-5090 Et Road, Toronto"),
    (30,"Ante Iaculis Hotel",4,5,"venenatis.a@yahoo.ca",2,"1-473-613-1675","Ap #987-615 Nascetur Avenue, Toronto"),
    (29,"Non Dapibus Hotel",4,5,"amet.dapibus.id@aol.edu",3,"(742) 176-2342","P.O. Box 883, 5641 Sociis Ave, Ottawa"),
    (27,"Vestibulum Hotel",2,5,"orci@protonmail.com",4,"1-324-403-1281","214 Arcu St., Ottawa"),
    (27,"Magna Phasellus Hotel.",5,5,"mauris@google.edu",5,"(172) 595-6776","3671 Euismod Av., Vancouver"),
    (28,"Dignissim Tempor Arcu Hotel",1,5,"porta.elit@outlook.edu",6,"(627) 998-5743","Ap #538-2496 Dapibus Road, Vancouver"),
    (29,"Odio Nam Hotel",2,5,"fusce.fermentum@yahoo.ca",7,"(637) 625-5174","6898 Donec Rd., New York"),
    (26,"Donec Porttitor Hotel",1,5,"euismod.enim@hotmail.ca",8,"(805) 686-9044","2997 At, St., Houston");`;

  return db.runSql(hotels);
};

exports.down = function(db) {
  var hotel = `DELETE FROM hotel;`;
  db.runSql(hotel);
};

exports._meta = {
  "version": 1
};
