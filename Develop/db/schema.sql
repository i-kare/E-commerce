-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- Create Table Category
CREATE TABLE Category (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(30) NOT NULL,
);

-- Create Table Product 
CREATE TABLE Product(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INTEGER NOT NULL DEFAULT 10,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES category(id)
);

-- Create Table Tag
CREATE TABLE Tag(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(30)
);

-- Create Table ProductTag
CREATE TABLE ProductTag(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INTEGER,
    tag_id INTEGER,
    FOREIGN KEY (product_id) REFERENCES product(id),
    FOREIGN KEY (tag_id) REFERENCES tag(id)
)