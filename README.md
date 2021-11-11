# project-cis_4339_project_32
project-cis_4339_project_32 created by GitHub Classroom


### Project Setup: 
    1) Using your preferred cloning method, clone repository: https://github.com/CIS-FA21/project-cis_4339_project_32.git 

### To get started, open your cloned project in your IDE of choice, and then:
    1) In your IDE, CD into /Backend
    
    2) Run the command: npm install
        * This will install all the dependencies for the back-end that you need to run the application
        
    3) Add your own .env file (for local use)
        * For cloud/production, use: MONGO_URL = mongodb+srv://admin:root@cis-4339-group-32.innm6.mongodb.net/CIS4339Group32?retryWrites=true&w=majority 
        
    4) In order for the full application to function properly, you will need to run the back-end and front-end separately. To run the Backend, while in the /Backend directory,
      run the command: node app.js (For cloud use, please also do the same) 
        * This will start the backend of the application
        
    5) CD into the front-end, which is named /project32. To install dependencies for the Frontend, while in the /project32 directory,
      run the command: npm install
        * This will install all the dependencies for the front-end that you need to run the application
      
    6) To run the Frontend, while in the /project32 directory, run the commandrun the command: npm run serve
        * This will start the front-end of the application
    
    7) You can now navigate to a browser of your choice & use the application by clicking on the localhost link provided in the terminal after running the command from Step 6.
        
    [Side note] In order to run it in cloud,
    please change line 21 in Backend app.js: origin:'http://localhost:8080', to origin:'https://cis-4339-group-32-yxjjm.mongodbstitch.com', for production.
    And the website is: https://cis-4339-group-32-yxjjm.mongodbstitch.com/ and do npm app.js in Backend
