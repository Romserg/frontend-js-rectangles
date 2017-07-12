function areIntersected(elem1, elem2) {
	if (elem1.left > (elem2.left + elem2.width) || (elem1.left + elem1.width) < elem2.left ||
		elem1.top > (elem2.top + elem2.height) || (elem1.top + elem1.height) < elem2.top)
		return false;
	return true;
}




console.log(areIntersected({
	left: 0,
	top: 0,
	width: 20,
	height: 20
}, {
	left: 10,
	top: -10,
	width: 25,
	height: 25
}));