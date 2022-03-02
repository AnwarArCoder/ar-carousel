//Get Array Of Slider Items
var arItemsSlides = Array.from(document.querySelectorAll('.ar-carousel .ar-stage-outer .ar-stage .ar-item'));

//Get Nember Of Items
var lengthOfItemsSlides = arItemsSlides.length;

//Set Current Slide Of Items
var currentItemsSlide = 1;

//Get Number Of Item Current
var numberOfCurrentItem = document.getElementById('numberOfArItem');

//Get Prev Btn And Next
var prevBtn = document.getElementById('arPrev');
var nextBtn = document.getElementById('arNext');

//On Click Prev And Next BTN Run Function
prevBtn.addEventListener('click', carouselPrev);
nextBtn.addEventListener('click', carouselNext);

//Function Next
function carouselNext() {
	
	if( nextBtn.classList.contains('disabled') ){
		return false;
	} else{
		currentItemsSlide++;
		theCheker();
	}
	
};

//Function Prev
function carouselPrev() {
	if( prevBtn.classList.contains('disabled') ){
		return false;
	} else{
		currentItemsSlide--;
		theCheker();
	}
};

//Create Main Dots Ul Elements 
var boxDotsBtn = document.createElement('ul');

//Set Id To dotsBtn
boxDotsBtn.setAttribute('id', 'boxDotsBtnUl');

//Create List Item dot On dotsBtn Box
for (var i = 1; i <= lengthOfItemsSlides; i++) {

	//Create Dots Li On dotsBtn Box
	var itemOfDot = document.createElement('li');

	//Set data-carousel To itemOfDot And Class
	itemOfDot.setAttribute('class', 'dot');
	itemOfDot.setAttribute('data-carousel', i);

	//Set Nember Of Item Dot On itemOfDot
	itemOfDot.appendChild(document.createTextNode(i));

	//add itemOfDot On dotsBtn
	boxDotsBtn.appendChild(itemOfDot);

};

//add dotsBtn On Id="arDots"
document.getElementById('arDots').appendChild(boxDotsBtn);

//Get Main Dots Ul Elements 
var dotsBtnContaner = document.getElementById('boxDotsBtnUl');

//Get Array Of Dot List
var dotList = Array.from(document.querySelectorAll('#boxDotsBtnUl li'));

//Loop all Dots
for( var i = 0; i < dotList.length; i++ ){
	
	dotList[i].addEventListener('click', function(){
		currentItemsSlide = parseInt(this.getAttribute('data-carousel'));
		theCheker();
	});
};

//Run The Cheker Function
theCheker();

//Create The Cheker Function
function theCheker() {
	
	//Add Number Of Item On numberOfCurrentItem
	numberOfCurrentItem.textContent = currentItemsSlide + 'of' + lengthOfItemsSlides;
	
	//Run removeActiveClass Function
	removeActiveClass();
	
	//Add class active on Slider Items
	arItemsSlides[currentItemsSlide - 1].classList.add('active');
	
	//Add class active on li Dots
	dotsBtnContaner.children[currentItemsSlide - 1].classList.add('active');

	//Cheker if currentItemsSlide First one and add class disabled in prevBtn
	if( currentItemsSlide == 1 ){
		prevBtn.classList.add('disabled');
	} else{
		prevBtn.classList.remove('disabled');
	};
	
	//Cheker if currentItemsSlide Last one and add class disabled in NextBtn
	if( currentItemsSlide == lengthOfItemsSlides ){
		nextBtn.classList.add('disabled');
	} else{
		nextBtn.classList.remove('disabled');
	};
	
};

//Remove Active Class On All Page
function removeActiveClass() {
	//Remove Active Class On arItemsSlides
	arItemsSlides.forEach(function (arItem){
		arItem.classList.remove('active');
	});
	
	//Remove Active Class On arItemsSlides
	dotList.forEach(function (dot){
		dot.classList.remove('active');
	});
};
