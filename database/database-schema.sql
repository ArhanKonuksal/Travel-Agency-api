USE `travel_agency_api_db`;

-- DONT MODIFY THIS MIGRATION
-- it is used by Xest local development pipeline
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `run_on` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO `migrations` (
  name,
  run_on
) VALUES (
  "/20211107064324-database-schema",
  "20211107064324"
);

-- YOU CAN MODIFY BELOW THIS LINE
DROP TABLE IF EXISTS user_types;
CREATE TABLE user_types(
  user_type_id int AUTO_INCREMENT PRIMARY KEY,
  user_type VARCHAR(50) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
  user_id int AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(500) NOT NULL,
  user_type_id int NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_type_id) REFERENCES user_types(user_type_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;


CREATE TABLE Destinations (
    Destinations_id  int AUTO_INCREMENT  PRIMARY KEY,
    Destinations_id int AUTO_INCREMENT PRIMARY KEY,
    Destination_Name VARCHAR(50) NOT NULL,
    Destination_Location VARCHAR(50) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

DROP TABLE IF EXISTS Customers;
CREATE TABLE Customers(
    Customer_id  int AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
  phone_number VARCHAR(30) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

DROP TABLE IF EXISTS Bookings;
CREATE TABLE Bookings(
    BookingID int AUTO_INCREMENT PRIMARY KEY,
    Customer_id int NOT NULL,
    Destinations_id int NOT NULL,
    Booking_Date DATE,
    Departure_Date DATE,
    FOREIGN KEY (Customer_id) REFERENCES Customers(Customer_id),
    FOREIGN KEY (Destinations_id) REFERENCES Destinations(Destinations_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE Packages (
    package_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    days INT NOT NULL,
    destination VARCHAR(255) NOT NULL,
    package_type VARCHAR(255) NOT NULL,
    FOREIGN KEY (Destination_Location) REFERENCES Destinations(Destination_Location),
);

