import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  button: document.querySelector('button'),
}

refs.form.addEventListener('submit', submitBtnHandler);

function submitBtnHandler(event) {
  event.preventDefault();


  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  let result = Number(delay.value);
  
  for (let i = 0; i < Number(amount.value); i += 1) {
    createPromise(i, result)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { useIcon: false });
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { useIcon: false });
        }, delay);
      });
    result += Number(step.value);
  }

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    });
  }
}