// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue (driver, key, value) {
  const newObj = Object.assign ({}, driver);
  newObj[key] = value;
  
  return newObj;
}


function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
  driver[key] = value;
  return driver;
}


function deleteFromDriverByKey (driver, key, value) {
  const newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;
  
}


function deleteFromDriverByKey (oldMenu, menuChanges) {
  return Object.assign({}, oldMenu, menuChanges);
}