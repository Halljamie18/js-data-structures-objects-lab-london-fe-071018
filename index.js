// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue (driver, key, value) {
  const newObj = Object.assign
  newObj[key] = value;
  
  return newObj;
}


function updateDriverWithKeyAndValue (driver, key, value) {
  driver[key] = value;
  return driver;
}

