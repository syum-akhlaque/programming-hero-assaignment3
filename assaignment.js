//problem 1: feet to mile convertion
var feet;
function feetToMile(feet) {
    if (feet<0){
        return "Distance can not be negative";
    }
    else{
        var cal=(feet / 5280).toFixed(4);
        return feet+ " feet = " + cal + " miles"; 
    }
  }
  var mile= feetToMile(10000);
  console.log(mile);

// problem 2:wood calculator;
console.log("");//for a breck between next answer

var chair,table,bed;
function woodCalculator(chair,table,bed){
  totalWood = chair*1 + table*3 + bed*5;
  return "Your demand is: " +chair+ " chair, " + table+ " table and " + bed+" bed."+" Recuired wood: "+totalWood+" CFT.";
}
console.log( woodCalculator(6,2,3) );

//problem 3: brick calculator
console.log("");//for a breck between next answer

var floor,brick;

function brickCalcular(floor){
  if(floor<=10){
  brick=floor*1000*15;
  return "Number of floor: "+ floor+". Required bricks: "+brick; 
  }
  else if (floor <=20){
    var firstUnit=10;
    var secondUnit= floor-firstUnit;
    brick= firstUnit*15*1000+secondUnit*12*1000;
    return "Number of floor: "+ floor+". Required bricks: "+brick;
  }
  else{
    var firstUnit=10;
    var secondUnit= 10;
    var thirdUnit= floor-firstUnit-secondUnit;
    brick= firstUnit*15*1000 + secondUnit*12*1000 + thirdUnit*10*1000;
    return "Number of floor: "+ floor+". Required bricks: "+brick;
  }
}
console.log(brickCalcular(15));

//probkem 4: tiny friend 
console.log("");//for a breck between next answer

var friends = ["Jhankar", "arman", "kamrul hasan", "syum","ashfaque","Mahbub"];
var smallestName=friends[0];

function tinyFriend(friends){
for(var i=0; i< friends.length; i++){
        var newName= friends[i];
        if(newName.length<smallestName.length){
            smallestName=newName; 
        }   
    }
}
smallestname=tinyFriend(friends);
console.log("smallest nume: ", smallestName);