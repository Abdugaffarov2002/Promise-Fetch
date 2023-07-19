// Promise - класс для создание объекта промиса

const promise = new Promise((resolve, reject) => {
  //   resolve('Hello from resolve');
  reject("Hello from reject");
});

// promise.then()

promise
  .then((resolvedMsg) => {
    console.log("resolvedMsg:", resolvedMsg);
  })
  .catch((rejectedMsg) => {
    console.log("rejectedMsg:", rejectedMsg);
  })
  .finally(() => {
    console.log("message from finally");
  });

console.log("Hello from main stack");

const outerPromise = new Promise((resolve, reject) => {
  resolve("Hello from outer promise!");
});

outerPromise
  .then((msg) => {
    console.log("msg:", msg);
    const innerPromise = new Promise((resolve) => {
      resolve(`${msg} And hello from inner promise!`);
    });
    return innerPromise;
  })
  .then((msg) => {
    console.log("msg: ", msg);
  })
  .catch((msg) => {
    console.log("msg: ", msg);
  })
  .finally(() => {
    console.log("finally!");
  });

//   ------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
