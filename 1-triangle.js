/*
Triangle
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
-> 3
*/

//your code here

let part = "#";

while (part.length<7) {
    console.log(part);
    part = part + "#";
    
}
