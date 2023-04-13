# CSI2132 HotelManagemantSystem 

## Team members:

- Mustafa Sarikaya
- Christopher Junop

# How to build
Install Docker if you don’t have it already.
First download and extract the source code. 
Go to the directory of the project in the terminal.
Run the following docker-compose build command:
Building with compose

`docker compose up -d --build`

Docker should install a database image of mariadb.
To instantiate our database you need to go to the terminal and run the following command:

`db-migrate up`

This command will run create table queries, will insert the seed data and will create indexes and views.
You can now run the project on terminal by this command:

`npm start`

The app should be live on http://localhost:8000/hms/api

