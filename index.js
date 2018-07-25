// Code your solution in this file!
 const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers=function(driversAray){
  return driversAray.slice(0,2);
}
const returnLastTwoDrivers=function(driversAray){
  return driversAray.slice(2);
}

let selectingDrivers =[(returnFirstTwoDrivers),(returnLastTwoDrivers)];

function createFareMultiplier(){}
const fareMultiplier = createFareMultiplier(2);
