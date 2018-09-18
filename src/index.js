
 module.exports = function getLoveTrianglesCount(preferences = []) {

 	let count = 0;
 	
 	for(let i = 0; i < preferences.length; i++) {
 		
 		let first = preferences[i];
 		let second = preferences[first-1];
 		let third = preferences[second-1];

 		if(first !== second && second !== third && third == i + 1){
 			count ++;
 			console.log(count);
 		}


 	}
 	return count/3;
 };