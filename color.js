var colors=generatecolor(6)
var square=document.querySelectorAll('.square')
var button_h=document.querySelector('#hard')
var button_p=document.querySelector('#replay')
var button_e=document.querySelector('#eassy')
var winner=document.querySelector('#winner')
var rgb=document.getElementById('rgb')
var jumbotron=document.querySelector('.heading')
var varsh=document.getElementsByClassName('disp')
var num=6
var modenum=6
var mode='h'
var colornum=setgoal(num)
var goal=colors[colornum]

rgb.textContent=goal.toUpperCase()

//function for changing backgroung color

function backgroundchange() {
	winner.textContent=''
	for (var i = 0; i < square.length; i++) {
	square[i].style.background=colors[i]
	}
}

//selection of goal color

function setgoal(num) {
	var goals=Math.floor(Math.random()*num)
	return goals
}

backgroundchange()

//genetaring the random colors

function generatecolor(len) {
	var arr=[]
	for (var i = 0; i < len; i++) {
		arr.push(generatecolorrandom())
	}
	return arr
}

function generatecolorrandom() {
	//red color
	var r = Math.floor(Math.random()*256)
	//green color
	var g = Math.floor(Math.random()*256)
	//blue
	var b = Math.floor(Math.random()*256)
	return 'rgb('+r+', '+g+', '+b+')'
}

//changes when button clicked

function button(modenum) {
	colors=generatecolor(modenum)
	colornum=setgoal(num)
	goal=colors[colornum]
	backgroundchange()
	jumbotron.style.background='#EBE8E7'
	rgb.textContent=goal.toUpperCase()
	for(var i=0;i<varsh.length;i++){
			varsh[i].style.color='#EBE8E7'
	}
}

//checking for the pressend color

for (var i = 0; i < square.length; i++){
	square[i].addEventListener('click',function(){
		winner.textContent='tryagain'
		if(this.style.background==goal){
			for (var i = 0; i < num; i++) {
				winner.textContent='winner'
				square[i].style.background=goal
			}
			button_p.textContent='New Game'
			jumbotron.style.background=goal
			for(var i=0;i<varsh.length;i++){
			varsh[i].style.color=goal
			}
		}
		else{
			this.style.background='#232323'
		}
	})
}

//buttons functions and adding events

//button-hard

button_h.addEventListener('click',function(){
	mode='h'
	num=6
	modenum=6
	button(modenum)
})

//button-eassy

button_e.addEventListener('click',function(){
	mode='e'
	num=3
	modenum=3	
	for (var i = 3; i < square.length; i++) {
	square[i].style.background='#232323'
	}
	button(modenum)
})

//button-replay

button_p.addEventListener('click',function(){
	if(mode=='h'){
		modenum=6
	}
	else{
		modenum=3
	}
	button_p.textContent='New color'
	button(modenum)
})