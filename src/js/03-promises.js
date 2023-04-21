import Notiflix from 'notiflix';

const formR = document.querySelector(".form");
 
formR.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  
  const {delay, step, amount} = event.target.elements;
  
  let delayValue = Number(delay.value);
  const amountValue = Number(amount.value);
  const stepValue = Number(step.value);

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue).then(({position, delay}) => {
      Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({position, delay}) => {
      Notiflix.Notify.info(`❌ Rejected promise ${position} in ${delay}ms`);
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delayValue += stepValue;
  }
  
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setInterval(() => {
      if (shouldResolve) {
        res({position, delay})
      }
      rej({position, delay})
    })
  }, delay)
  }

  
  


  











  // createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });


// const success = {};
//   const notsuccess = {};
//     if (shouldResolve) {
//     // Fulfill
//       for (let i = 1; i <= position; i += 1) {     
//           position = i;
//       }
//       for (let j = inputDel.value; j >= inputDel.value; j += inputStep) {
//         delay = j;     
//       }
      
//       return success = {
//         position: i,
//         delay: j
//       }

//         } else {
//           // Reject
//           for (let i = 1; i <= position; i += 1) {     
//             position = i;
//         }
//           for (let j = inputDel.value; j >= inputDel.value; j += inputStep) {
//             delay = j;
//           }

//         return notsuccess = {
//           position: i,
//           delay: j
//         }
//         }