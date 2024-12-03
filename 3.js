const numbers = [1, 0, 5, 0, -3, 0, 8, 0]
let zeroCount = 0


for (let i = 0; i < numbers.length; i++) 
    numbers[i] === 0 ? zeroCount++ : null;
    

console.log("Amount of zeros are", zeroCount);
