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
    return drivers.pop();
  }

  function destructivelyRemoveFirstDriver(){
    return drivers.shift();
  }

  function appendDriver(name){
    return drivers.splice(-1,1,name);
  }

  function prependDriver(name){
   newDrivers = drivers.slice(0);
   return newDrivers.unshift(name);
  }

  function removeLastDriver(){
    newDrivers = drivers.slice(-1);
    return newDrivers.pop;
  }

  function removeFirstDriver(){
    return drivers.shift();
  }
