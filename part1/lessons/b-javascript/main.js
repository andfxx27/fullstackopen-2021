const num = [1, -1, 4, 10];

const arrayBasic = () => {
  num.push(0);

  console.log(`Num length is ${num.length}.`);
  console.log(`Num:`, num);

  num.forEach((val, index, arr) => {
    console.log(arr);
  });

  // It is preferrable to use .concat instead since it doesn't modify the original array
  const newNum = num.concat(90);

  console.log(`New num:`, newNum);
};

const arrayMap = () => {
  const mappedValue = num.map((v) => v * 2);

  console.log("Mapped value (*2):", mappedValue);
};

const arrayDestructure = () => {
  const prime = [2, 3, 5, 7, 11];
  const [first, second, ...rest] = prime;
  console.log("Original array:", prime);
  console.log(`first (prime[0]): ${first}`);
  console.log(`second (prime[1]): ${second}`);
  console.log(`rest (prime[2:]):`, rest);
};
