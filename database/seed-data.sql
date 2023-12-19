/* Initialize DB with some seed data */
USE `travel_agency_api_db`;

-- DONT MODIFY THIS MIGRATION
-- it is used by Xest local development pipeline
INSERT INTO `migrations` (
  name,
  run_on
) VALUES (
  "/20211107064324-seed-data",
  "20211107064324"
);

-- YOU CAN MODIFY BELOW THIS LINE
INSERT INTO user_types (user_type_id, user_type)
VALUES (1, "admin");
INSERT INTO user_types (user_type_id, user_type)
VALUES (2, "user");

INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (1, "Ahmet", "Akinsql", "ahmet@akinsql.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 1, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (2, "Joe", "Bloggs","joebloggs@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (3, "Jim", "Bloggs" , "jimbloggs@yahoo.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");

INSERT INTO Destinations (Destination_Name, Destination_Location, Description, Price)
VALUES ("Paris", "France", "The City of Love", 1500.00);
INSERT INTO Destinations (Destination_Name, Destination_Location, Description, Price)
VALUES ("Amsterdam", "Netherlands", "The City of Canals", 1700.00);
INSERT INTO Destinations (Destination_Name, Destination_Location, Description, Price)
VALUES ("Rome", "Italy", "The City of Gladiators", 1600.50);
INSERT INTO Destinations (Destination_Name, Destination_Location, Description, Price)
VALUES ("New York", "America", "Big Apple", 2499.99);
INSERT INTO Destinations (Destination_Name, Destination_Location, Description, Price)
VALUES ("Barcelona", "Spain", "Home of Architecture", 1300.80);

INSERT INTO Customers (first_name, last_name, email, phone_number)
VALUES ("Aral", "Hudaoglu", "aral.hudaoglu@gmail.com", "05338322717");
INSERT INTO Customers (first_name, last_name, email, phone_number)
VALUES ("Zihni", "Guclu", "zihni.guclu@gmail.com", "05338577074");
INSERT INTO Customers (first_name, last_name, email, phone_number)
VALUES ("Arhan", "Konuksal", "arhan.kon@gmail.com", "05488504090");
INSERT INTO Customers (first_name, last_name, email, phone_number)
VALUES ("Jack", "Smith", "jacksmith@gmail.com", "07934597393");


INSERT INTO Bookings (Customer_id, Destinations_id, Booking_Date, Departure_Date)
VALUES (1, 1, "2023-06-10", "2023-06-20");
INSERT INTO Bookings (Customer_id, Destinations_id, Booking_Date, Departure_Date)
VALUES (2, 2, "2023-08-15", "2023-08-25");
INSERT INTO Bookings (Customer_id, Destinations_id, Booking_Date, Departure_Date)
VALUES (3, 3, "2023-05-26", "2023-09-07");
INSERT INTO Bookings (Customer_id, Destinations_id, Booking_Date, Departure_Date)
VALUES (4, 4, "2023-03-12", "2023-07-16");
