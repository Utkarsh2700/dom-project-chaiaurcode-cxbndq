const form = document.querySelector('form');
// this usecase will give us empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.getElementById('results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the results
    results.innerHTML = ` <span>${bmi}</span> `;

    if (bmi < 18.6) {
      const info = document.createTextNode('you are skinny');
      results.appendChild(info);
    }
    if (bmi > 18.6 && bmi < 25) {
      const info = document.createTextNode('you are in normal range');
      results.appendChild(info);
    }
    if (bmi > 25) {
      const info = document.createTextNode('you are overweight');
      results.appendChild(info);
    }
  }

  // const hgt = height.addEventListener('onchange', (e) => {
  //   const ht = e.target.value;
  //   console.log(ht);
  //   return ht;
  // });

  // console.log(hgt);
});
