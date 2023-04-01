
// JS code of the work of the promise generator

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const delay = Number(form.delay.value);
  const step = Number(form.step.value);
  const amount = Number(form.amount.value);

  // check for negative values:
  // if delay or step is less than 0, or amount = 0, then promises are not generated. 
  // Otherwise, the promise is generated according to the source code.

  if (delay < 0 || step < 0 || amount === 0) {
    console.log('Invalid input values');
  } else {
    for (let i = 0; i < amount; i += 1) {
    const position = i + 1;
    const promiseDelay = delay + step * i;

    createPromise(position, promiseDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    }
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
