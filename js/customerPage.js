var getLocalStorage = localStorage.getItem("customerNumber");
console.log(getLocalStorage);

firebase.database().ref('HomeService/Accepted/'+getLocalStorage).on('value',function(snapshot){
    document.getElementById('titleTest').innerHTML = "Customer Page("+snapshot.val().Firstname+" "+snapshot.val().lastName+")";
    document.getElementById('customerName').innerHTML = snapshot.val().Firstname+" "+snapshot.val().lastName;
    document.getElementById('firstname').innerHTML = snapshot.val().Firstname;
    document.getElementById('lastname').innerHTML = snapshot.val().lastName;
    document.getElementById('phonenumber').innerHTML = snapshot.val().phoneNumber;
    document.getElementById('address').innerHTML = snapshot.val().address;
    document.getElementById('email').innerHTML = snapshot.val().emailAddress;
})

document.getElementById('backArrowCustomer').addEventListener('click', function(){
    location.replace('http://127.0.0.1:5501/html/customerList.html');
})
document.getElementById('customerButtonCustomer').addEventListener('click', function(){
    location.replace('http://127.0.0.1:5501/html/customerList.html');
})
document.getElementById('prodiverButtonCustomer').addEventListener('click', function(){
    location.replace('http://127.0.0.1:5501/html/landingPage.html');
})
