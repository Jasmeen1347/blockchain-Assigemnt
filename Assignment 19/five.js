// 5). Write a function delay that returns a promise. And that promise
// should return a setTimeout that calls resolve after 1000ms.


const delay = ms => new Promise(res => setTimeout(res, ms));

const doSomething = async (sleeptime) => {
  await delay(sleeptime)
  console.log("delay for ",sleeptime, "miliseconds");
}

doSomething(1000)
