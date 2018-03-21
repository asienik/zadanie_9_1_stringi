var n = 8;
var i;
var j;
function drawTree(n) {
	var star;
	for(i=0; i<n; i++) {
		var star = "";
		for(j=0; j<=i; j++) {
			star += "*";	
		} 
		console.log(star);
	}
}
drawTree(n);
