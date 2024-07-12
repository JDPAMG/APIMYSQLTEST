CREATE DATABASE IF NOT EXIST pruebadb;

USE pruebadb;

CREATE TABLE employee (

    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30) DEFAULT NULL,
    Sueldo INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
(1, 'Juan', 1000),
(2, 'Sam', 1000);