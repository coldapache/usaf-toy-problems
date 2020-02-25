
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
    // Step 1. Create an array that will host the result of the 4 sub-arrays
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
  
    // Step 2. Create the first FOR loop that will iterate through the arrays
    for(var i = 0; i < arr.length; i++) {
    /* The starting point, index 0, corresponds to the first array */
  
     // Step 3. Create the second FOR loop that will iterate through the sub-arrays
     for(var subArrayIndex = 0; subArrayIndex < arr[i].length; subArrayIndex++) {
     /* The starting point, index 0, corresponds to the first sub-array */
        
        if(arr[i].age > arr[i].age) {
           
           return arr[i].age;
        }
    }
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