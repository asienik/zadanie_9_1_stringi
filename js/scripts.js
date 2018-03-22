function drawTree(n) {
	var i;
	var j;
	var star;
	for(i=0; i<n; i++) {
		var star = "";
		for(j=0; j<=i; j++) {
			star += "*";	
		} 
		console.log(star);
	}
}
drawTree(8);

