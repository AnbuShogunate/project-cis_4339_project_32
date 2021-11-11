/* Work contribution
Create - user who created the template
Idea - user who gives ideas
Fix - user who fixes the code and make it work for that section
Complete - user who finalized the work based on previous
side notes: if there is only one name then it is that person who does the code from start to finish
side notes 2: the code is created by everyone if it doesn't have a name and that if there is not a name then it is to the previous
*/
// app requirements
// Create Everyone
const e = require("express");
const express = require("express")
const mongoose = require("mongoose");
const form = require("./Model/form");
    // Do we want to include: const morgan = require ("morgan")  ??
require("dotenv").config();
const app = express();

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:8080',
    //origin:'https://cis-4339-group-32-yxjjm.mongodbstitch.com',                //production requirement
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


// importing the form & eventform models/schemas
let FormModel = require('./Model/form');
let eventFormModel = require('./Model/eventform');

// setting up mongoose DB connection
mongoose
    .connect(process.env.MONGO_URL) // reads enviroment variable from the .env
    .then(() => {
        console.log("Successfully connected to the database!");
    })
    .catch((err) => {
        console.error("Oops, there was an error connecting to MongoDB...", err);
    });


// This is the port number (declaring)
const PORT = process.env.PORT || 3000; 


// allows us to access the request body as req.body
app.use(express.json()); 
    // app.use(morgan("dev")); // ADD THIS IF USING morgan --> enables incoming request logging in dev mode



// This endpoint creates a form document
// CREATE
// Create Heri
app.post('/form', (req, res, next) => {
  //inserts based on formmodel.js
    FormModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        }
        else {
            //res.json(data)
            res.send('This form has been added to the database.')
        }
    }); 
});



// creates an endpoint to get all the api data in the db
// READ
// Create Andrew
app.get('/forms', (req, res, next) => {
    //call all data from form model
    FormModel.find((error, data) => {
        if (error) {
          //returns error message if one is found
          return next(error)
        } else {
          res.json(data)
        }
      })
});

// creates an endpoint that will retrieve form results by _id
// READ
// Create Andrew
app.get('/forms-result/:id', (req, res, next) => {
    FormModel.find({ _id: req.params.id }, (error, data) => {
        if (error) {
          return next(error)
        }
        else {
          res.json(data);
        }
    });
});


//Sprint 2 - GET form to Edit Form
app.get('/forms/:id', (req, res, next) => {
  FormModel.findOne({ _id: req.params.id}, (error, data) => {
      if (error) {
        return next(error)
      }
      else {
        res.json(data);
      }
  });
});


// This endpoint updates a form by id
// UPDATE
// Create Weizhao
app.put('/forms/:id', (req, res, next) => {
  //updates using the id provided in the route
    FormModel.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.send('Form is edited via PUT');
          console.log('Form successfully updated!', data)
        }
      })
});



// This endpoint deletes a form by id
// DELETE
// Create Weizhao
app.delete('/delete-forms/:id', (req, res, next) => {
  //deletes a form using the id input
  FormModel.findOneAndRemove({ _id: req.params.id}, (error, data) => {
      if (error) {
        return next(error);
      } else {
         res.status(200).json({
           msg: data
         });
      }
    });
});


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 1) They need a page that provides intake information on individuals served at certain distribution events/services.
// Create Heri
// Idea Weizhao
// Complete Heri
app.get('/forms/:location', (req, res, next) => {
  //finds all the forms that matches the location input
  FormModel.find({ locationName: req.params.location }, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data);
      }
  });
}); 


// 2.1) There needs to be a page where a project manager can update the list of events/services offered
// CREATE
// Create - Andrew
// Idea - Everyone
// Complete - Everyone
// This endpoint creates an event form document
app.post('/eventform', (req, res, next) => {
  //creates a event form document for manager/supervisor to peruse
  eventFormModel.create(req.body, (error, data) => {
      if (error) {
          return next(error)
      }
      else {
          //res.json(data)
          res.send('This form has been added to the database.')
      }
  }); 
});

// 2.2) creates an endpoint to get all the api data in the db
// READ
app.get('/eventforms', (req, res, next) => {
  //call all data from event form model
  eventFormModel.find((error, data) => {
      if (error) {
        //returns error message if one is found
        return next(error)
      } else {
        res.json(data)
      }
    })
});


// TESTING FOR SPRINT 2 to edit a single record so needed this GET by id..This retrieves an event by id
app.get('/eventforms/:id', (req, res, next) => {
  eventFormModel.findOne({ _id: req.params.id}, (error, data) => {
      if (error) {
        return next(error)
      }
      else {
        res.json(data);
      }
  });
});


// 2.3) This endpoint updates an event form by id
// UPDATE
app.put('/eventforms/:id', (req, res, next) => {
  //uses the id input from the route to locate the id in event form
  eventFormModel.findOneAndUpdate({ _id: req.params.id }, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('Form is edited via PUT');
        console.log('Form successfully updated!', data)
      }
    })
});

// 2.4) This endpoint deletes an event form by id
// DELETE
app.delete('/event-delete-forms/:id', (req, res, next) => {
  //uses the id input from the route to delete an event form
  eventFormModel.findOneAndRemove({ _id: req.params.id}, (error, data) => {
      if (error) {
        return next(error);
      } else {
         res.status(200).json({
           msg: data
         });
      }
    });
});


// 3) Get 3 most current events
// CREATE - Weizhao
app.get('/most-currentevent', (req, res, next) => {
  //finds all the date closest to today
  eventFormModel.find({
    eventdate: {$lt: Date()}
  },{eventDate: "$eventDate",eventType: "$eventType",locationName: "$locationName",_id:0}
  ,(error, data) => {
      if (error) {
        //returns error message if one is found
        return next(error)
      } else {
        res.json(data)
      }
      //limit makes it so it only returns the 3 most current ones
    }).limit(3)
});


app.get('/three-currentevents', (req, res, next) => {
  //finds all the date closest to today
  eventFormModel.find({
    eventdate: {$lt: Date()}
  },{eventDate: "$eventDate",eventType: "$eventType",locationName: "$locationName", address:"$address", city:"$city", state:"$state", zip:"$zip" ,_id:0}
  ,(error, data) => {
      if (error) {
        //returns error message if one is found
        return next(error)
      } else {
        res.json(data)
      }
      //limit makes it so it only returns the 3 most current ones
    }).limit(3)
});



// 4.1) There needs to be a page that allows the project managers to know how many times and in what ways each individual has accessed their services. 
  // Specific individuals are identified by firstName, lastName, dob, and phone
    // get total per individual
      // get "type" & "specify"
      // Only gets the count of a specific individual
// Create - Heri
// Idea - Andrew, Weizhao
// Fix - Weizhao 
// Complete - Heri
// app.get('/individual-data/:firstName/:lastName/:dob/:phone', (req, res, next) => {
//   FormModel.aggregate(
//   [//find all the parameters using the input in the routes using $match, and returns only the specified fields in the $group
//     { $match: {$and: [{firstName : req.params.firstName, lastName:req.params.lastName, dob:req.params.dob.toString, phone:req.params.phone }]}},
//     { $group : { _id: { firstName : req.params.firstName, lastName:req.params.lastName, dob:req.params.dob, phone:req.params.phone, type: "$type", specify:"$specify"} } }
//   ],
// (error, data) => {
//   if (error) {
//     return next(error)
//   } else {
//     res.json(data);
//   }
// });
// });

// 4.2) Shows the count of forms filled out by a certain individual
// Create - Heri
// Idea - Weizhao
// Fix - Weizhao 
// Complete - Heri
app.get('/individual-total/:firstName/:lastName/:dob/:phone', (req, res, next) => {
  FormModel.aggregate(
  [ //find all the parameters using the input in the routes using $match, and returns the total number of matches
    { $match: {$and: [{firstName : req.params.firstName, lastName:req.params.lastName, dob:req.params.dob.toString, phone:req.params.phone }]}},
    {$count: "Total forms for this individual"}
  ],
(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data);
  }
});
});


// 5.1) There should be a table that shows the individual’s history and gives the total.
// Create - Weizhao
app.get('/individual-info/:firstName/:lastName/:dob/:phone', (req, res, next) => {
  FormModel.find({
    //returns forms that matches the input based on the route
    firstName: req.params.firstName,
    lastName: req.params.lastName,
    dob: req.params.dob,
    phone: req.params.phone
  }, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data);
      }
  });

}); 
// 5.2) There should be a table that shows the individual’s history and gives the total.
// Create - Weizhao
app.get('/individual-count/:firstName/:lastName/:dob/:phone', (req, res, next) => {
  FormModel.find({
    //returns the total number of forms that matches the input based on the route
    firstName: req.params.firstName,
    lastName: req.params.lastName,
    dob: req.params.dob,
    phone: req.params.phone
  }, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data);
      }
  }).count();

});




//SPRINT 2 - INDIVIDUAL TOTAL
//Used to give count of how many times an individual has accessed the form
app.get('/individual-history/', (req, res, next) => {
  FormModel.aggregate(
    [

      { $group :
         { _id: 
          { firstName: "$firstName", lastName: "$lastName"},
          myCount: {$sum:1}
         }
        }
    ], 
  (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data);
    }
  });
});


/* 6.1) Finally, there needs to be the page that a supervisor can use to see the total activities by event
(such as a single day food distribution)
*/
  // Andrew - event + day count
  //date inserted into db is weird, not sure how to fix it
  //isodate was the fix

 //Andrew zip code count

// Create - Andrew
// Idea - Weizhao
// Fix - Heri 
// Complete - Heri, Andrew


app.get('/forms-eventType/', (req, res, next) => {
  eventFormModel.aggregate(
    [

      { $group : { _id: { eventType: "$eventType" },myCount: {$sum:1} }}
    ], 
  (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data);
    }
  });
});

/* 6.2) Finally, there needs to be the page that a supervisor can use to see the total activities by place of residence (zip code) of the people served. 
*/
  // Andrew - event + day count
  //date inserted into db is weird, not sure how to fix it
  //isodate was the fix

 //Andrew zip code count

// Create - Andrew
// Idea - Weizhao
// Fix - Heri 
// Complete - Heri, Andrew
 app.get('/forms-zip/', (req, res, next) => {
   //find all the parameters using the input in the routes using $match, and returns the total number of matches
    FormModel.aggregate(
      [
        { $group : { _id: { zip: "$zip" },myCount: {$sum:1} }}
      ], 
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data);
      }
    });
  }); // everyone

// 6.3)
// endpoint that will give count by eventType and eventDate
// Create - Andrew
app.get('/forms-eventType/:eventType/:eventDate', (req, res, next) => {
  //find all the parameters using the input in the routes using $match, and returns the total number of matches
  FormModel.count({
    eventType : req.params.eventType,
    eventDate : req.params.eventDate
  }, 
  (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data);
    }
});
});


// Create - Everyone
// Binding & listening to connections on the port specified
app.listen(PORT, () => {
    console.log("Server started listening on port : ", PORT);
  });
