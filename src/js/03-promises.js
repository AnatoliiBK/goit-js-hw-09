const formR = document.querySelector(".form");
const inputDel = document.querySelector("[name=delay]");
const inputStep = document.querySelector("[name=step]");
const inputAm = document.querySelector("[name=amount]");
const btnForm = document.querySelector("button")
let timerId = 0;
 
formR.addEventListener("submit", createPromise);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const success = {};
  const notsuccess = {};
    if (shouldResolve) {
    // Fulfill
      for (let i = 1; i <= position; i += 1) {     
          position = i;
      }
      for (let j = inputDel.value; j >= inputDel.value; j += inputStep) {
        delay = j;     
      }
      
      return success = {
        position: i,
        delay: j
      }

        } else {
          // Reject
          for (let i = 1; i <= position; i += 1) {     
            position = i;
        }
          for (let j = inputDel.value; j >= inputDel.value; j += inputStep) {
            delay = j;
          }

        return notsuccess = {
          position: i,
          delay: j
        }
        }
      }

  
  const promice = new Promice((res, rej) => {
    setInterval(() => {
      if (success) {
        res(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`))
      }
      rej(console.log(`❌ Rejected promise ${position} in ${delay}ms`))
    })
  }, delay)


  promice.then((success) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch((notsuccess) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });











  // createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });