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
    newDrivers = [...drivers, name];
    return newDrivers;
  }

  function prependDriver(name){
   newDrivers = [ name, ...drivers.slice(0)];
   return newDrivers;
  }

  function removeLastDriver(){
    newDrivers = [...drivers.slice(-1)];
    return newDrivers;
  }

  function removeFirstDriver(){
    return drivers.shift();
  }
