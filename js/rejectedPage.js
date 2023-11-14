var getLocalStorage = localStorage.getItem("userNumber");
console.log(getLocalStorage);

firebase.database().ref('HomeService/RejectedProviders/'+getLocalStorage).on('value',function(snapshot){
    document.getElementById('titleAccepted').innerHTML = "Provider Page (" +snapshot.val().ShopName +")"; 
    document.getElementById('providerName').innerHTML = snapshot.val().ShopName;

    document.getElementById('shopName').innerHTML = snapshot.val().ShopName;
    document.getElementById('contact').innerHTML = snapshot.val().phoneNumber;
    document.getElementById('location').innerHTML = snapshot.val().address;

    document.getElementById('firstname').innerHTML = snapshot.val().Firstname;
    document.getElementById('lastname').innerHTML = snapshot.val().lastName;
    document.getElementById('contactnumber').innerHTML = snapshot.val().phoneNumber;
    document.getElementById('address').innerHTML = snapshot.val().address;
    document.getElementById('emailaddress').innerHTML = snapshot.val().emailAddress;
})
firebase.database().ref('HomeService/RejectedProviders/'+getLocalStorage).on('value',function(snapshot){
    const base64_response = snapshot.val().image;
    document.getElementById('TESTINGWATERS').src = "data:image/png;base64,"+base64_response;
})


document.getElementById('backArrowRejected').addEventListener('click', function(){
    location.replace('http://127.0.0.1:5501/html/rejectedList.html');
})
document.getElementById('rejected-service-btn').addEventListener('click', function(){
    location.replace('http://127.0.0.1:5501/html/landingPage.html');
})
document.getElementById('rejected-customer-btn').addEventListener('click', function(){
    location.replace('http://127.0.0.1:5501/html/customerList.html');
})
document.getElementById('pendingBtn').addEventListener('click', function(){
    location.replace('http://127.0.0.1:5501/html/landingPage.html');
})
document.getElementById('acceptedBtn').addEventListener('click', function(){
    location.replace('http://127.0.0.1:5501/html/acceptedList.html');
})
document.getElementById('rejectedBtn').addEventListener('click', function(){
    location.replace('http://127.0.0.1:5501/html/rejectedList.html');
})
document.getElementById('logoutBtn').addEventListener('click', function(){
    location.replace('http://127.0.0.1:5501/html/adminLogin.html');
})
