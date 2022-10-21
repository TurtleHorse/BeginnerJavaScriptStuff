// function removeApples(arr){
//     let noApples = []
//   for(let i = 0; i < arr.length; ++i){
//     if( arr[i] !== 'Apple'){
//        noApples.push(arr[i])
//   }
//  } 
//  return noApples
// }

// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))



// function removeApples(arr){
//    return arr.filter(elem => elem !== 'Apple')
// }
// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))



// function filterOutFalsy(arr){
//  return arr.filter(elem => !!elem === true) 
// } 

// console.log(filterOutFalsy(["",[], 0, null, undefined, "0", false]))

// function convertToBoolean(arr){
//     let booleanArr = []
//  for(let i = 0; i < arr.length; ++i)
//     if ( !!arr[i] === true){
//         booleanArr.push(true)
//     }
//     else{
//         booleanArr.push(false)
//     }
//     return booleanArr
// }
// console.log(convertToBoolean([500, 0, "Chris", "", []]))
//Same as Above
// function convertToBoolean(arr){
//     return arr.map(elem => !!elem)
// }
// console.log(convertToBoolean([500, 0, "Chris", "", []]))

// function showRating(rating){
//     let ratings = ""
//  for (let i = 0; i <  Math.floor(rating); ++i){
//     ratings += "*"
//     if (i !== Math.floor(rating) - 1){
//         ratings += " "
//     }
//  }
//  if (!Number.isInteger(rating)) {
//     ratings += " ."
//  }
//  return ratings;
// }
// console.log(showRating(4.5))

// function sortLowToHigh(numbers){
//    return numbers.sort((a,b) => a - b)
// }
// console.log(sortLowToHigh([20, 40, 10, 30, 50, 10, 111, 1]))

// function sortLowToHigh(numbers){
//  return numbers.sort((a,b) => a.price - b.price)
// }
//Here we sorted objects by price
// console.log(sortLowToHigh(
//     [
//         {id: 1, price: 50},
//         {id: 2, price: 0},
//         {id: 3, price: 500},
//     ]
// ))
