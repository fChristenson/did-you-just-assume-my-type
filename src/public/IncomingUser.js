/**
 * If you want to be able to trust what your program will work with
 * it is a nice thing to add a mapping layer like this to handle
 * changes in the incoming data, if the data changes again we can
 * simply change our code in 1 place and with some logging you will
 * know if something is not what it should be.
 * 
 * In addition we can trust that our program will work even if something
 * about the data changes.
 */
const IncomingUser = (() => {
  // we make a default data structure that will let
  // the program execute without breaking
  function User() {
    return {
      name: "Missing name",
      age: "Missing age"
    };
  }

  const maybeSetAge = (age, user) => {
    const userAgeIsCorrectFormat = typeof age === "number";

    if (userAgeIsCorrectFormat) {
      user.age = age;
    } else {
      console.warn("age should be a number");
    }
  };

  const maybeSetName = (name, user) => {
    const userNameIsCorrectFormat =
      typeof name === "string" || typeof name === "object";

    if (userNameIsCorrectFormat) {
      user.name = nameToString(name);
    } else {
      console.warn("name should be a string or an object: {first, last}");
    }
  };

  const nameToString = name => {
    if (typeof name === "string") return name;

    if (!name || typeof name !== "object" || Array.isArray(name)) {
      console.warn("Could not parse name");
      return "Missing name";
    }

    if (!name.first || !name.last)
      console.warn("Missing first and/or lastname");

    return `${name.first} ${name.last}`;
  };

  // incomingUser is the data coming to us from the server
  function IncomingUser(incomingUser) {
    const user = new User();
    const userIsCorrectFormat =
      incomingUser &&
      typeof incomingUser === "object" &&
      !Array.isArray(incomingUser);

    if (!userIsCorrectFormat) {
      console.warn("Incoming user is not an object", incomingUser);
      return user;
    }

    maybeSetName(incomingUser.name, user);
    maybeSetAge(incomingUser.age, user);

    return user;
  }

  return IncomingUser;
})();
