/**************************************
*	File 	: login.js
*	Summary : Belongs to login.html
*
*	Project : Advanced Monitor
***************************************/

function login() {
	var login;
	var password;
	var labelText;
	
	username = document.getElementById("username").value;
	password = document.getElementById("password").value;
	
	labelText = document.getElementById("alertText");

	var loginDetails =  {};
	
	loginDetails["username"] = username;
	loginDetails["password"] = password;
	
	//alert("Username = " + username + " Password = " + password);
	var loginStr = JSON.stringify(loginDetails);
	
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			if(xmlHttp.responseText.includes("Username"))
			{
				var e = document.getElementById("alertDiv");
				e.style.display = 'block';
				labelText.innerHTML = xmlHttp.responseText;
				document.getElementById("username").value = "";
				document.getElementById("password").value = "";
			}
			if(xmlHttp.responseText.includes("success"))
				window.location = "dashboard.html";
				username.value="";
		}
	};
	
	xmlHttp.open("POST", "/api/login.php", true);
	xmlHttp.setRequestHeader('Content-Type', 'application/json');
	xmlHttp.setRequestHeader('Cache-Control', 'no-cache');
	xmlHttp.send(loginStr);

	return false;
}

function Cawarn()
{
	var e = document.getElementById("alertDiv");
	e.style.display = 'block';
	var labelText = document.getElementById("alertText");
	labelText.innerHTML = "Contact With Admin !!";
}

function toggleHidden(id) 
{
	var attr = document.getElementById(id);
	attr.style.display = 'none';
}