(async () => {
  const res = await fetch("http://localhost:3000/users/v1");
  const users = await res.json();
  const MyUsers = (users) => {
    const userStrings = users.map((user, i) => {
      //const user = new IncomingUser(incomingUser);
      return `<li>
        <h2>${user.name} -> age ${user.age}</h2>
      </li>`;
    });
  
    const listString = userStrings.join("");
    return `
      <h1>My users</h1>
      <ul>${listString}</ul>
    `;
  };
  
  document.body.insertAdjacentHTML("beforeend", MyUsers(users));
})();
