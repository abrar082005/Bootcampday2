function findMinMax(anyArray){
	if (anyArray.constructor !== Array){
	  return 'not an array';
	}
  else  {
    b = Math.max.apply(null, anyArray); 
    a = Math.min.apply(null, anyArray);
    if (a === b){
      return[a];
  }
    return [a,b];
}
}