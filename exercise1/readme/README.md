# crud-simple
# N-Joy :)


to run ::
    1- clone

    2- cd backend folder
    3- sudo docker-compose up -d --build
    4- sudo docker-compose up

    5- works on http://localhost:8080


routes ::
    1- users/
        POST addUser >> name, email, phone, age
        sample inputs
        {
            name: Mohamed Taher,
            email: moslem.dev.2016@gmail.com
            phone: 01020393975
            age: 28
        }
        
        PUT /:userId > updateUser >> name, email, phone, age
        DELETE /:userId > deleteUser >> id: userId >> return deleted user data
        GET /:userId >> id: userId >> return user data
        GET / >> with 2 query >> page? | limit? >> return [user]


attached also ::
    1- crudSimple.postman_collection.json :: a postman file to test all api's 
    2- backend / frontend source code for review and evaluate
    3- Screenshots.zip compressed file contains some screenshots for running app.

focused points as possible ::
    1-scratching
    2-IOC > Inversion Of Control
    3-SOLID principles [as possible]
    4-generic components
    5-custom hooks
    6-high reusability
    7-single truth sourcing.
    8- clear coding
    9- catch errors
    10- organize logic & structure

console.log("thank you so much :) ");
