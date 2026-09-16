function describeValue(val){
    if (val) {
        return `${typeof(val)} | truthy`;
    }
    else{
        return `${typeof(val)} | falsy`;
    }
}
console.log(describeValue(false));


function getDayType(val) {
    switch (val) {
        case "Saturday":
            return "Weekend";
            break;
        case "Sunday":
            return "Working Day";
            break;
        case "Monday":
            return "Working Day";
            break;
        case "Tuesday":
            return "Working Day";
            break;
        case "Wednesday":
            return "Working Day";
            break;
        case "Thursday":
            return "Working Day";
            break;
        case "Friday":
            return "Weekend";
            break;
        default:
            return "Invalid Day";
            break;
    }
}
console.log(getDayType("Saturday"));


function validateUsername(val) {
  if (val.length < 4) {
    return "Too Short";
  }
  if (val.includes(" ")) {
    return "No Space Allowed";
  }
  if (val.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }
  return "Available";
}
console.log(validateUsername("admin"));


function getCngFare(distance, isNight=false, waitingMinutes=0) {
    if (!isNight && distance>2) {
        return  50 + (distance - 2) * 15 + waitingMinutes*2
    }
    else if(isNight && distance>2){
        return  (50 + (distance - 2) * 15 + waitingMinutes*2)*1.2
    }
    else{
        return 50;
    }
}
console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));


const getChaseVerdict = (target, scored, ballsLeft) => {
  const rN = target - scored;

  if (rN <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }

  const rR = (runsNeeded / ballsLeft) * 6;

  if (rR <= 6) {
    return "Easy Win";
  } 
  else if (rR <= 9) {
    return "Comfortable";
  } 
  else if (rR <= 12) {
    return "Tough Chase";
  } 
  else {
    return "Miracle Needed";
  }
};
console.log(getChaseVerdict(200, 200, 12));
