function calculateSum(x,y) {
  var z = x+y;
  return z;
}

document.getElementById( "calc" ).onclick = function(){
	alert(
    document.getElementById( "x" ).value,
    document.getElementById( "y" ).value 
  );
}