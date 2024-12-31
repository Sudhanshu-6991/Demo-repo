/* 
  I will create two projects
   1. Hospital kidney backend
   2. File System Backend

   Project 1: Hospital Kidney Backend

      -> Create a HTTP server.
      -> Create an in memory Hospital, it should be an array in our case.
      -> use the GET, POST, PUT, DELETE methods.     
      -> Test them using the Post Man and web browser.
      -> Return should be a JSON type.
      -> Grab the port as 3000.
      -> Also add the validations whereever required.

   Project 2: File System (Need to grab information)

*/

const express = require ('express');
const app = express();


const users = [{
  user:'Dummy_Name',
  Kidney:[{
    Healthy:false,
      }]
}]


app.use(express.json());

//console.log(users[0].Kidney);


app.get('/', function(req, res){
  const userKidney = users[0].Kidney;
  const totalNumberOfKidneys = userKidney.length;
  let numberOfHealthyKidneys = 0;
  let numberOfunHealthyKidneys = 0;

  for(let  i =0; i < totalNumberOfKidneys; i++){
    if(userKidney[i].Healthy){
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }

  numberOfunHealthyKidneys = totalNumberOfKidneys - numberOfHealthyKidneys;
  
  
  res.json({totalNumberOfKidneys,numberOfHealthyKidneys,numberOfunHealthyKidneys});
})


app.post('/', function(req, res){
  const isHealthy = req.body.isHealthy;
  users[0].Kidney.push({
    Healthy: isHealthy
  })

  res.json({
    Message: "Data Added Successfully!!"
  })
})



app.put('/', function(req,res){
  //const isHealthy = req.body.isHealthy;
  for(let i = 0; i < users[0].Kidney.length; i++){
      users[0].Kidney[i].Healthy = true; 
  }

  res.json({
    "Message" : "Your data is updated successfully"
  })

})


app.delete('/', function(){
  const newkidneyarray = [];

  //Remove the un-wanted index
  
    for(let i =0; i < users[0].Kidney.length; i++){
      if(users[0].Kidney[i].Healthy = true){
        newkidneyarray.push(z );
      }
    } 

    users[0].Kidney = newkidneyarray;
  


})

app.listen(3000);
