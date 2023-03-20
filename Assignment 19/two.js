const sleep = ms => new Promise(res => setTimeout(res, ms));

const doSomething = async (sleeptime) => {
  await sleep(sleeptime)
  console.log("sleep for ",sleeptime, "miliseconds");
}

doSomething(2000)
