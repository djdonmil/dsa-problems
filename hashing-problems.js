'use strict';

/******************HASHING ASSIGNMENTS START HERE ******************************/

// Hashing Assignment
// Please complete below coding test and submit for completion
// Longest Subarray with Equal Number of 0s and 1s
// Write a function that takes an array of 0s and 1s as input and finds the length of the longest subarray that contains an equal number of 0s and 1s.

/**
 * @param {number[]} arr
 * @return {number}
 */
function findLongestSubarray(arr) {
    // TODO: Implement your code here
    const n = arr.length
    let newArr = []
    let lengthOfLongestSubArray = 0

    for (let i = 0; i < n; i++) {
        newArr = []

        for (let j = i; j < n; j++) {
            newArr.push(arr[j])

            let equivalent = hashMapFreq(newArr)

            if (equivalent) {
                lengthOfLongestSubArray = Math.max(lengthOfLongestSubArray, newArr.length)
            }

        }
    }

    return lengthOfLongestSubArray
}

function hashMapFreq(freqArr) {
    let hashMap = new Map()
    for (let i = 0; i < freqArr.length; i++) {
        if (hashMap.get(freqArr[i])) {
            hashMap.set(freqArr[i], hashMap.get(freqArr[i]) + 1)
        } else {
            hashMap.set(freqArr[i], 1)
        }
    }

    if (hashMap.get(0) === hashMap.get(1)) {
        return true

    }
    return false
}
//***********************************************************************/
// Longest Consecutive Subsequence
// Write a function that takes an array of integers as input and finds the length of the longest consecutive subsequence in the array. A consecutive subsequenceis a sequence of numbers that appear consecutively in the array (without gaps).
/**
* @param {number[]} nums
* @return {number}
*/
function findLongestConsecutiveSubsequence(nums) {

    if (nums.length === 0) return 0

    let startPoint = 0
    let endPoint = 0
    let maxLen = 0


    nums = [...new Set(nums.sort((a, b) => a - b))]
    const n = nums.length


    let hashMap = new Map()
    for (let i = 0; i < n; i++) {
        hashMap.set(i, nums[i])
    }

    for (let i = 1; i <= n; i++) {
        if ((hashMap.get(i) - hashMap.get(i - 1)) === 1) {
            endPoint = i + 1

            maxLen = Math.max(maxLen, endPoint - startPoint)

        } else {
            startPoint = i
            endPoint = i - 1

        }
    }

    return maxLen == 0 ? 1 : maxLen

};

// Longest Palindromic Substring
// Write a function that takes a string as input and findsthe longest palindromic substring within the string. A palindromic substring is a substring that reads the same forwards and backwards.

/**
   * @param {string} s
   * @return {string}
   */
function longestPalindromicSubstring(s) {
    // TODO: Implement your code here
    if (s.length === 1) return s[0];
    let answer = s[0];

    let counter = 0

    for (let i = 0; i <= s.length - 2; i++) {
        for (let j = s.length - 1; j > i; j--) {
            if (pallindromeCheck(s, i, j)) {
                if (j - i > counter) {
                    counter = j - i;
                    answer = str(s, i, j);
                }

            }
        }
    }
    return answer;
}


function str(string, s, e) {
    let result = ''
    for (let i = s; i <= e; i++) {
        result += string[i];
    }
    console.log(result)
    return result;
}

function pallindromeCheck(str, s, e) {
    while (s < e) {
        if (str[s] !== str[e]) return false;
        s++ , e--;
    }
    return true;
}

//***********************************************************************/

//   Longest Subarray with Equal Number of Vowels and Consonants
// Write a function that takes an array of characters as input and finds the length of the longest subarray in the array that contains an equal number of vowels and consonants. The vowels are defined as 'a', 'e', 'i', 'o', and 'u' (both lowercase and uppercase).

/**
   * @param {string} chars
   * @return {number}
   */
function longestSubarrayWithEqualVowelsAndConsonants(chars) {
    // TODO: Implement your code here
    let newArr = []
    let maxSubarrayWithEqualVowelsAndConsonants = 0
    for (let i = 0; i < chars.length; i++) {
        newArr = []

        for (let j = i; j < chars.length; j++) {

            newArr.push(chars[j])
            let vandCChecker = vowelAndConsonantChecker(newArr)

            if (vandCChecker) {
                if (newArr.length > maxSubarrayWithEqualVowelsAndConsonants) {
                    maxSubarrayWithEqualVowelsAndConsonants = newArr.length
                }
            }
        }


    }

    return maxSubarrayWithEqualVowelsAndConsonants
}
const vowelAndConsonantChecker = (arr) => {
    let hashMap = new Map()
    for (let i in arr) {
        if (arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u") {
            if (hashMap.get("vowel")) {
                hashMap.set("vowel", hashMap.get("vowel") + 1)
            } else {
                hashMap.set("vowel", 1)
            }
        } else {
            if (hashMap.get("consonant")) {
                hashMap.set("consonant", hashMap.get("consonant") + 1)
            } else {
                hashMap.set("consonant", 1)
            }
        }
    }

    if (hashMap.get("consonant") === hashMap.get("vowel")) {
        return true
    }
    return false
}
// console.log(longestSubarrayWithEqualVowelsAndConsonants(
//     // ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
//     // ["b", "a", "b", "a", "d", "a", "b", "c", "d", "e", "i", "o", "u", "i", "o", "p"]
//     ["g", "e", "e", "k", "s", "f", "o", "r", "g", "e", "e", "k", "s"]
// ))

// First Non Repeating Element
// The task is to find the first non-repeating character in a given string. A non-repeating character is a character that appears only once in the string.

/**
   * @param {string} str
   * @return {string}
   */
function firstNonRepeatingElement(str) {
    // TODO: Implement your code here
    const frequencyMap = new Map();

    for (const num of arr) {
        if (frequencyMap.has(num)) {
            frequencyMap.set(num, frequencyMap.get(num) + 1);
        } else {
            frequencyMap.set(num, 1);
        }
    }

    for (const [num, frequency] of frequencyMap.entries()) {
        if (frequency === 1) {
            return num;
        }
    }

    return -1;
}


// const arr = ["a", "b", "b", "c", "a", "d", "e", "f"]
// //   [4, 2, 8, 3, 3, 4, 8, 9, 4, 2, 6, 7, 8, 6, 9];
// console.log(firstNonRepeatingElement(arr));

// Cuckoo Hashing
// Implement the Cuckoo Hashing algorithm using JavaScript. Cuckoo Hashing is a hashing technique that resolves collisions by using multiple hash functionsand alternate placements of elements in different hash tables.


// Javascript program to demonstrate working of 
// Cuckoo hashing.

// upper bound on number of elements in our set
let MAXN = 11;

// choices for position
let ver = 2;

// Auxiliary space bounded by a small multiple
// of MAXN, minimizing wastage
let hashtable = new Array(ver);
for (var i = 0; i < hashtable.length; i++) {
    hashtable[i] = new Array(2);
}

// Array to store possible positions for a key
let pos = Array(ver).fill(0);

/* function to fill hash table with dummy value
* dummy value: let_MIN
* number of hashtables: ver */
function initTable() {
    for (let j = 0; j < MAXN; j++)
        for (let i = 0; i < ver; i++)
            hashtable[i][j] = Number.MIN_VALUE;
}

/* return hashed value for a key
* function: ID of hash function according to which
	key has to hashed
* key: item to be hashed */
function hash(id, key) {
    switch (id) {
        case 1: return key % MAXN;
        case 2: return (Math.floor(key / MAXN)) % MAXN;
    }
    return Number.MIN_VALUE;
}

/* function to place a key in one of its possible positions
* tableID: table in which key has to be placed, also equal
to function according to which key must be hashed
* cnt: number of times function has already been called
in order to place the first input key
* n: maximum number of times function can be recursively
called before stopping and declaring presence of cycle */
function place(key, tableID, cnt, n) {
	/* if function has been recursively called max number
	of times, stop and declare cycle. Rehash. */
    if (cnt == n) {
        console.log(key + " unpositioned");
        console.log("Cycle present. REHASH.");
        return;
    }

	/* calculate and store possible positions for the key.
	* check if key already present at any of the positions.
	If YES, return. */
    for (let i = 0; i < ver; i++) {
        pos[i] = hash(i + 1, key);
        if (hashtable[i][pos[i]] == key)
            return;
    }

	/* check if another key is already present at the
	position for the new key in the table
	* If YES: place the new key in its position
	* and place the older key in an alternate position
	for it in the next table */
    if (hashtable[tableID][pos[tableID]] != Number.MIN_VALUE) {
        let dis = hashtable[tableID][pos[tableID]];
        hashtable[tableID][pos[tableID]] = key;
        place(dis, (tableID + 1) % ver, cnt + 1, n);
    }
    else // else: place the new key in its position
        hashtable[tableID][pos[tableID]] = key;
}

/* function to print hash table contents */
function printTable() {
    // console.log("Final hash tables:");

    for (let i = 0; i < ver; i++)
        for (let j = 0; j < MAXN; j++)
            if (hashtable[i][j] == Number.MIN_VALUE)
                console.log("- ");
            else
                console.log(hashtable[i][j]);

    ;
}

/* function for Cuckoo-hashing keys
* keys[]: input array of keys
* n: size of input array */
function cuckoo(keys, n) {
    // initialize hash tables to a dummy value 
    // (let-MIN) indicating empty position
    initTable();

    // start with placing every key at its position in
    // the first hash table according to first hash
    // function
    for (let i = 0, cnt = 0; i < n; i++ , cnt = 0)
        place(keys[i], 0, cnt, n);

    // print the final hash tables
    printTable();
}

// Driver program 

/* following array doesn't have any cycles and
hence all keys will be inserted without any
rehashing */
let keys_1 = [20, 50, 53, 75, 100,
    67, 105, 3, 36, 39];

let n = keys_1.length;

// cuckoo(keys_1, n);

/* following array has a cycle and hence we will
have to rehash to position every key */
let keys_2 = [20, 50, 53, 75, 100,
    67, 105, 3, 36, 39, 6];

let m = keys_2.length;

// cuckoo(keys_2, m);


/************************************************************************************** */

// Find the First Non-Repeating Character
// Implement a function that takes a string as input and returns the first non-repeating character in the string.

/**
 * @param {string} str
 * @return {string}
 */
function findFirstNonRepeatingCharacter(str) {
    // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
    const frequencyMap = new Map();

    for (let char of str) {

        if (frequencyMap.has(char)) {
            frequencyMap.set(char, frequencyMap.has(char) + 1)
        } else {
            frequencyMap.set(char, 1)
        }
    }

    for (const [num, frequency] of frequencyMap.entries()) {
        if (frequency === 1) {
            return num;
        }
    }
    return -1;
}


//   Subarray with Sum K Hashing
// Given an array of integers and a target sum, find if there exists a subarray with a sum equal to the target.
// OR
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function hasSubarrayWithSumK(arr, K) {
    const sumSet = new Set();
    let prefixSum = 0;

    for (const num of arr) {
        prefixSum += num;

        if (prefixSum === K || sumSet.has(prefixSum - K)) {
            return true;
        }

        sumSet.add(prefixSum);
    }

    return false;
}



/**
 * Cuckoo Hashing class
 */
class CuckooHashing {
    constructor(size) {
        // PLACEHOLDER_JAVASCRIPT_CONSTRUCTOR_BODY
        this.hMap1 = new Map()
        this.hMap2 = new Map()
        this.size = size
        this.hashCount = 0
    }

    hashFunction1(key) {
        // PLACEHOLDER_JAVASCRIPT_HASH_FUNCTION_1_BODY
        return Math.round(key % this.size)
    }

    hashFunction2(key) {
        // PLACEHOLDER_JAVASCRIPT_HASH_FUNCTION_2_BODY
        return Math.round((key / this.size) % this.size)
    }

    insert(key, value) {
        // PLACEHOLDER_JAVASCRIPT_INSERT_BODY
        this.hashCount++
        if (this.hashCount > this.size) {
            this.rehash()
        }

        let oldValMap1 = this.hMap1.get(key)
        if (oldValMap1) {

            let oldValMap2 = this.hMap2.get(this.hashFunction2(oldValMap1))

            if (oldValMap2) {
                this.insert(this.hashFunction2(oldValMap1), oldValMap2)
            }
            if (!oldValMap2) {
                this.hMap2.set(this.hashFunction2(oldValMap1), value)
                return;
            }

        }

        if (!oldValMap1) {
            this.hMap1.set(key, value)
            return;
        }

    }

    rehash() {
        // PLACEHOLDER_JAVASCRIPT_REHASH_BODY
        this.size++

    }

    displayHashTable() {
        // PLACEHOLDER_JAVASCRIPT_DISPLAY_HASH_TABLE_BODY
        return { map1: this.hMap1, map2: this.hMap2 }
    }
}

let arr = [20, 50, 53, 75, 100, 67, 105, 3, 36, 39]
let cuckooInst = new CuckooHashing(arr.length + 1)
for (let i in arr) {
    let initialKey = cuckooInst.hashFunction1(arr[i])
    cuckooInst.insert(initialKey, arr[i])
}

// console.log(cuckooInst.displayHashTable())


// Four Sum
// Given an array of integers and a target sum, find all unique quadruplets in the array that sum up to the target using hashing.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
    // Your JavaScript function body for fourSum goes here
    const ans = new Set()
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const hash = new Map();

            for (let k = j + 1; k < n; k++) {
                const currentSum = nums[i] + nums[j] + nums[k];
                const fourth = target - currentSum;

                if (hash.has(fourth)) {
                    ans.add([nums[i], nums[j], nums[k], fourth].sort((a, b) => a - b).toString());
                }
                hash.set(nums[k], 0);
            }
        }
    }
    return ans;
}

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0))

// Maximum Points on a Line
// Given a list of 2D points, write a function to find the maximum number of points that lie on the same line using hashing.

/**
 * @param {number[][]} points
 * @return {number}
 */
function maxPointsOnLine(points) {
    let n = points.length

    if (n < 2) return n;

    let maxPt = 0
    for (let i = 0; i < n; i++) {
        let obj = {}
        for (let j = 0; j < n; j++) {

            if (i === j) continue;

            let slope = findSlope(points[i], points[j])

            if (slope == "-Infinity" || slope == "Infinity") {
                obj["Infinity"] = obj["Infinity"] ? obj["Infinity"] + 1 : 1
            }

            else if (obj[slope]) {
                obj[slope]++
            }
            else {
                obj[slope] = 1
            }
        }

        for (let value in obj) {

            maxPt = Math.max(maxPt, obj[value] + 1)
        }

        return maxPt

    }


}

const findSlope = (p1, p2) => {
    let [x1, y1] = p1, [x2, y2] = p2

    //Mathematical eqn to find slope
    return ((y2 - y1) / (x2 - x1))
}

// console.log(maxPointsOnLine([[-9, -651], [-4, -4], [-8, -582], [9, 591], [-3, 3]]))


// Minimum Window Substring
// Given two strings, find the minimum window in the first string that contains all the characters from the second string. Return an empty string if there is no such window.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function minWindowSubstring(str1, str2) {
    // TODO: Implement your code here

    if (!str1 || !str2 || str1.length < str2.length) return "";

    let l = 0, r = 0;
    let count = 0, minI = str1.length + 1, minL = str1.length + 1;

    const freqMap = {};
    for (const ch of str2) freqMap[ch] = (freqMap[ch] || 0) + 1;

    while (r < str1.length) {
        if (freqMap[str1[r]]-- >= 1) count += 1;
        r += 1;

        while (count == str2.length) {
            if (r - l < minL) {
                minL = r - l;
                minI = l;
            }
            if (freqMap[str1[l]]++ >= 0) count -= 1;
            l += 1;
        }
    }
    return str1.slice(minI, minI + minL);
};

// console.log(minWindowSubstring('ADOBECODEBANC', 'ABC'))

// Group Anagrams
// Given an array of strings, group the anagrams together and return the groups as a 2D array. An anagram is a word formed by rearranging the letters of another word.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
    let hMap = new Map()
    let resArr = []

    for (let str in strs) {

        if (hMap.has(strs[str].split('').sort().join(''))) {
            hMap.get(strs[str].split('').sort().join('')).push(strs[str])
        } else {
            hMap.set(strs[str].split('').sort().join(''), [strs[str]])
        }

    }
    for (let [key, value] of hMap) {
        resArr.push(value)
    }

    return resArr
}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))


/******************HASHING ASSIGNMENTS COMPLETED HERE ******************************/