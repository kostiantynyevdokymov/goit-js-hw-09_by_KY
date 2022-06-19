import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  button: document.querySelector('button'),
}

refs.form.addEventListener('submit', submitBtnHandler);

function submitBtnHandler(event) {
  event.preventDefault();

  let delay = Number(event.currentTarget.delay.value);
  const step = Number(event.currentTarget.step.value);
  const amount = Number(event.currentTarget.amount.value);

  for (let position = 0; position <= amount; position += 1)
  {
    createPromise(position, delay)
      .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        
  })
  .catch(({ position, delay }) => {
  
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        
  });
  }
  delay += step;
}

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
