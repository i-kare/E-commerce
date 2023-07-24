# E-commerce
6.26.23 Object-Relational Mapping (ORM):  The back-end for an e-commerce website that uses the latest technologies SO THAT the respective company can compete with other e-commerce companies

## Acceptance Criteria

1.WHEN I add my database name, MySQL username, and MySQL password to an environment variable file THEN I am able to connect to a database using Sequelize

2.WHEN I enter schema and seed commands THEN a development database is created and is seeded with test data

3.WHEN I enter the command to invoke the application THEN my server is started and the Sequelize models are synced to the MySQL database
 
4.WHEN I open API GET routes in Insomnia Core for categories, products, or tags THEN the data for each of these routes is displayed in a formatted JSON

5.WHEN I test API POST, PUT, and DELETE routes in Insomnia Core THEN I am able to successfully create, update, and delete data in my database

## Walkthrough Video
https://drive.google.com/file/d/1tjjtyZ10Va6iMioOcXWRn2i2_Z83G4q0/view?usp=sharing

## How to run application
1. Create .env file with sql information
2. Npm install and npm run seed
3. Npm run start
4. Api call these endpoints, localhost:3001/api/tags, localhost:3001/api/products, localhost:3001/api/categories
5. You can get all, get by id, post, put by id, delete by id


