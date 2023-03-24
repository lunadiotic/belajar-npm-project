const jokes = require('give-me-a-joke');
const color = require('chalk-rainbow');
const cowsay = require('cowsay');

console.log(
	cowsay.say({
		text: "I'm a moooodule",
		e: '> <',
		T: 'U ',
	})
);

jokes.getRandomDadJoke(function (joke) {
	console.log(color('Dad joke: ' + joke));
});
