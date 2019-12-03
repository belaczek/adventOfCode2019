const input = [
  1,
  0,
  0,
  3,
  1,
  1,
  2,
  3,
  1,
  3,
  4,
  3,
  1,
  5,
  0,
  3,
  2,
  10,
  1,
  19,
  1,
  6,
  19,
  23,
  1,
  23,
  13,
  27,
  2,
  6,
  27,
  31,
  1,
  5,
  31,
  35,
  2,
  10,
  35,
  39,
  1,
  6,
  39,
  43,
  1,
  13,
  43,
  47,
  2,
  47,
  6,
  51,
  1,
  51,
  5,
  55,
  1,
  55,
  6,
  59,
  2,
  59,
  10,
  63,
  1,
  63,
  6,
  67,
  2,
  67,
  10,
  71,
  1,
  71,
  9,
  75,
  2,
  75,
  10,
  79,
  1,
  79,
  5,
  83,
  2,
  10,
  83,
  87,
  1,
  87,
  6,
  91,
  2,
  9,
  91,
  95,
  1,
  95,
  5,
  99,
  1,
  5,
  99,
  103,
  1,
  103,
  10,
  107,
  1,
  9,
  107,
  111,
  1,
  6,
  111,
  115,
  1,
  115,
  5,
  119,
  1,
  10,
  119,
  123,
  2,
  6,
  123,
  127,
  2,
  127,
  6,
  131,
  1,
  131,
  2,
  135,
  1,
  10,
  135,
  0,
  99,
  2,
  0,
  14,
  0
];

const calculate = (opcode, a, b) => {
  switch (opcode) {
    case 1:
      return a + b;
    case 2:
      return a * b;
  }
};

const process = (array, pointer = 0) => {
  const [opcode, a, b, index] = array.slice(pointer, pointer + 4);

  if (opcode === 99) {
    return array;
  }

  array[index] = calculate(opcode, array[a], array[b]);

  return process(array, pointer + 4);
};

const getMemorySetup = (array, noun, verb) => {
  const resArray = [...array];
  resArray[1] = noun;
  resArray[2] = verb;
  return resArray;
};

const findInputForOutput = (array, output) => {
  for (let noun = 0; noun < 99; noun++) {
    for (let verb = 0; verb < 99; verb++) {
      const setupArray = getMemorySetup(array, noun, verb);
      const result = process(setupArray);
      if (result[0] === output) {
        return noun * 100 + verb;
      }
    }
  }
};

console.log(findInputForOutput(input, 19690720));
