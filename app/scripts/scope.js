homework:

create 3 constructors that truely interact with one another
and display and manipulate the instances created via the website.

- you will need to:
	- visually represent your instances in the DOM 
	- probably use jquery
	- yeoman can help scaffold
	- you'll need to use events to change things in your instances
	- which probably means, you need to use forms or at least buttons


// var a = 0;
// var b = 10;
// var c = 100;
// // globals: window
// function hello() {
  
// 	var a = "calvin";
// 	var b = "food";
// 	var c = "floor";

// 	function inceptionfunction(hello) {
	
// 		console.log(a);
// 		var d = "mike";
// 		var e = "kat";
// 		var f = "chelsie";
		
// 		// return d;		

// 	}
//    console.log(d + "defined in inception");
// 	inceptionfunction();


// }

// hello();

// myFunct();
// newFunct();


// var myFunct = function() {

// 		console.log("myFunct");
// };

// function newFunct() {
// 	console.log("newFunct");
// }

var sampleFunction = function() {
			var that = this;
			var isAwesome = true;
			var doSomething = function() {
				console.log("did something");
			};
			var setAwesome = function(value) {
				that.isAwesome = value;
			};
			var getAwesome = function() {
				return that.isAwesome;
			};

			return {
				setAwesome: that.setAwesome,
				getAwesome: that.getAwesome
			};


};













