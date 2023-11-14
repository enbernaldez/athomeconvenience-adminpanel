// let viewBtn;
// function Ready(){
//     viewBtn = document.getElementById('viewBtn');
// }

// document.getElementById('viewBtn').addEventListener('click', function(){
//     window.open('http://127.0.0.1:5500/html/providerPage.html');
// })

// $('#tableList').on('click','#viewBtn', function(){
    
// })



document.getElementById('logoutBtn').addEventListener('click', function(){
    location.replace('http://127.0.0.1:5501/html/adminLogin.html');
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
document.getElementById('landingPageCustomerBtn').addEventListener('click', function(){
    location.replace('http://127.0.0.1:5501/html/customerList.html');
})