(function(window){
    //I recommend this
    'use strict';

    function init(){
    	var url = window.location
    	var hash = window.location.hash
        var Ruki = {}
        var body = document.querySelector('body')

		body.addEventListener('click', function(e) {
		    var url = e.target.getAttribute('href')
		    var target_url = url
		    if(url !== null){
			    Ruki.redi(target_url)
		    }
    	    e.preventDefault()	
		}, true);

        Ruki.route = function(routes){
        	window.routes = routes
        }

        Ruki.redi = function(route){
        	history.pushState(null, null, route)
        	Ruki.runroute()
        }

        Ruki.runroute = function(){
        	var routes = window.routes
        	var hash = window.location.hash.substr(1)
        	var route = window.location.pathname
        	var param = ''
        	if(route !== null){
        		if(route in routes && hash !== ''){
        			routes[route](param = hash)
        		}
        		else if(route in routes){
        			routes[route]()
        		}
        	}
        }

        Ruki.forward = function(){
        	window.history.forward()
        }

        Ruki.previous = function(){
        	window.history.previous()
        }

        Ruki.start = function(){
        	Ruki.runroute()
        }

        return Ruki;
    }
    //define globally if it doesn't already exist
    if(typeof(Ruki) === 'undefined'){
        window.Ruki = init();
    }
    else{
        console.log("Ruki already defined.");
    }
})(window)