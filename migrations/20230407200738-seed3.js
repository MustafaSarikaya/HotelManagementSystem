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
  var employee = `INSERT INTO employee (hotel_ID,name,position,SIN,salary,phone_number,address)
  VALUES
    (1,"Jarrod Estes","Manager",577391999,114237,"1-475-271-2115","Ap #686-614 Ut Rd."),
    (2,"Odysseus Nielsen","Manager",758140422,114237,"(816) 489-8416","P.O. Box 662, 670 Laoreet St."),
    (3,"Doris Barrera","Manager",990279458,114237,"(217) 362-9961","3715 Donec Rd."),
    (4,"Leo Welch","Manager",609031340,114237,"1-951-227-3861","3898 Nulla St."),
    (5,"Ciara Mcguire","Manager",269342850,114237,"(799) 315-9729","560-4654 Bibendum Avenue"),
    (6,"Dana Vang","Manager",856017265,114237,"1-773-552-3211","P.O. Box 588, 9590 Pede. Ave"),
    (7,"Lucas Wright","Manager",813812692,114237,"(763) 847-4141","675-5393 Metus. St."),
    (8,"Chava Neal","Manager",814688472,114237,"(275) 471-9775","925-3774 Vulputate, Rd."),
    (8,"Seth Berry","Security",355004274,74647,"(234) 875-2047","Ap #971-7416 Imperdiet Av."),
    (3,"Cyrus Talley","Reception",262381803,62136,"(231) 972-7097","Ap #569-2350 Tristique Rd."),
    (5,"Xavier Callahan","Chef",624750732,92221,"1-921-407-4727","517-9516 Sed St."),
    (1,"Maryam Ortiz","Cleaning",423011667,47406,"(371) 208-4702","Ap #255-2012 Sed Ave"),
    (2,"Salvador Forbes","Cleaning",515714322,73613,"1-604-283-0969","P.O. Box 635, 6915 Aliquet Road"),
    (3,"Eugenia Olsen","Chef",179368307,84621,"(786) 926-1681","Ap #504-9133 Phasellus Avenue"),
    (8,"Irene Dillard","Security",433508031,47406,"(559) 809-0467","1430 A Street"),
    (3,"Gabriel Avery","Cleaning",185767376,93202,"(761) 976-1731","P.O. Box 995, 1319 Malesuada Av."),
    (4,"Eve West","Security",772019256,47406,"1-566-541-4013","350-2256 Diam Road"),
    (5,"Aladdin Stafford","Cleaning",884305671,47406,"(218) 503-3993","410-9628 Cras Av."),
    (6,"Murphy Hunt","Security",673218727,47406,"1-663-563-5884","Ap #883-1247 Sociis Rd."),
    (5,"Adam Anderson","Reception",136215537,99938,"1-437-631-5353","8703 Non Street"),
    (2,"Athena Barlow","Security",423249957,99452,"(192) 833-4578","Ap #364-8857 Suspendisse Avenue"),
    (2,"Hayden Stewart","Cleaning",757558806,47406,"(701) 752-3514","9711 Pretium Street"),
    (5,"Ebony Kent","Security",178269692,40287,"1-248-418-5218","P.O. Box 328, 4469 Turpis. Rd."),
    (2,"Ian Brock","Reception",910755056,47406,"1-512-820-0886","Ap #708-7573 Vel, Street"),
    (2,"Tanek Wilder","Security",558224863,95694,"1-661-212-4485","Ap #501-1881 Donec Street"),
    (1,"Haley Waller","Cleaning",849228783,42922,"1-891-723-0103","286-1602 Nulla. St."),
    (3,"Bethany Figueroa","Security",260426579,91266,"1-340-515-8265","6377 Ipsum Street"),
    (4,"Arthur Harris","Cleaning",691709618,47406,"1-672-774-6850","P.O. Box 740, 9753 Pede. Av."),
    (2,"Aidan Watkins","Cleaning",306620198,47406,"(234) 360-8863","Ap #582-9214 Tellus Av."),
    (6,"Ross Austin","Security",825808521,50399,"(218) 675-1737","P.O. Box 262, 3353 Justo St."),
    (8,"Madison Lawson","Reception",628208420,47406,"1-284-740-4205","857 Sapien Road"),
    (4,"Latifah Nicholson","Reception",770855564,54469,"1-761-803-2588","760-9671 Luctus, Av."),
    (6,"Harper Briggs","Cleaning",825948376,42671,"(768) 665-6506","Ap #795-8650 Neque. St."),
    (4,"Aurelia Cobb","Cleaning",121252911,47406,"1-688-637-0745","7090 Est. Street"),
    (6,"Zia Rasmussen","Chef",475117664,47406,"(782) 479-3820","7694 Metus Rd."),
    (8,"Malcolm Browning","Reception",933271026,69821,"(768) 266-3445","663-9424 Lacinia Street"),
    (7,"Inez Mays","Security",706987359,76586,"(561) 306-8235","244-8716 Aptent Avenue"),
    (4,"Clare Mcfarland","Security",777724570,85627,"(837) 553-2789","953-7230 Et, Av."),
    (8,"Joshua Peterson","Chef",619242936,45849,"(442) 423-7086","8578 Feugiat Avenue"),
    (3,"Mariko Griffith","Reception",275557491,47406,"(141) 836-7745","Ap #828-6471 Hendrerit St.");
  `;

  return db.runSql(employee);
};

exports.down = function(db) {
  var employee = `DELETE FROM employee;`;
  return db.runSql(employee);
};

exports._meta = {
  "version": 1
};
