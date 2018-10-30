const repeat = (fn, n) => {
  for (let i = 0; i < n; i++) {
    fn()
  }
}

const hello = () => {
  console.log('Hello world')
}

const goodbye = () => {
  console.log('Goodbye world')
}

repeat(hello, 5)
repeat(goodbye, 5)

function filter(arr, fn) {
  let newArray = []
  arr.forEach(element => {
    if (fn(element)) {
      newArray.push(element)
    }
  })
  return newArray
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray']

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that
  // only returns a boolean
  return name[0] === 'R'
})

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

const hazardWarningCreator = typeOfWarning => {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}!"`);
    console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${warningCounter === 1 ? "time" : "times"} today!"`);
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const birdsWarning = hazardWarningCreator('There\'s birds');
const monkeysWarning = hazardWarningCreator('Tons of monkeys');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');

const turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]

let filteredTurtleMoves = turtleMovements.filter(move => {
  return move[0] >= 0 && move[1] >= 0
})
// console.log(filteredTurtleMoves)

let newArray = filteredTurtleMoves.map(move => {
  return move[0] + move[1]
})
// console.log(newArray)

newArray.forEach(moves => {
  console.log(moves)
})

const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const inputArr = input.split(" ").reduce( (acc, word) => {

  if (word.length === 3) return acc + " ";
  return acc + word[word.length -1].toUpperCase();
}, "")





console.log(inputArr);
