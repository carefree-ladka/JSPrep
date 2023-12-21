for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

/* 
5
5
5
5
5
*/

//To fix this : let or IIFE

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

//or

for (var i = 0; i < 5; i++) {
  ((i) => setTimeout(() => console.log(i), 1000))(i);
}

//Print values per second
for (var i = 0; i < 5; i++) {
  ((i) => setTimeout(() => console.log(i), 1000 * i))(i);
}
