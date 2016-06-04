var $container = $(".container");
	var colorsData = "red,yellow,orange,white,blue,green,black,purple";
	var objectsData = "apple,banana,beetroot,bell-pepper,carrot,lamon,corn,orange,avocado,cherry,tomato,fish1,fish2,fish3,fish4,fish5,fish6,fish7,fish8,fish9,fish10,fish11,fish12,fish13,face1,face2,face3,face4,face5,face6,face7,face8,face9,face10,face11,face12,face13,face14,face15,face16,face17,face18,face19,face20,face21,face22,face23,face24";
	//var objectsData = "avocado";
	var animationsData = "bounce,flash,pulse,rubberBand,shake,swing,tada,wobble,jello,bounceIn,bounceInDown,bounceInLeft,bounceInRight,bounceInUp,fadeIn,fadeInDown,fadeInDownBig,fadeInLeft,fadeInLeftBig,fadeInRight,fadeInRightBig,fadeInUp,fadeInUpBig,flip,flipInX,flipInY,lightSpeedIn,rotateIn,rotateInDownLeft,rotateInDownRight,rotateInUpLeft,rotateInUpRight,slideInUp,slideInDown,slideInLeft,slideInRight,zoomIn,zoomInDown,zoomInLeft,zoomInRight,zoomInUp,rollIn";

	var lastColor = "";
	var lastAnimation = "";

	var colors = colorsData.split(",");
	var objects = objectsData.split(",");
	var animations = animationsData.split(",");

	var delay = 4*1000;

	var apploop = null;
	var startBtn = null;

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

		console.log(object);





		lastAnimation = animation;
		lastColor = color;		

		$container.html('<i class="fa fa-'+object+'"></i>');
		$container.addClass(animation+" "+color);

		//var audioControl = document.getElementById("audio-control");
		//audioControl.play();

	}
	function randomIndex(myArray){
		return Math.floor(Math.random() * (myArray.length-1) );		
	}

	function pleaseStartApp(){
		startBtn = setInterval(startAppAnimation, 1000);
	}
	function pleaseStopApp(){
		clearInterval(startBtn);
	}
	function startAppAnimation(){
		var btn = $("a#toggle-app");

		if( btn.hasClass('bounce') )
			$("a#toggle-app").removeClass("bounce").addClass("no");
		else {
			$("a#toggle-app").removeClass("no").addClass("bounce");
		}
	}
	pleaseStartApp();

	$(document).ready(function(){
		$("a#toggle-app").click(function(e){
			e.preventDefault();
			var $target = $(e.currentTarget);



			$target.toggleClass('play');

			if($target.hasClass('play')) {
				stopApp();
				pleaseStartApp();
			} else {
				appLogic();
				startApp();
				pleaseStopApp();
			}

			
		})
	});
