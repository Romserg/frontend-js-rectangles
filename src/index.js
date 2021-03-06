﻿function areIntersected(elem1, elem2) {
	let rightA = elem1.left + elem1.width;
	let rightB = elem2.left + elem2.width;
	let bottomA = elem1.top + elem1.height;
	let bottomB = elem2.top + elem2.height;
	if (elem1.left >= rightB || rightA <= elem2.left ||
		elem1.top >= bottomB || bottomA <= elem2.top)
		return false;
	return true;
}



function filterVisible(elem1, compareArray) {
	return compareArray.filter(function (element) {
		if (element.width !== 0 && element.height !== 0)
			return areIntersected(elem1, element);
		return false;

	});
}


console.log(areIntersected({
	left: 0,
	top: 0,
	width: 20,
	height: 20
},
{
	left: 10,
	top: -10,
	width: 25,
	height: 25
}));

console.log(filterVisible({
	left: 0, top: 0,
	width: 20, height: 20
}, [
	{
		left: 10, top: 10,
		width: 25, height: 25
	},
	{
		left: 15, top: 10,
		width: 20, height: 20
	},
	{
		left: 10, top: 10,
		width: 0, height: 25
	},
	{
		left: 100, top: 10,
		width: 5, height: 5
	}
]));