var database = [
	{
		username: "mark",
		password: "privacy"
	}
];

var newsFeed = [
	{
		username: "Illuminati",
		post: "We have bolted."
	},
	{
		username: "facebook-users",
		post: "We still love to use it!"
	}
];

var userNamePrompt = prompt("What's your username");
var passwordPrompt = prompt("What's your password");

function signIn(user , pass){
	if(user === database[0].username && pass = database[0].password){
		console.log(newsFeed);
	}
	else{
		alert("Wrong Credentials");
	}
}
]
signIn(userNamePrompt , passwordPrompt);