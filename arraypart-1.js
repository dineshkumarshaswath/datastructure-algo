/**
 * 

//Largest element in an Array?
let arr=[2,3,4,5,6]
//Brute force solution
// if you solve like this it will take some o(NlogN) times

arr.sort((a,b)=>a-b)
console.log(arr[arr.length-1])


//optimal solution
// if you solve like this it will take some o(N) times so it is better

arr=[2,3,4,5,6]
let largest=arr[0]
for(let i=0;i<arr.length;i++){
    
    if(arr[i]>largest){
        largest=arr[i]
    }
}

console.log(largest)
//
 */
//-----------------------------------------------------------------------------------

/** 
//second largest element in the array?
let arr=[1,6,6,6,6]

//brute force  
// here it is take some initially sort algorithms takes o(NlogN) and
//second parse o(N) then total o(NlogN)+o(N)

let largest=arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i]
    }
    
}
console.log(largest)

//if you assume that array elements are non negative
let second;
for(let i=arr.length-2;i>=0;i--){
    if(arr[i]!=largest){
        second=arr[i]
        break;
    }
}
console.log(largest,second)


let arr=[2,3,5,7,7,8,9,34]

//better solution
// here it is take  two parses first o(N) +o(N) =o(2N)

let largest=arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i]
    }
    
}
console.log(largest)
//if you assume that array elements are non negative so second is -1
let second=-1
for(let i=0;i<=arr.length;i++){
    if(arr[i]<largest){
        second=arr[i]
        
    }
}
console.log(largest,second)//34 9

//second largest element in the array?
let arr=[35,2,3,5,7,7,8,9,34]
//arr=[1,4,5,6,6,6]

//optimal approach
// here it is take  one parses first o(N) 
//now it is the optimal solution for the this probloem

let largest=arr[0] ,second=-Infinity // because we check largest

for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        second=largest
        largest=arr[i]
    }else if(arr[i]<largest&&arr[i]>second){
        second=arr[i]
    }
    
}
console.log(largest,second)35 34


let smallest=arr[0],ssmallest=+Infinity //because we check smallest
 
for(let i=0;i<arr.length;i++){
    if(arr[i]<smallest){
        ssmallest=smallest
        smallest=arr[i]
    }else if(arr[i]>smallest&&arr[i]<ssmallest){
        ssmallest=arr[i]
    }
    
}
console.log(smallest,ssmallest)//1 4
*/
//-----------------------------------------------------------------------

/**
//check if the array is sorted

let arr=[1,1,2,3,4,5,6]
// let jump into the optimal solution it is o(N) times

 function check(arr){
   for(let i=1;i<arr.length;i++){
    if(!(arr[i-1]<=arr[i])){
    return 'No'
   
        
    }
    
}
return 'yes'

  
 }
 console.log(check(arr))
 */
//-------------------------------------------

//Remove duplicates in-place from sorted array
// brute force force but will take some o(N log N) sc=o(N)
let arr = [1, 1, 2, 2, 2, 3, 3, 3, 4]
//  arr=[...new Set(arr)]
//  console.log(arr) 

//optimal solution
//it will take the o(N ) timing

let i = 0
for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
        arr[i + 1] = arr[j]
        i++
    }
}
console.log(i + 1)
//--------------------------------
