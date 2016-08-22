
function mailInfo(to, from, subject, message) { // Переносы сохраняются
	return `
	to: ${to}, 
	from: ${from},
	subject: ${subject},
	message: ${message}
	`
}

console.log(mailInfo("Nick", "Vladimir", "Hello", "Hi my friend! How are you?"))

//Таgs

function summ(x, y) {

	return `x: ${x}, y: ${y}, x + y: ${parseInt(x) + parseInt(y)}`

}

console.log(summ("5", "6"));


// Tags

let name = "Vladimir";
let lastName = "Ivanov";

console.log(upperName`Hello ${name} ${lastName}!`); 

// Make uppercase tag

function upperName(literals, value, value2) { 
	console.log(literals[0] + value + literals[1] + value2.toUpperCase() + literals[2]);
}
