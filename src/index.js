function areIntersected(elem1, elem2) {
	return elem1.left < elem2.height && elem1.height > elem2.left && elem1.top < elem2.height && elem1.height > elem2.top;
}



areIntersected({
	left: 0,
	top: 0,
	width: 20,
	height: 20
}, {
		left: 10,
		top: 10,
		width: 25,
		height: 25
	});