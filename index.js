// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  if (street > 42) {
    return street - 42;
  } else {
    return 42 - street;
  }
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return (start - end) * 264;
  } else {
    return (end - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = start > destination ? start-destination : destination-start;
  
  if (distance > 2500) {
    return "cannot travel that far";
  } else if (distance <= 400) {
    return 0
  } else {
    return (distance-400)*0.02
  }
}