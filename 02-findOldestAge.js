
//Given an array of objects of names and ages find the oldest age and return it.
//Example: 

var arr = [
  {
    name: "Bill",
    age: 34
  },
  {
    name: "Derek",
    age: 16
  }
];
//findOldestAge(myArr);
//--> returns 34





function findOldestAge(arr) {
    if(arr[0].age >= arr[1].age) {
      return arr[0].age;
    }
   
  
    
 }
 


largestOfFour();
  
  // // Uncomment and copy into Chrome dev console to test your function!
  // var myArr = [
  //   {
  //     name: "Bill",
  //     age: 34
  //   },
  //   {
  //     name: "Derek",
  //     age: 16
  //   }
  // ];
  // console.log(findOldestAge(myArr));