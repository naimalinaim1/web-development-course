// practice 1
/**
 * condition 1
 * find the index of 'Banana'
 * replace 'Banana' with 'Mango'
 * 
 * condition 2
 * remove 'Orange'
 * add 'Watermelon'
 */
var fruits = ['Apple', 'Banana', 'Orange'];

var findItem = 'Banana';
var replaceItem = 'Mango';
var replaceFruitIndex = fruits.indexOf(findItem);

if (replaceFruitIndex) {
    fruits[replaceFruitIndex] = replaceItem;
    console.log(fruits);
} else {
    console.log(findItem + " : this items is not found this array");
}

// remove last item Orange
var removeItem = fruits.pop();

// add last item Watermelon
var addItem = 'Watermelon';
fruits.push(addItem);
console.log(fruits);
console.log("********************** end **********************");

// practice 2
/**
 * condition 
 * 80 or above A grad
 * 60 or above B grad
 * 50 or above C grad
 * 40 or above D grad
 * 39 or less F grad
 */

var studentNames = ['Sonia', 'Tom', 'Jane', 'Peter', 'John'];
var studentScores = [85, 66, 95, 45, 40]

var gradeMarks = [80, 60, 50, 40, 39];
var gradeNames = ['A', 'B', 'C', 'D','F'];

// sonia grade 
console.log("------ " + studentNames[0] + " ------");
if (studentScores[0] >= gradeMarks[0]) {
    console.log(studentScores[0] + " Grade : " + gradeNames[0])

} else if (studentScores[0] >= gradeMarks[1]) {
    console.log(studentScores[0] + " Grade : " + gradeNames[1])
    
} else if (studentScores[0] >= gradeMarks[2]) {
    console.log(studentScores[0] + " Grade : " + gradeNames[2])

} else if (studentScores[0] >= gradeMarks[3]) {
    console.log(studentScores[0] + " Grade : " + gradeNames[3])

} else {
    console.log(studentScores[0] + " Grade : " + gradeNames[4])
} 

// Tom grade 
console.log("------ " + studentNames[1] + " ------");
if (studentScores[1] >= gradeMarks[0]) {
    console.log(studentScores[1] + " Grade : " + gradeNames[0])

} else if (studentScores[1] >= gradeMarks[1]) {
    console.log(studentScores[1] + " Grade : " + gradeNames[1])
    
} else if (studentScores[1] >= gradeMarks[2]) {
    console.log(studentScores[1] + " Grade : " + gradeNames[2])

} else if (studentScores[1] >= gradeMarks[3]) {
    console.log(studentScores[0] + " Grade : " + gradeNames[3])

} else {
    console.log(studentScores[1] + " Grade : " + gradeNames[4])
} 

// Jane grade 
console.log("------ " + studentNames[2] + " ------");
if (studentScores[2] >= gradeMarks[0]) {
    console.log(studentScores[2] + " Grade : " + gradeNames[0])

} else if (studentScores[2] >= gradeMarks[1]) {
    console.log(studentScores[2] + " Grade : " + gradeNames[1])
    
} else if (studentScores[2] >= gradeMarks[2]) {
    console.log(studentScores[2] + " Grade : " + gradeNames[2])

} else if (studentScores[2] >= gradeMarks[3]) {
    console.log(studentScores[2] + " Grade : " + gradeNames[3])

} else {
    console.log(studentScores[2] + " Grade : " + gradeNames[4])
} 

// Peter grade 
console.log("------ " + studentNames[3] + " ------");
if (studentScores[3] >= gradeMarks[0]) {
    console.log(studentScores[3] + " Grade : " + gradeNames[0])

} else if (studentScores[3] >= gradeMarks[1]) {
    console.log(studentScores[3] + " Grade : " + gradeNames[1])
    
} else if (studentScores[3] >= gradeMarks[2]) {
    console.log(studentScores[3] + " Grade : " + gradeNames[2])

} else if (studentScores[3] >= gradeMarks[3]) {
    console.log(studentScores[3] + " Grade : " + gradeNames[3])

} else {
    console.log(studentScores[3] + " Grade : " + gradeNames[4])
} 

// John grade 
console.log("------ " + studentNames[4] + " ------");
if (studentScores[4] >= gradeMarks[0]) {
    console.log(studentScores[4] + " Grade : " + gradeNames[0])

} else if (studentScores[4] >= gradeMarks[1]) {
    console.log(studentScores[4] + " Grade : " + gradeNames[1])
    
} else if (studentScores[4] >= gradeMarks[2]) {
    console.log(studentScores[4] + " Grade : " + gradeNames[2])

} else if (studentScores[4] >= gradeMarks[3]) {
    console.log(studentScores[4] + " Grade : " + gradeNames[3])

} else {
    console.log(studentScores[4] + " Grade : " + gradeNames[4])
} 
console.log("********************** end **********************");

// practice 3
/**
 * largest number
 */
var number = [13, 79, 45];

if (number[0] > number[1] && number[0] > number[2]) {
    console.log("Largest number: "+ number[0]);
} else if (number[1] > number[0] && number[1] > number[2]) {
    console.log("Largest number: "+ number[1]);
} else {
    console.log("Largest number: "+ number[2]);
}

/**
 * check triangle isosceles
 */

var area = [9,5,9];

if (area[0] === area[1] || area[0] == area[2] || area[1] === area[2]) {
    console.log('this triangle is isosceles');
} else {
    console.log('this triangle is not isosceles');
}