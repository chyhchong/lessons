var config = {
  apiKey: "AIzaSyCbypyfXPs0URlzy6N8Wo8EGZ_4xk4Eby4",
  authDomain: "thermostat-1d90c.firebaseapp.com",
  databaseURL: "https://thermostat-1d90c.firebaseio.com",
  storageBucket: "thermostat-1d90c.appspot.com",
  messagingSenderId: "1038669911500"
};
var mainApp = firebase.initializeApp(config);
var tempRef = firebase.database().ref('temp/');
var temp = 70;
tempRef.on('value', function(shapshot) {
  onNewTemp(shapshot.val());
});
pushNewTemp = function(temp){
  tempRef.set(temp);
}
onNewTemp = function(temp){
  console.log("Setting temp to " + temp + ".");
  setDegree(temp)
}
setDegree = function(degree){
	$("#arrow").rotate({ endDeg:degree * 3, persist:true });
	$("#header").text("Thermostat currently set to " + degree + " degrees.");
}