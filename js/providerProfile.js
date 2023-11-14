var getLocalStorage = localStorage.getItem("userNumber");
console.log(getLocalStorage);

firebase.database().ref('HomeService/Pending/'+getLocalStorage).on('value',function(snapshot){
    const base64_response = snapshot.val().image;

    document.getElementById('providerPending').innerHTML = "Provider Page ("+snapshot.val().ShopName+")";
    document.getElementById('providerName').innerHTML = snapshot.val().ShopName;

    document.getElementById('shopName').innerHTML = snapshot.val().ShopName;
    document.getElementById('contact').innerHTML = snapshot.val().phoneNumber;
    document.getElementById('location').innerHTML = snapshot.val().address;

    document.getElementById('firstname').innerHTML = snapshot.val().Firstname;
    document.getElementById('lastname').innerHTML = snapshot.val().lastName;
    document.getElementById('contactnumber').innerHTML = snapshot.val().phoneNumber;
    document.getElementById('address').innerHTML = snapshot.val().address;
    document.getElementById('emailaddress').innerHTML = snapshot.val().emailAddress;
    
    document.getElementById('TESTINGWATERS').src = "data:image/png;base64,"+base64_response;
})


document.getElementById('acceptBtn').addEventListener('click', function(){
    firebase.database().ref('HomeService/Pending/'+getLocalStorage).on('value',function(snapshot){
        var category = snapshot.val().Category;
        var contactnumber = snapshot.val().ContactNumber;
        var firstname = snapshot.val().Firstname;
        var location = snapshot.val().Location;
        var paymentoption = snapshot.val().PaymentOption;
        var shopname = snapshot.val().ShopName;
        var type = snapshot.val().Type;
        var withstore = snapshot.val().WithStore;
        var workinghours = snapshot.val().WorkingHours;
        var address = snapshot.val().address;
        var emailaddress = snapshot.val().emailAddress;
        var lastname = snapshot.val().lastName;
        var password = snapshot.val().password;
        var phonenumber = snapshot.val().phoneNumber;
        var image = snapshot.val().image;

        if(withstore == "Yes"){
            firebase.database().ref('HomeService/Accepted/'+getLocalStorage).update({
                Category: category,
                ContactNumber: contactnumber,
                Firstname: firstname,
                Location: location,
                PaymentOption: paymentoption,
                ShopName: shopname,
                Type: type,
                WithStore: withstore,
                WorkingHours: workinghours,
                address: address,
                emailAddress: emailaddress,
                lastName: lastname,
                password: password,
                phoneNumber: phonenumber,
                image: image,
            })
            firebase.database().ref('HomeService/Pending/'+getLocalStorage).remove();
            window.alert(shopname +" has been Accepted!");
            location.replace('http://127.0.0.1:5501/html/landingPage.html');


        }
        else if(withstore == "No"){
            firebase.database().ref('HomeService/Accepted/'+getLocalStorage).update({
                Category: category,
                Firstname: firstname,
                ShopName: shopname,
                Type: type,
                WithStore: withstore,
                WorkingHours: workinghours,
                address: address,
                emailAddress: emailaddress,
                lastName: lastname,
                password: password,
                phoneNumber: phonenumber,
                image: image,
            })
            firebase.database().ref('HomeService/Pending/'+getLocalStorage).remove();
            window.alert(shopname +" has been Accepted!");
            location.replace('http://127.0.0.1:5501/html/landingPage.html');
        }
    })   
})

document.getElementById('rejectBtn').addEventListener('click', function(){
    firebase.database().ref('HomeService/Pending/'+getLocalStorage).on('value',function(snapshot){
        var category = snapshot.val().Category;
        var contactnumber = snapshot.val().ContactNumber;
        var firstname = snapshot.val().Firstname;
        var location = snapshot.val().Location;
        var paymentoption = snapshot.val().PaymentOption;
        var shopname = snapshot.val().ShopName;
        var type = snapshot.val().Type;
        var withstore = snapshot.val().WithStore;
        var workinghours = snapshot.val().WorkingHours;
        var address = snapshot.val().address;
        var emailaddress = snapshot.val().emailAddress;
        var lastname = snapshot.val().lastName;
        var password = snapshot.val().password;
        var phonenumber = snapshot.val().phoneNumber;
        var image = snapshot.val().image;

        if(withstore == "Yes"){
            firebase.database().ref('HomeService/RejectedProviders/'+getLocalStorage).update({
                Category: category,
                ContactNumber: contactnumber,
                Firstname: firstname,
                Location: location,
                PaymentOption: paymentoption,
                ShopName: shopname,
                Type: type,
                WithStore: withstore,
                WorkingHours: workinghours,
                address: address,
                emailAddress: emailaddress,
                lastName: lastname,
                password: password,
                phoneNumber: phonenumber,
                image: image,
            })
            firebase.database().ref('HomeService/Pending/'+getLocalStorage).remove();
            window.alert(shopname +" has been Rejected!");
            location.replace('http://127.0.0.1:5501/html/landingPage.html');


        }
        else if(withstore == "No"){
            firebase.database().ref('HomeService/RejectedProviders/'+getLocalStorage).update({
                Category: category,
                Firstname: firstname,
                ShopName: shopname,
                Type: type,
                WithStore: withstore,
                WorkingHours: workinghours,
                address: address,
                emailAddress: emailaddress,
                lastName: lastname,
                password: password,
                phoneNumber: phonenumber,
                image: image,
            })
            firebase.database().ref('HomeService/Pending/'+getLocalStorage).remove();
            window.alert(shopname +" has been Rejected!");
            location.replace('http://127.0.0.1:5501/html/landingPage.html');
        }
    })   
})