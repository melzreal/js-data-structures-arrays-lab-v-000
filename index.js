// Write your solution here!
  function drivers() {
     const drivers = ["Milo", "Otis", "Garfield"];
     return drivers;
  }

  function destructivelyAppendDriver(name){
    return drivers.push(name);
  }

  function destructivelyPrependDriver(name){
    return drivers.unshift(name);
  }

  function destructivelyRemoveLastDriver(){

  }

  function destructivelyRemoveFirstDriver(){

  }

  function appendDriver(name){

  }

  function prependDriver(name){
   newDrivers = drivers.slice(0);
   return newDrivers.push(name);
  }

  function removeLastDriver(){
    return drivers.pop();
  }

  function removeFirstDriver(){
    return drivers.shift();
  }
