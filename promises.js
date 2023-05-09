// Write an asynchronous function that accepts a message string and a delay time in milliseconds.
//  The function should log the message to the console after the specified delay time.
async function logMessage(message, delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
  console.log(message);
}
logMessage("Hello World!", 2000);

// You have an array of user IDs and a function getUserData(id) that returns
//  a Promise with user data when given a user ID. Write an asynchronous function 
//  that fetches and logs the data for each user ID one by one, in sequence.
async function LogUserData(Userids) {
  for (const id of Userids) {
    try {
      const userData = await getUserData(id);
      console.log(userData);
    } catch (error) {
      console.error(`Failed to fetch user data for ID ${id}: ${error.message}`);
    }
  }
}
const Userids = [1, 2, 3, 4, 5];
LogUserData(Userids);

// You have an asynchronous function performTask() that returns a Promise.
//  The Promise resolves if the task is successful and rejects if there's an error.
//   Write a function that calls performTask() and logs a custom success message 
//   if the task is successful, and a custom error message if there's an error.
let success=true;

let promise=new Promise(function(resolve,reject){
    if(success){
        setTimeout(()=>{resolve("I will buy a Car")});
    }else{
        setTimeout(()=>{reject("Am still poor")});
    }
});

const performTask=async()=>{
    let response=await promise;
    console.log({response});
}
performTask();