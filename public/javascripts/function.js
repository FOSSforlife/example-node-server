console.log('something');

fetch('http://localhost:3000/files')
.then(res => res.json())
.then(data => {
  console.log(`result is ${data.result}`);
  document.getElementById('data1').innerHTML = data.result;
});

// .then(() => {
//   console.log('hi');  
// })
