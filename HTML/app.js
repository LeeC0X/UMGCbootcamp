// const fitBitData = {
//   totalSteps: 308727,
//   totalMiles: 211.7,
//   avgCalorieBurn: 5755,
//   workoutsThisWeek: "5 of 7",
//   avgGoodSleep: "2:13",
//   45          : 'forty five'
// };

// let data ={a:1,b:2,c:3,};

// const numbers = {
//   100: "one hundred",
//   16: "sixteen",
//   "76 trombones": "great song!",
// };

// const palette = {
//   red: "#eb4d4b",
//   yellow: "#f9ca24",
//   blue: "#30336b",
// };

// let mysteryColor = "yellow";

// const userReviews = {};

// userReviews["queenBee49"] = 4.0;

// userReviews.mrSmith78 = 3.5;

// userReviews["queenBee49"] += 2;

// const student = {
//   firstName: "David",
//   lastName: "Jones",
//   strengths: ["Music", "Art"],
//   exams: {
//     midterm: 92,
//     final: 88,
//   },
// };

// const avg = (student.exams.midterm + student.exams.final) / 2;

// const shoppingCart = [
//     {
//         product : 'Jenga Classic',
//         price : 6.88,
//         quantity : 1
//     },
//     {
//         product : 'Echo Dot',
//         price : 29.99,
//         quantity : 3

//     },
//     {
//         product : 'Fire Stick',
//         price : 39.99,
//         quantity : 2
//     }
// ];

// const game = {
//   player1: {
//     username: "Blue",
//     playingAs: "X",
//   },
//   player2: {
//     username: "Muffins",
//     playingAs: "O",
//   },
//   board: [
//     ["O", null, "X"],
//     ["X", "O", "X"],
//     [null, "O", "X"],
//   ],
// };

// const palette = {
//   red: "#eb4d4b",
//   yellow: "#f9ca24",
//   blue: "#30336b",
// };

// const palette2 = palette;
// palette2.green = "#ebf876";

// let nums = [1, 2, 3];
// let mystery = [1, 2, 3];

// let moreNums = nums;

// nums === mystery;

// nums === moreNums;

// const user = {
//     username : 'CherryGarcia8',
//     email : 'garcia@gmail.com',
//    notifications: ['message','alert']
// };

// if(!user.notifications.length){
//     console.log('NO NEW NOTIFICATIONS!'):
// }

// for (let i = 1; i <= 10; i++) {
//   console.log("Hello", i);
// }

// for (let g = 1; g <= 20; g++) {
//   console.log(`${g}x${g} = ${g * g}`);
// }

// for (let z = 50; z >= 0; z -= 10) {
//   console.log(z);
// }
// const examScores = [98, 77, 84, 91, 57, 66];

// for (let e = 0; e < examScores.length; e++) {
//   console.log(e, examScores[e]);
// }

// const myStudents = [
//   {
//     firstName: "Zeus",
//     grade: 86,
//   },
//   {
//     firstName: "Artemis",
//     grade: 97,
//   },
//   {
//     firstName: "Hera",
//     grade: 72,
//   },
//   {
//     firstName: "Apollo",
//     grade: 90,
//   },
// ];
// for (let f = 0; f < myStudents.length; f++) {
//   let student = myStudents[f];
//   console.log(`${student.firstName} scored ${student.grade}`);
// }
// let total = 0;
// for (let f = 0; f < myStudents.length; f++) {
//   let student = myStudents[f];
//   total += student.grade;
// }
// console.log(total/ myStudents.length);

// for (let w = 1; w <= 10; w++) {
//   console.log("OUTER LOOP:", w);
//   for (let x = 10; x >= 0; x -= 2) {
//     console.log("INNER LOOP", x);
//   }
// }

// const gameBoard = [
//   [4, 32, 8, 4],
//   [64, 8, 32, 2],
//   [8, 32, 16, 4],
//   [2, 8, 4, 2],
// ];

// let totalScore = 0;
// for (let z = 0; z < gameBoard.length; z++) {
//   let row = gameBoard[z];
//   console.log(row);
//   for (let v = 0; v < row.length; v++) {
//     totalScore += row[v];
//   }
// }

// for(let d = 0; d <= 5; d++){
//     console.log(d);
// }
// let f = 0;
// while(f <= 5){
// console.log(f);
// f++;
// }

//
// const target = Math.floor(Math.random()*10);
// let guess = Math.floor(Math.random()*10);

// while(true) {
//     if (target === guess) break;
//     console.log(`Target: ${target} Guess: ${guess}`);
//     guess = Math.floor(Math.random()*10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log(`CONGRATS YOU WIN!!`);

// while (true) {
//   if (target === guess) break;
//   guess = Math.floor(Math.random() * 10);
// }

// let subbreddits = ['soccer', 'popheads','cringe','books'];

// for(let u = 0; u < subbreddits.length; u++){
//     console.log(subreddits[u]);
// }

// for(let sub of subreddits){
//     console.log(sub);
// }
// for (let char of 'cockadoodledoo') {
//     console.log(char.toUpperCase());
// }

// const magicSquare = [
//     [2,7,6],
//     [9,5,1],
//     [4,3,8]
// ];

// for(let b = 0; b < magicSquare.length; b++){
//     let row = magicSquare[b];
//     for (let c = 0; c < row.length; b++){
//         console.log(row[c]);
//     }
//     console.log(`${row} summed to ${sum}`);
// }

// for(let row of magicSquare){
//     let sum = 0;
//     for (let num of row){
//         sum += num;
//     }
//     console.log(`${row} summed to ${sum}`);
// }

// const words1 = ['mail','milk','bath','black'];
// const words2 = ['box','shake','tub','berry'];

// for(let e = 0; e < words1.length; e++){
//     console.log(`${words1[e]}${words2[e]}`);
// }

// const movieReviews = {
//     Arrival : 9.5,
//     Alien : 9,
//     Amelie :8,
//     'In Bruges' : 9,
//     Amadeus : 10,
//     'Kill Bill': 8,
//     'Little Miss Mermaid': 8.5,
//     Coraline : 7.5
// };

// for(let movie of Object.keys(movieReviews)){
//     console.log(movie,movieReviews[movie]);
// }

// const ratings = Object.values(movieReviews);
// let total = 0;
// for(let r of ratings){
//     total += r;
// }
// let avg = total/ratings.length;
// console.log(avg);

// const word = "stressed";
// let reversedWord = "";
// for (let g = word.length - 1; g >= 0; g--) {
//   reversedWord += word[g];
// }
// console.log(reversedWord);
