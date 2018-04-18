/**
 * If you want to be able to trust what your program will work with
 * it is a nice things to add a mapping layer likes this to handle
 * changes in the incoming data, if the data changes again we can
 * simply change our code in 1 place.
 */
const IncomingUser = (() => {
  const nameToString = name => {
    if(typeof name === "string") return name;
    if(!name || typeof name !== "object" || Array.isArray(name)) return "Missing name";
    
    return `${name.first} ${name.last}`;
  }

  function IncomingUser(incomingUser) {  
    const user = {
      name: "Missing name",
      age: "Missing age"
    };
  
    if(!incomingUser || typeof incomingUser !== "object" || Array.isArray(incomingUser)) return user;
    if(typeof incomingUser.name === "string") user.name = incomingUser.name;
    if(typeof incomingUser.name === "object") user.name = nameToString(incomingUser.name);
    if(typeof incomingUser.age === "number") user.age = incomingUser.age;
    
    return user;
  }

  return IncomingUser;
})();