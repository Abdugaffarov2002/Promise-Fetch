const DB = {
  users: [
    {
      id: 1,
      fullName: "Vadik Ivanov",
      age: 25,
    },
    {
      id: 2,
      fullName: "John Snow",
      age: 30,
    },
  ],
};

const getUser = (id) => {
  // simulate fetch (fetch return Promise)

  return new Promise((resolve, reject) => {
    console.log("Начинаем запрос...");

    setTimeout(() => {
      const user = DB.users.find((user) => user.id === id);

      if (user) {
        resolve(user);
      } else {
        reject("User is not found");
      }
    }, 2000);
  });
};

getUser(1).then((user) => {
  console.log("user:", user);
});

getUser(10)
  .then((user) => {
    console.log("user:", user);
  })
  .catch((msg) => {
    console.log(msg);
  });

for (let i = 0; i < 10; i++) {
  console.log(i);
}
