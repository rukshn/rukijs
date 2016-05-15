# Rukijs

Ruki is a simple javascript routing library. 

# Usage

    Ruki.route({
		'/' : index,
		'/route1' : route,
		'/route2' : routetwo,
	})
    Ruki.start()
    

**Accessing routes** 

	function index(){
		//things to happen at index
	}

	function route(){
		//things to happen at routetwo
	}


**Passing parameters**

Parameters are passed as hash values like /url#123 

	function routetwo(params){
		//things to happen at routetwo
		var parameter = params //here params = 123
	}  
