let button       = document.querySelector('.button-toggle');
let buttonActive = false;
let mainMenu     = document.querySelector('.main-content-menu');
let menuItems    = document.querySelectorAll('.main-content-menu a'); 


button.addEventListener('click', addElement);
document.body.onresize = function(){
	if(document.body.offsetWidth > (768 - 20)){
		mainMenu.style.opacity = 1;
		mainMenu.style.height = 100 + '%';
		menuItems.forEach(function(item){
			item.style.opacity = 1;
		});
		button.classList.add('active-btn');
		button.innerText = 'close';
		buttonActive = true;
	}
}


function addElement(e) {
	let addSpan = document.createElement('span');
	let mVal    = Math.max(this.clientWidth, this.clientHeight);
	let rect    = this.getBoundingClientRect();

	addSpan.style.width = addSpan.style.height = mVal / 2 + 'px';
	addSpan.style.left  = e.clientX - rect.left - (mVal / 4) + 'px';
	addSpan.style.top   = e.clientY - rect.top - (mVal / 4) + 'px';


	if(buttonActive === false){
		button.innerText = 'close';
		button.classList.add('active-btn');
		mainMenu.style.opacity = 1;
		mainMenu.style.height = 100 + '%';
		menuItems.forEach(function(item){
			item.style.opacity = 1;
		});
		buttonActive = true;
	}
	else{
		button.innerText = 'open';
		button.classList.remove('active-btn');
		mainMenu.style.opacity = 0;
		mainMenu.style.height = 0 + 'px';
		menuItems.forEach(function(item){
			item.style.opacity = 0;
		});
		buttonActive = false;
	}
	
	addSpan.classList.add('circle');
	this.appendChild(addSpan);
}
/*------------------------------------------------*/
let navFixed = document.querySelector('#fixed');


window.addEventListener('scroll', scrollAppear);

function scrollAppear() {
	let offsetY = window.pageYOffset;
	if(offsetY > 80){
		navFixed.style.cssText = 'transform: translateY(-20px)';
	}
	else if(offsetY <= 80){
		navFixed.style.cssText = 'transform: translateY(-100px)';
	}
}