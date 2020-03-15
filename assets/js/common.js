export function hello(name)
{
	console.log(`Hello this is me ${name}!`)
}

export function addImage(image)
{
	let img = document.createElement('img')
	img.src = image

	let body = document.querySelector('body')
	body.appendChild(img)
}