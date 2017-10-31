/*jshint esversion: 6*/

const data = ['first', 'second', 'third'];

function getData(index, cb) {
  let err = null;
  if (index < 0) { err = new Error('index out of bounds'); }
  return cb(err, data[index]);
}

new Promise((resolve, reject ) => {
  getData(0, (err, data) => {
    if(err){
      reject(err);
    } else {
      resolve(data);
    }
  });
})

.then(data => {
  console.log(`first: ${data}`);
  });

new Promise((resolve, reject ) => {
  getData(1, (err, data) => {
    if(err){
      reject(err);
    } else {
      resolve(data);
    }
  });
})

.then(data => console.log(`second: ${data}`));

new Promise((resolve, reject ) => {
  getData(2, (err, data) => {
    if(err){
      reject(err);
    } else {
      resolve(data);
    }
  });
})

.then(data => console.log(`third: ${data}`));


function getDataAsync(index) {
  return new Promise((resolve, reject) => {
    if(index < 0) {return reject(newError('index out of bounds'));}
    return resolve(data[index]);
  });
}

getDataAsync(0)
.then((data) =>{
  console.log(data);
});







  // .then((err, data) => {
  //   console.log(data);
  //  return getData(1)
  //  .then((data) =>{
  //   console.log(data);
  //   return getData(2)
  //   .then((data) =>{
  //     console.log(data);
  //   });
  //  });
  // });





// wrap getData in a promise and console log the output

// call getData three times and console log the output (use .then for the second and third call) using promises

// create a promise within getData and use the promise to trigger the callback in getData

// create a promisified version of getData

// call the promisified version of getData with -1, console log the error in a .catch
