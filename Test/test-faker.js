const faker = require("faker");

// Generate a single fake user
const fakeUser = () => ({
  username: faker.internet.userName(),
  email: faker.internet.email(),
  imageUrl: faker.image.avatar(),
});

// Generate an array of fake users
const generateFakeUsers = (numUsers = 10) => {
  const users = [];
  for (let i = 0; i < numUsers; i++) {
    users.push(fakeUser());
  }
  return users;
};

// Print the generated fake users
const fakeUsers = generateFakeUsers(10);
console.log(fakeUsers);
