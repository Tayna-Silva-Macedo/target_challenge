const numberToFind = 34;

const fibonacci = (number) => {
  let n1 = 0;
  let n2 = 1;
  let n3 = 0;

  while (number > n3) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }

  if (number === 0 || number === n3) {
    console.log(`O número ${number} está na sequência de fibonacci.`);
  } else {
    console.log(`O número ${number} não está na sequência de fibonacci.`);
  }
};

fibonacci(numberToFind);
