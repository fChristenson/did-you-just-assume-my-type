/**
 * If you want to be able to trust what your program will work with
 * it is a nice things to add a mapping layer like this to handle
 * changes in the incoming data, if the data changes again we can
 * simply change our code in 1 place and with some logging you will
 * know if something is not what it should be.
 */
const IncomingUser = (() => {
  const nameToString = name => {
    if(typeof name === "string") return name;
    
    if(!name || typeof name !== "object" || Array.isArray(name)) {
      console.warn("Could not parse name");
      return "Missing name";
    }
    
    if(!name.first || !name.last) console.warn("Missing first and/or lastname");
    
    return `${name.first} ${name.last}`;
  }

  // incomingUser is the data coming to us from the server
  function IncomingUser(incomingUser) {  
    const user = {
      name: "Missing name",
      age: "Missing age"
    };
  
    if(!incomingUser || typeof incomingUser !== "object" || Array.isArray(incomingUser)) {
      console.warn("Incoming user is not an object", incomingUser);
      return user;
    }
    
    if(typeof incomingUser.name === "string" || typeof incomingUser.name === "object") {
      user.name = nameToString(incomingUser.name);
    } else {
      console.warn("IncomingUser.name should be a string or an object: {first, last}");
    }
    
    if(typeof incomingUser.age === "number") {
      user.age = incomingUser.age;
    } else {
      console.warn("IncomingUser.age should be a number");
    }
    
    return user;
  }

  return IncomingUser;
})();