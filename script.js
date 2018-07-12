var database = [
	{
		username: "mark",
		password: "privacy"
	},
	{
		username: "stark",
		password: "infinity"
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

function isUserValid(user, pass)
{
	for (var i = 0; i < database.length; i++) 
	{
		if (database[i].username === user &&
		 	database[i].password === pass)
		{
			return true;
	    }		 
	}
	return false;
}

function signIn(user, pass) {
	if (isUserValid(user, pass))	{
		console.log(newsFeed);
	}
	else{
		alert("Wrong Credentials");
	}
}

signIn(userNamePrompt , passwordPrompt);