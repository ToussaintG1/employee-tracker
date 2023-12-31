DROP DATABASE IF EXISTS employees_db

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department(
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id),
name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id),
title VARCHAR(30) NOT NULL,
salary DECIMAL,
department_id INT NOT NULL,
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id),
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT NOT NULL,
manager_id INT,
FOREIGN KEY (role_id) REFERENCES role(id),
FOREIGN KEY (manager_id) REFERENCES employee(id)
);

