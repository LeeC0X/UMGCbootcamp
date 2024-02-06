// /Maps and Sets Exercise

//Quick Question #1
//What does the following code return?
new Set([1, 1, 2, 2, 3, 4]);
//sets to not allow duplicates, so the set contains:
// returns {1,2,3,4}

//Quick Question #2
//What does the following code return?

// [...new Set("referee")].join("")

//spread method breaks the string into the set and the set removes any letters that are duplicates
//the .join returns the set back into a string
// returns 'ref'

//Quick Questions #3
//What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
//the keys of the map are set to the arrays and the values of the map are set to the booleans
//returns {[1,2,3] => true, [1,2,3] => false}

//hasDuplicate
//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate2 = (arr) => new Set(arr).size !== arr.length;

//hasDuplicate([1,3,2,1]) // true
//hasDuplicate([1,5,-1,4]) // false

//vowelCount
//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function isVowel(char) {
  return "aeiou".includes(char);
}
//the first function evaluates if the current character is a vowel and returns true if it is

function vowelCount(str) {
  const vowelMap = new Map();
  //vowelMap is created and set equal to an empty map
  for (let char of str) {
    //loop iterates over the string and assigns char to each letter as it passes through
    let lowerCaseChar = char.toLowerCase();
    //each letter is lower-cased
    if (isVowel(lowerCaseChar)) {
      //the isVowel function is called on each letter
      if (vowelMap.has(lowerCaseChar)) {
        //if the vowel function returns true, the current letter is a vowel
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        //the vowel is set into the map and the nuber is incremented
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}

vowelCount("awesome"); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount("Colt"); // Map { 'o' => 1 }
