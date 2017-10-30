CREATE DATABASE burgered_db;
USE burgered_db;

CREATE TABLE daburger
(
	id int NOT NULL AUTO_INCREMENT,
	burgername varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    date DATETIME NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO daburger (burgername, date) VALUES ('bacon Burger', current_timestamp());


INSERT INTO daburger (burgername, devoured, date) VALUES ('cheddaBurger', false, current_timestamp());


INSERT INTO daburger (burgername, devoured, date) VALUES ('BBQ burger', true, current_timestamp());