var savedCardNumber = "4543616432741"
var savedPin = "4565"
var name = "John Doe"
var balance = 5000;
balance = parseFloat(balance);


var d = new Date();

document.getElementById("dt").innerHTML=d;

var timeCounter = setInterval(myTimer, 1000);
function myTimer(){
	var t = new Date();
	document.getElementById("tc").innerHTML=t.toLocaleTimeString();
	
}

function help1(){
	alert("The clock counts the time when you logged in");
}

function show(){
	
	document.getElementById("dt").innerHTML=d;
}
function hide(){
	document.getElementById("dt").innerHTML="Time and Date Hidden";
}

function withdraw(){
							
							var amount = prompt("Please enter your amount");
							amount= parseFloat(amount);
							if(amount > balance){
								alert("Sorry not enough balance!");
							}
							else{
								alert("Processing.....");
								alert("Transaction complete")
								balance = balance - amount;
								document.getElementById("bal").innerHTML="New Balance: " + balance;
								document.getElementById("trans").innerHTML="Latest transaction amount: " + amount;

							}
}

function reciept(){
	var j= new Date();

	
	document.getElementById("r1").innerHTML="Reciept ";
	document.getElementById("r2").innerHTML="Card Number:" + savedCardNumber;
	document.getElementById("r3").innerHTML="Holder name: " + name;
	document.getElementById("r5").innerHTML=j.toLocaleTimeString();
}

var x = document.getElementById("locationCr");
	
function getLocationCr(){
	

if (navigator.geolocation){
	navigator.geolocation.getCurrentPosition(showPosition);
}
else{
	x.innerHTML="Sorry The Geolocation on your computer is not supported  by this browser";
}
}
function showPosition(position){
	x.innerHTML = "Latitude: " + position.coords.latitude + " <br> Longitude: " +  position.coords.longitude;
}
	

function login()
	{
		var cn = prompt("Please enter  cardnumber");
		
		if (cn == savedCardNumber){
			var pin = prompt("Please enter the pin");
			
			if (pin == savedPin){			
						alert("Welcome to your  account " + name + "!");
						document.getElementById("un").innerHTML="Logged in as " + name;
						
						document.getElementById("crd").innerHTML= name + " Your cardnumber is: " + cn;
						document.getElementById("bal").innerHTML= name + " Your Balance is " + balance;
						
					
											
		}
		else{
			alert("Wrong Pin");
			return;
		}
			}
			else{
				alert("Invalid card");
			}
	}
	
