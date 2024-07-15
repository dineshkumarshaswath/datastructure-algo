

// 1. left rotate array by one time
//This is the optimal way to solve this problem TC-o(N)
function oneRotate(arr){
    let temp=arr[0]
    for(let i=1;i<arr.length;i++){
        arr[i-1]=arr[i]
    }
    arr[arr.length-1]=temp
    return arr
    
     
 }
 
 console.log(oneRotate([1,2,3,4,45.4,78,5]))
 
 //--------------------------------------------------
 
 //left rotate array by k time
 //This is the optimal way to solve this problem TC-o(N)
 
 //if the give 10 times then you should find the modulus by arr.length
 //because once you rotate the array n times the you would only modulus number
 //ex. 16%7 =2 then you have to rotate only 2 times
 
 
 // this is the brute force code
 function kTimesrotate(arr){
    let times=k%arr.length
    let temp=[]
    for(let i=0;i<times;i++){
        temp[i]=arr[i]
        // here we first find the what we need to add the left in the array
    }
    console.log(temp)
    
    for(let i=times;i<arr.length;i++){
        arr[i-times]=arr[i]
        // here we move to the balance elements to the front side
    }
    console.log(arr)
    
    //fine we have merge the temp plus arr
    
 //   for(let i=0;i<temp.length;i++)
 //   {
 //       console.log(i)
 //       arr[((arr.length)-times)+i]=temp[i]
 //   }
 
 for(let i=arr.length-times;i<arr.length;i++){
     arr[i]=temp[i-(arr.length-times)]
 } // you can this as alternative method 
    
    return arr
     
 }
 let arr=[1,2,3,4,5]
 let k=10
 console.log(kTimesrotate(arr,k))
 
 // the TC is o(d) +o(n-d)+o(d)=o(n+d)
 //the SC is here we takes o(d) for store the k  elementes
 
 // this is the  optimal code
 
 function reverse(start,end,arr){
     while(start<=end){
         let temp=arr[start]
         arr[start]=arr[end]
         arr[end]=temp
         start++
         end--
         // here we dont return anything it always modify the arr
     }
     
 }
 
 function kTimesrotate(arr,n){
     let k=n%arr.length
     reverse(0,k-1,arr)
     console.log(arr) // here we dont use this console
     reverse(k,arr.length-1,arr)
     console.log(arr)
     reverse(0,arr.length-1,arr)
     return arr
     
 }
 
 let arr=[1,2,3,4,5,6]
 let k=10
 console.log(kTimesrotate(arr,k))
 // the TC is o(d)+o(n-d)+o(n)=o(2n)
 
 
 // this is right rotate brute force solution
 function rotateRight(arr,k){
     let temp=[]
     console.log('loop')
     // it is for first store the temp elements
     for(let i=arr.length-k;i<arr.length;i++) {
         temp.push(arr[i])
         
     }
     
      // it for remaining elements
     for(let j=(arr.length-k)-1;j>=0;j--){
      
         arr[k+j]=arr[j]
     }
   
     
     // this finally concate methods
     
     // for(let i=0;i<temp.length;i++){
     //     arr[0+i]=temp[i]
         
     // }
     for(let i=0;i<temp.length;i++){
         arr[i]=temp[i]
     }
     
     return arr
    
     
     // for(let i=0;i<temp.length;i++){
     //     arr[(arr.legth+k)+i]=temp[i]
     // }
     // return arr
 }
 let arr=[1,2,3,4,5,6,7]
 let k=5
 
 console.log(rotateRight(arr,k))
       
 //--------------------------------------------------
 
 
 
 