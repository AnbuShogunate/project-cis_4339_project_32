# project-cis_4339_project_32
#### project-cis_4339_project_32 created by GitHub Classroom
#### Option B: Bread of Life 

### Project Setup: 
    1) Using your preferred cloning method, clone repository: https://github.com/CIS-FA21/project-cis_4339_project_32.git 

### To get started, open your cloned project in your IDE of choice, and then:
    1) Run the command: npm install
        * This will install all the dependencies you need to run the application
    2) To run the application run the command: node app.js
        * This will start the application. However, you will still have to insert data in order to test the routes. 
            * See below for sample data you can insert by using PostMan
    3) Import 4339 PROJECT.postman_collection.json for the routes.
        * side notes: Below is a complete list of records to be inserted into postman, the 4339 PROJECT.postman_collection.json contains only some samples of it.


### Insert these (6) sample records using PostMan: 
[
{
    "eventType": "Clothing Distribution",
    "locationName": "NRG Stadium",
    "address": "713 Cool st",
    "city": "Houston",
    "state": "Texas",
    "zip": 54321,
    "eventDate": "11/11/2021",
    "firstName": "Cristiano",
    "lastName": "Ronaldo",
    "dob": "02/05/1985",
    "phone": "281-330-8004",
    "type": "Social Media",
    "specify": "Instagram",
    "wantTheVaccine": "yes",
    "vaccinePreference": "Moderna",
    "vaccinationStatus": "no",
    "needAdditionalSupportServices": "Nutritional Support",
    "numberChildInHH": 4,
    "anyoneInHHover65": "no",
    "veteran": "no",
    "race": "White"
},

{
    "eventType": "Food Distribution",
    "locationName": "BBVA Stadium",
    "address": "123 Sweet st",
    "city": "Houston",
    "state": "Texas",
    "zip": 77713,
    "eventDate": "10/10/2021",
    "firstName": "Lionel",
    "lastName": "Messi",
    "dob": "06/24/1987",
    "phone": "281-832-0001",
    "type": "Social Media",
    "specify": "Facebook",
    "wantTheVaccine": "yes",
    "vaccinePreference": "Pfizer",
    "vaccinationStatus": "no",
    "needAdditionalSupportServices": "Nutritional Support",
    "numberChildInHH": 2,
    "anyoneInHHover65": "no",
    "veteran": "no",
    "race": "White"
},

{
    "eventType": "Food Distribution",
    "locationName": "BBVA Stadium",
    "address": "123 Sweet st",
    "city": "Houston",
    "state": "Texas",
    "zip": 77713,
    "eventDate": "10/10/2021",
    "firstName": "Cristiano",
    "lastName": "Ronaldo",
    "dob": "02/05/1985",
    "phone": "281-330-8004",
    "type": "Social Media",
    "specify": "Facebook",
    "wantTheVaccine": "yes",
    "vaccinePreference": "Moderna",
    "vaccinationStatus": "no",
    "needAdditionalSupportServices": "Nutritional Support",
    "numberChildInHH": 4,
    "anyoneInHHover65": "no",
    "veteran": "no",
    "race": "White"
},

{
    "eventType": "Clothing Distribution",
    "locationName": "Toyota Center",
    "address": "1738 Deez Blvd",
    "city": "Houston",
    "state": "Texas",
    "zip": 98666,
    "eventDate": "10/30/2021",
    "firstName": "Neymar",
    "lastName": "da Silva Santos Junior",
    "dob": "02/05/1992",
    "phone": "281-832-0001",
    "type": "Social Media",
    "specify": "Facebook",
    "wantTheVaccine": "no",
    "vaccinePreference": "N/A",
    "vaccinationStatus": "yes",
    "needAdditionalSupportServices": "Nutritional Support",
    "numberChildInHH": 1,
    "anyoneInHHover65": "no",
    "veteran": "no",
    "race": "White"
},

{
    "eventType": "Clothing Distribution",
    "locationName": "Toyota Center",
    "address": "1738 Deez Blvd",
    "city": "Houston",
    "state": "Texas",
    "zip": 98666,
    "eventDate": "10/30/2021",
    "firstName": "Paul",
    "lastName": "Pogba",
    "dob": "03/15/1993",
    "phone": "956-001-4567",
    "type": "Social Media",
    "specify": "Instagram",
    "wantTheVaccine": "no",
    "vaccinePreference": "N/A",
    "vaccinationStatus": "yes",
    "needAdditionalSupportServices": "No",
    "numberChildInHH": 1,
    "anyoneInHHover65": "no",
    "veteran": "no",
    "race": "Black"
},

{
    "eventType": "Clothing Distribution",
    "locationName": "Toyota Center",
    "address": "1738 Deez Blvd",
    "city": "Houston",
    "state": "Texas",
    "zip": 98666,
    "eventDate": "10/30/2021",
    "firstName": "Paul",
    "lastName": "Sugma",
    "dob": "01/01/1999",
    "phone": "817-333-4424",
    "type": "Social Media",
    "specify": "Instagram",
    "wantTheVaccine": "no",
    "vaccinePreference": "N/A",
    "vaccinationStatus": "yes",
    "needAdditionalSupportServices": "No",
    "numberChildInHH": 1,
    "anyoneInHHover65": "no",
    "veteran": "no",
    "race": "Black"
}
]


#### INSERT FOR FUNCT 2.1 - 3

[
{
    "eventType": "Food Distribution",
    "locationName": "BBVA Stadium",
    "eventDate": "09/30/2021"
},

{
    "eventType": "Clothing Distribution",
    "locationName": "NRG Stadium",
    "eventDate": "12/30/2020"
},

{
    "eventType": "Clothing Distribution",
    "locationName": "Toyota Center",
    "eventDate": "10/31/2019"
},

{
    "eventType": "Clothing Distribution",
    "locationName": "Toyota Center",
    "eventDate": "10/28/2019"
}
]

----
### Some of these routes contain sample data for testing purposes. Please replace appropriate fields as needed.
#### CRUD for intake form
**POST** http://localhost:3000/form

**READ** http://localhost:3000/forms

**READ by id** http://localhost:3000/forms-result/cc52bfd1-265a-11ec-879f-cb375f5e39da 

**PUT** http://localhost:3000/forms/cc52bfd1-265a-11ec-879f-cb375f5e39da

**DELETE by id** http://localhost:3000/delete-forms/cc52bfd1-265a-11ec-879f-cb375f5e39da 


### Funct 1 - Read intake info on individuals based on location
**GET** http://localhost:3000/forms/Toyota%20Center 

### Funct 2 - CRUD for event form for managers
Funct 2.1 - CREATE
**POST** http://localhost:3000/eventform

Funct 2.2 - READ
**GET** http://localhost:3000/eventforms

Funct 2.3 - UPDATE
**PUT** http://localhost:3000/eventforms/92b1bd10-2625-11ec-aace-0770e4282e54

Funct 2.4 - DELETE
**DELETE** http://localhost:3000/event-delete-forms/92b1bd10-2625-11ec-aace-0770e4282e54


### Funct 3 - Read for 3 most current event/services
**GET** http://localhost:3000/most-currentevent/


### Funct 4.1 - returns the individual's type and specify based on name, dob, phone
**GET** http://localhost:3000/individual-data/Cristiano/Ronaldo/1985-02-05T06:00:00.000Z/281-330-8004

### Funct 4.2 - counts of the input information for specific person
**GET** http://localhost:3000/individual-total/Cristiano/Ronaldo/1985-02-05T06:00:00.000Z/281-330-8004

### Funct 5.1 - returns all of individuals information based on inputs (first/last name, dob, phone)
**GET** http://localhost:3000/individual-info/Cristiano/Ronaldo/1985-02-05T06:00:00.000Z/281-330-8004

### Funct 5.2 - returns the count for 5.1
**GET** http://localhost:3000/individual-count/Cristiano/Ronaldo/1985-02-05T06:00:00.000Z/281-330-8004

### Funct 6.1 - returns all events and their total
**GET** http://localhost:3000/forms-eventType/

### Funct 6.2 - returns all of the zip and sort them
**GET** http://localhost:3000/forms-zip/

### Side notes, for 6.3, there is not a collection so a manual add for route would be needed

### Funct 6.3 - Returns the event date and type using count
**GET** http://localhost:3000/forms-eventType/:eventType/:eventDate/












