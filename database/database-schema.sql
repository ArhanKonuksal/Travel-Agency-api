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


CREATE TABLE destinations (
    destination_id int AUTO_INCREMENT PRIMARY KEY,
    destination_name VARCHAR(50) NOT NULL,
    destination_location VARCHAR(50) NOT NULL,
    description VARCHAR(150) NOT NULL,
    price DECIMAL(10, 2)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

DROP TABLE IF EXISTS customers;
CREATE TABLE customers(
    customer_id  int AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
  phone_number VARCHAR(30) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

DROP TABLE IF EXISTS bookings;
CREATE TABLE bookings(
    booking_id int AUTO_INCREMENT PRIMARY KEY,
    customer_id int NOT NULL,
    destination_id int NOT NULL,
    booking_date DATE,
    departure_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (destination_id) REFERENCES destinations(destination_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

DROP  TABLE IF EXISTS inclusive;
CREATE TABLE  inclusive(
    inclusive_id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(150) NOT NULL,
    price DECIMAL(10, 2),
    days int NOT NULL,
    destination VARCHAR(255) NOT NULL,
    inclusive_type VARCHAR(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;



