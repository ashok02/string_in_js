/*
<!-- class 

<!-- 10-03-2025 -->


<!-- string methods:- 
    collection of characters which are enclosed in single or duble or back tricks(string interpolate) -->
<!-- string are immutable -->


<!-- demo code  -->
<!-- 


let string1 = "Hello, World!"; 
let string2 = 'Hello, JavaScript!'; 
let string3 = `Hello, ${string1}`;  -->


<!--length:
         Returns the length of the string.

 let text = "Hello";
console.log(text.length); // 5 -->


<!-- 
charAt(index):
         Returns the character at the specified index.

let text = "JavaScript";
console.log(text.charAt(4)); // "S"
 -->






 <!-- includes(substring): 
            Checks if a substring exists. 
  
 let text = "Hello, World!";
console.log(text.includes("World")); // true
-->


<!-- need to handel -ve value use at in js
at() 
let text = "JavaScript";
console.log(text.at(-2));
 
-->

<!-- for unicode  value use character for spacific index
    charcodeAt()-->




    <!-- split(separator): 
            Splits a string into an array.

     let text = "apple,banana,cherry";
    console.log(text.split(",")); // ["apple", "banana", "cherry"]
 -->


 <!-- slice(start, end):
             Extracts a portion of the string.
  
 let text = "JavaScript";
console.log(text.slice(0, 4)); // "Java"
-->



<!-- indexOf(substring):
         Returns the index of the first occurrence of a substring. 
         
         let text = "Hello, World!";
        console.log(text.indexOf("World")); // 7
-->


<!-- toUpperCase(): 
            Converts the string to uppercase.

            let text = "hello";
            console.log(text.toUpperCase()); // "HELLO"
 -->


 <!-- toLowerCase():
             Converts the string to lowercase.
             let text = "HELLO";
            console.log(text.toLowerCase()); // "hello"
 -->


 <!-- concat()
     method is used to join two or more strings into a single string. It does not change the existing
      strings but returns a new concatenated string.
      
      
      let part1 = "JavaScript";
        let part2 = "is";
        let part3 = "awesome!";
        let result = part1.concat(" ", part2, " ", part3);
        console.log(result); // "JavaScript is awesome!"




trim(): 
    Removes whitespace from both ends.
let text = "  Hello, World!  ";
console.log(text.trim()); # "Hello, World!"





repeat():-
      method creates a new string by repeating the original string a specified number of times.
            let str = "Hello ";
            let result = str.repeat(3);
            console.log(result); // "Hello Hello Hello "



split:- convert string into array
    var a = 'hello'
    console.log(a.split(" "))




for reverse the string
      var a = 'hello'
    console.log(a.split("").reverse().join("")) #join use to jion the data



replace() :-
        method is used to replace a specified substring or pattern within a string with another string.
        It returns a new string with the replacements, leaving the original string unchanged.

        let str = "Hello, World!";
        let result = str.replace("World", "JavaScript");
        console.log(result); // "Hello, JavaScript!"
                        .
                        .
                        .
                        .
                        .
                        .
In JavaScript, ig in the context of the replace() method refers to flags used with regular expressions. These flags modify the behavior of the pattern-matching process. Specifically:

i: Case-insensitive matching (ignores letter casing).
g: Global matching (replaces all occurrences, not just the first).
When combined, ig ensures the replacement is both case-insensitive and applies to all occurrences of the match.

    let str = "Hello hello HeLLo";
    let result = str.replace(/hello/ig, "Hi");
    console.log(result); // "Hi Hi Hi"





string search methods :-


indexOf()
Returns the index of the first occurrence of a substring.
Returns -1 if the substring is not found.
Case-sensitive.
.
.
        let text = "JavaScript is awesome!";
        console.log(text.indexOf("is")); // 11
        console.log(text.indexOf("Java")); // 0
        console.log(text.indexOf("python")); // -1

if the text is not found return -1





lastIndexOf():
Returns the index of the last occurrence of a substring.
Returns -1 if the substring is not found.
Searches backward from the end of the string.
Case-sensitive.


    let text = "JavaScript is awesome. JavaScript is powerful.";
    console.log(text.lastIndexOf("JavaScript")); // 27
    console.log(text.lastIndexOf("is")); // 33
    console.log(text.lastIndexOf("Python")); // -1




search()
Searches for a match using a regular expression.
Returns the index of the first match.
Returns -1 if no match is found.


    let text = "JavaScript is awesome!";
    console.log(text.search(/is/)); // 11
    console.log(text.search(/Python/)); // -1





match()
Retrieves matches of a regular expression in a string.
Returns an array of matches or null if no matches are found.

        let text = "JavaScript is awesome! JavaScript is fun!";
        console.log(text.match(/JavaScript/g)); // ["JavaScript", "JavaScript"]
        console.log(text.match(/Python/g)); // null


matchAll()
Returns an iterator of all matches of a regular expression.
Works with patterns that have the g flag.

        let text = "JavaScript is awesome! JavaScript is fun!";
        let matches = text.matchAll(/JavaScript/g);

        for (let match of matches) {
            console.log(match[0]); // Logs "JavaScript" twice
        }



includes()
Checks if a string contains a specified substring.
Returns true if found, otherwise false.
Case-sensitive.

    let text = "JavaScript is awesome!";
    console.log(text.includes("is")); // true
    console.log(text.includes("Python")); // false
    console.log(text.includes("Java", 5)); // false



In JavaScript, template literals are a way to create strings that offer more flexibility and readability
 compared to traditional string literals. They are enclosed by backticks (`) 
instead of single or double quotes and allow embedding expressions, multi-line strings, and more.

        let name = "Ashok";
        let age = 25;
        let message = `Hello, my name is ${name} and I am ${age} years old.`;
        console.log(message); // "Hello, my name is Ashok and I am 25 years old."








