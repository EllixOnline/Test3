const num = 30;

//If number is devisible either by 2 or 3 or 5: Print 1
Number(num % 2 === 0 || num % 3 === 0 || num % 5 === 0) === 1 && console.log(1);

// If number is devisible by either 2 of 2,3 or 5: Print 2
Number(
  (num % 2 === 0 && num % 3 === 0) ||
    (num % 2 === 0 && num % 5 === 0) ||
    (num % 3 === 0 && num % 5 === 0)
) === 1 && console.log(2);

// If number is devisible by 2,3 and 5: Print 3
Number(num % 2 === 0 && num % 3 === 0 && num % 5 === 0) === 1 && console.log(3);
