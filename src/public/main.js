(async () => {
  const res = await fetch("http://localhost:3000/users/v1");
  const users = await res.json(); // array of untrusted data, is it even an array?

  const myUsers = users => {
    const userStrings = users.map((incomingUser, i) => {
      // this is now a user we can trust for the rest of our program
      const user = new IncomingUser(incomingUser);

      // this logic is safe for us to "get wrong" but
      // we should always ask ourselves if we should
      // crash the program or continue before using defaults
      return `<li>
        <h2>${user.name} -> ${user.age}</h2>
      </li>`;
    });

    const listString = userStrings.join("");
    return `
      <h1>My users</h1>
      <ul>${listString}</ul>
    `;
  };

  document.body.insertAdjacentHTML("beforeend", myUsers(users));
})();
