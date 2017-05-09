function dataTypes(argument){
	if (typeof argument === 'string'){
		return argument.length;
	}
	else if (typeof argument === 'undefined' || argument === null ){
		return ' no value'; 
	}
	else if (typeof argument === 'boolean'){
		return argument;
	}
	else if (typeof argument === 'number'){
		if (argument<100){
			return 'less than 100';
		}
		else if (argument>100){
			return 'greater than 100';
		}
		else {
			return 'equal to 100';
		}
	}
	else if (typeof argument === 'function'){
		return argument(true);
	}
	else if (argument.constructor === Array ){
	  return argument[2];
	}

	
}
