const anArray = [0, 1, 2, 3, 4, 5];
//console.log(anArray);

//const ann_array = new Array("dbhj", "gvfdhg", "gbjbv", "vbv", true, 01);
//console.log(ann_array[2]);

//Array Methods

//ann_array.push(4);
//console.log(ann_array);

// anArray.pop(); //# This will cut the last elements of array
// anArray.push(8, 10);  // This will add elements to the array


//anArray.unshift(9);
//anArray.shift();
// console.log(anArray.includes(9));
// console.log(anArray.indexOf(10));

//################################ Slice and Splice ##########################################


console.log("A", anArray);

const nArray = anArray.slice(2, 4);

console.log(nArray);
console.log("B", anArray);


const tArray = anArray.splice(2, 3);

console.log(tArray);   //It will manupulate the whole array
console.log("C", anArray);

