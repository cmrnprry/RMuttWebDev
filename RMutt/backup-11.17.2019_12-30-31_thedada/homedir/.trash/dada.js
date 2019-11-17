function TheLogin() {

	var password = 'whoisrmutt';

	if (this.document.login.pass.value == password) {
		top.location.href="puzzle1.html";
	}
	else {
		window.alert("Incorrect password.");
	}
}

function showContent() {
	var password1 = 'amie';
	var password2v1 = 'louise varese norton';
	var password2v2 = 'louise norton varese';
	var password3 = 'god is in the plumbing';
	var password4 = 'mina';

	if (this.document.login.pass.value == password1) {
		var x = document.getElementById("content1");
		x.style.display = "block";
	} else if (this.document.login.pass.value == password2v1 || this.document.login.pass.value == password2v2) {
		var x = document.getElementById("content2");
		x.style.display = "block";
	} else if (this.document.login.pass.value == password3) {
		var x = document.getElementById("content3");
		x.style.display = "block";
	} else if (this.document.login.pass.value == password4) {
		var x = document.getElementById("content4");
		x.style.display = "block";
	} else {
		window.alert("Invalid password.");
	}
}