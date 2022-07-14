



const getRemainingTime = deadline => {
  let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
    remainTime
  }
};

const countdown = (deadline, elem1, elem2, elem3, elem4, finalMessage) => {
  const el1 = document.getElementById(elem1);
  const el2 = document.getElementById(elem2);
  const el3 = document.getElementById(elem3);
  const el4 = document.getElementById(elem4);


  const timerUpdate = setInterval(() => {
    let t = getRemainingTime(deadline);
    el1.innerHTML = `${t.remainDays}`;
    el2.innerHTML = `${t.remainHours}`;
    el3.innerHTML = `${t.remainMinutes}`;
    el4.innerHTML = `${t.remainSeconds}`;


    if (t.remainTime <= 1) {
      clearInterval(timerUpdate);
      el.innerHTML = finalMessage;
    }

  }, 1000)
};

countdown('Aug 20 2022 21:34:40 GMT-0500', 'clock1', 'clock2', 'clock3', 'clock4', '¡Ya empezó!');






































window.addEventListener('scroll', function()  {
  let elements = document.getElementsByClassName('scroll-content');
  let screenSize = window.innerHeight;
  
    for(var i = 0; i < elements.length; i++) {
      let element = elements[i];

      if(element.getBoundingClientRect().top +300 < screenSize) {
        element.classList.add('visible');
      }
    }
});


window.addEventListener('scroll', function()  {
  let elements = document.getElementsByClassName('scroll-content1');
  let screenSize = window.innerHeight;
  
    for(var i = 0; i < elements.length; i++) {
      let element = elements[i];

      if(element.getBoundingClientRect().top -500 < screenSize) {
        element.classList.add('visible1');
      }
    }
});