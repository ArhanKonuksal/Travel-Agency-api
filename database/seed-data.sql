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




INSERT INTO destinations (destination_name, destination_location, description, price)
VALUES ("Paris", "France", "The City of Love", 1500.00),
       ("Amsterdam", "Netherlands", "The City of Canals", 1700.00),
       ("Rome", "Italy", "The City of Gladiators", 1600.50),
       ("New York", "America", "Big Apple", 2499.99),
       ("Barcelona", "Spain", "Home of Architecture", 1300.80),
       ("Tokyo", "Japan", "The Land of the Rising Sun", 1800.25),
       ("Sydney", "Australia", "Harbor City", 2000.75),
       ("Rio de Janeiro", "Brazil", "The Marvelous City", 1450.60),
       ("Dubai", "United Arab Emirates", "City of Skyscrapers", 2200.40),
       ("Cape Town", "South Africa", "Mother City", 1750.90);


INSERT INTO customers (first_name, last_name, email, phone_number)
VALUES ("Aral", "Hudaoglu", "aral.hudaoglu@gmail.com", "05338322717");

INSERT INTO customers (first_name, last_name, email, phone_number)
VALUES ("Zihni", "Guclu", "zihni.guclu@gmail.com", "05338577074");

INSERT INTO customers (first_name, last_name, email, phone_number)
VALUES ("Arhan", "Konuksal", "arhan.konuksal@gmail.com", "05488504090");

INSERT INTO customers (first_name, last_name, email, phone_number)
VALUES ("Erdem", "Ayhan", "erdemayhan@gmail.com", "07934597393");

INSERT INTO customers (first_name, last_name, email, phone_number)
VALUES ("Hazan", "Serifli", "hazan@gmail.com", "07934597393");

INSERT INTO customers (first_name, last_name, email, phone_number)
VALUES ("Faruk", "Sertbay", "farukserabay@gmail.com", "07934597393");

INSERT INTO customers (first_name, last_name, email, phone_number)
VALUES ("Ahmet", "Akinsel", "ahmetaknsl@gmail.com", "07934597393");

INSERT INTO customers (first_name, last_name, email, phone_number)
VALUES ("Ali", "Dogan", "alidogan@gmail.com", "07934597393");



INSERT INTO bookings (customer_id, destination_id, booking_date, departure_date)
VALUES (1, 1, "2023-06-10", "2023-06-20");

INSERT INTO bookings (customer_id, destination_id, booking_date, departure_date)
VALUES (2, 2, "2023-08-15", "2023-08-25");

INSERT INTO bookings (customer_id, destination_id, booking_date, departure_date)
VALUES (3, 3, "2023-05-26", "2023-09-07");

INSERT INTO bookings (customer_id, destination_id, booking_date, departure_date)
VALUES (4, 4, "2023-03-12", "2023-07-16");


INSERT INTO packages (name, description, price, days, destination, package_type)
VALUES ('Romantic Getaway', 'Escape to the City of Love', 2000.00, 5, 'Paris', 'Couple'),
       ('Adventure Expedition', 'Explore the Rio de Jenario beaches', 2500.50, 7, 'Brazil', 'Fun'),
       ('Cultural Experience', 'Discover the Rich Heritage of Rome', 1800.75, 4, 'Italy', 'Culture'),
       ('City Explorer', 'Experience the Bustle of New York City', 3000.99, 6, 'America', 'City'),
       ('Beach Retreat', 'Relax on the Beautiful Beaches of Sydney', 2200.80, 8, 'Australia', 'Beach'),
       ('Architectural Tour', 'Marvel at the Wonders of Barcelona', 1500.25, 3, 'Spain', 'Culture');
