/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 */


function likes(arr) {
    if (arr.length === 0) {
        return 'no one likes this';
    } else if (arr.length === 1) {
        return `${arr[0]} likes this`
    } else if (arr.length === 2) {
        return `${arr[0]}, ${arr[1]} likes this`
    } else if (arr.length === 3) {
        return `${arr[0]}, ${arr[1]}, ${arr[2]} likes this`
    } else {
        return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
    }
}


console.log(likes([]))
console.log(likes(['Peter']))
console.log(likes(['Peter', "Alex"]))
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))