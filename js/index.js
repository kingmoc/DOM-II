// Your code goes here


// MouseOver Event
let busImage = document.querySelector('.intro img')
busImage.addEventListener("mouseover", busTextBox)

busImage.addEventListener("mouseout", (event) => {
	let newBlockText = document.querySelector('.intro .text-block')
	newBlockText.parentNode.removeChild(newBlockText); 
})

function busTextBox() {
	// let busImage2 = document.querySelector('.intro img')
	let intro = document.querySelector('.intro')
	console.log(intro)
	let textBox = document.createElement('div')
	textBox.setAttribute('class', "text-block")
	header = document.createElement('h4')
	header.textContent = "** Note to the Bus **"
	text = document.createElement('p')
	text.textContent = "This is only a model!"

	textBox.appendChild(header)
	textBox.appendChild(text)
	intro.appendChild(textBox)


	let textBlock = document.querySelector('.text-block')
	textBlock.style.backgroundColor = 'lightblue'
	textBlock.style.color = 'black'
	textBlock.style.position = 'absolute'
	textBlock.style.bottom = '300px'
	textBlock.style.right = '550px'
	textBlock.style.paddingLeft = '20px'
	textBlock.style.paddingRight = '20px'

	console.log(intro)
}

// KeyDown Event
// document.addEventListener('keydown', (event) => alert("Please stop Pressing Keys!"))

// Wheel Event 
document.addEventListener('wheel', (event) => {
	// console.log(event.target)
	let navBar = document.querySelector('.main-navigation'); 
	navBar.style.backgroundColor = '#17a2b8'
})

// load Event
let id = window.setInterval(loadBackground, 500)
console.log(id)

function loadBackground() {
	window.addEventListener('load', (event) => {
		event.srcElement.bgColor = 'lightgrey'; 
		// alert("Welcome to the Fun Bus Project")
		clearInterval(id)
	}) 
}
loadBackground()

// Double Click Event
let images = document.querySelector('.img-content')
images.addEventListener('dblclick', (event) => {
	event.srcElement.style.display = 'none'
})

//  Copy Event
let textP = document.querySelector('p')
console.log(textP)
textP.addEventListener('copy', (event) => {
	console.log(event)
	event.preventDefault()
	alert('Sorry Cannot Copy Text Here!')
})

// Click Event
let button = document.querySelector('.btn')
button.addEventListener('click', (event) => {
	alert('This button isnt quite ready!')
	event.stopPropagation()
})

window.addEventListener('click', (event) => alert('This belongs to the Window'))

// Resize Event
window.addEventListener('resize', (event) => alert('Screen To Small'))

// Keyup Event 
document.addEventListener('keyup', (event) => event.srcElement.bgColor = 'lightgreen') 

// Prevent Nav Reload
let navItemsText = document.querySelectorAll('a')
console.log(navItemsText)

navItemsText.forEach((value, index, nl) => {
	value.addEventListener('click', (event) => {
		console.log(event)
		event.preventDefault()
	})
})






