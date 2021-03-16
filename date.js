exports.getDate = function(){
var options ={
  weekday: "long",
  year:"numeric",
  month:"long",
  day:"numeric"
};
var today = new Date();
var currentDay = today.getDay();
return today.toLocaleDateString("en-US",options);

}
