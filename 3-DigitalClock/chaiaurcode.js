const clock = document.getElementById('clock');

// const localTime = date.toLocaleDateString();

// clock.innerHTML = localTime;
// clock.innerHTML = lcltime;
setInterval(() => {
  let date = new Date();
  let lcltime = date.toLocaleTimeString();
  clock.innerHTML = lcltime;
}, 1000);
