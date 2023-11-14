let username, password;

function Ready(){
	username = document.getElementById('usernameTextbox').value;
    password = document.getElementById('passwordTextbox').value;
}
document.getElementById('submitBtn').addEventListener('click', function(){
Ready();
	firebase.database().ref('HomeService/Users/Admin').on('value',function(snapshot) {
		var user = snapshot.child("username").val();
		var pass = snapshot.child("password").val();
        var type = snapshot.child("username").val();

        if(username == ""){
            window.alert("Username field is empty!");
        }
        else if(password == ""){
            window.alert("Password field is empty!");
        }
        else if(username == "" && password == ""){
            window.alert("Please input your credentials.");
        }
        else if(username != user && password != pass){
            window.alert("Wrong credentials!");
        }
        else if(username == user && password == pass){
            if(type == "admin"){
                location.replace("http://127.0.0.1:5501/html/landingPage.html");
                
            }
            else if(type == "customer"){
                window.alert("customer");
            }
            else if(type == "provider"){
                window.alert("provider");
            }
        }
        else{
            window.alert("Invalid input!");
        }

		// if(username== '' && password == '') {
		// 	console.log('username is wrong')
		// } else if (username == user) {
		// 	if (password == pass) {
		// 		console.log("go to login")
		// 		window.location.href("")
		// 	}
		// }

	})
})	  