var $container = $(".container");
	var colorsData = "red,yellow,orange,white,blue,green,black,purple";
	var objectsData = "cloud,circle,heart,globe";
	var animationsData = "bounce,flash,rubberBand,shake,swing,tada,wobble,jello,bounceIn,bounceInDown,bounceInLeft,bounceInRight";

	var lastColor = "";
	var lastAnimation = "";

	var colors = colorsData.split(",");
	var objects = objectsData.split(",");
	var animations = animationsData.split(",");

	var delay = 4*1000;

	var apploop = null;

	function startApp() {
		apploop = setInterval(appLogic, delay);
	}
	function stopApp() {
		$container.html('');
		clearInterval(apploop);
	}


	function appLogic(){

		if(lastColor !== ""){
			$container.removeClass(lastAnimation+" "+lastColor);
		}

		var arrayIndex = randomIndex(colors);
		var color = colors[arrayIndex];
		var tempValue = colors.splice(arrayIndex,1);
		colors.push(tempValue[0]); 


		var arrayIndex = randomIndex(objects);
		var object = objects[arrayIndex];
		var tempValue = objects.splice(arrayIndex,1);
		objects.push(tempValue[0]); 


		var arrayIndex = randomIndex(animations);
		var animation = animations[arrayIndex];
		var tempValue = animations.splice(arrayIndex,1);
		animations.push(tempValue[0]);	





		lastAnimation = animation;
		lastColor = color;		

		$container.html('<i class="fa fa-'+object+'"></i>');
		$container.addClass(animation+" "+color);

		var audioControl = document.getElementById("audio-control");
		audioControl.play();

	}
	function randomIndex(myArray){
		return Math.floor(Math.random() * (myArray.length-1) );		
	}	

	$(document).ready(function(){
		$("a#toggle-app").click(function(e){
			e.preventDefault();
			var $target = $(e.currentTarget);



			$target.toggleClass('play');

			if($target.hasClass('play')) {
				stopApp();

			} else {
				appLogic();
				startApp();
			}

			
		})
	});
