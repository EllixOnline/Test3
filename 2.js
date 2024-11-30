// run trough all numbers between 2 and 237 as (0 and 1 are not prime)
for (let i = 2; i < 237; i++) {
  let boom = 0;
  // run to check if there is something that the number that being checked is divicible besides 1 and itself
  for (let j = 2; j < i; j++) {
    if (i % j == 0) boom++; //If found exception - add to number of exceptions
  }
  if (boom < 1) console.log(i);
}
