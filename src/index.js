/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
 module.exports = function getLoveTrianglesCount(preferences = []) {
 	
 	let count = 0;
 	for(let i = 0; i < preferences.length; i++) {
 		if(preferences[i] - 1 === i || preferences[i] - 1 < 0) continue;
 		let secondLoverIndex = preferences[i] - 1;

 		if(preferences[secondLoverIndex] === secondLoverIndex+1 || secondLoverIndex < 0) continue;
 		let thirdLoverIndex = preferences[secondLoverIndex] - 1;
 		
 		if(preferences[thirdLoverIndex] === thirdLoverIndex+1 || thirdLoverIndex < 0) continue;
 		let firstLoverIndex = preferences[thirdLoverIndex] - 1;
 		
 		if(i === firstLoverIndex)
 			count++;
 	}
 	return count/3;
 };
