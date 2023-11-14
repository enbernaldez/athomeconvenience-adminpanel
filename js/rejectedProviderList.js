var database = firebase.database().ref().child('HomeService/RejectedProviders/');
database.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';
        snapshot.forEach(function(data){
            var shopname = data.val().ShopName;
            var address = data.val().address;
            var contact = data.val().phoneNumber;
            var category = data.val().Category;

            content += '<tr class="border-b dark:border-neutral-500">';
            content += '<td class="hidden whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">' + category +'</td>';
            content += '<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">' + shopname +'</td>';
            content += '<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">' + address +'</td>';
            content += '<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">' + contact +'</td>';
            content += '<td class="whitespace-nowrap px-6 py-4"><button id="viewBtn" class="text-xs px-5 bg-blue-500 hover:bg-blue-400 text-white py-1 rounded-full" data-sheet="'+ contact +'">VIEW</button></td>';
            content += '</tr>';
        });
        $('#tableListRejected').append(content);
    }
});
$('#tableListRejected').on('click', '#viewBtn', function(){
    var rejectedSelected = $(this).data('sheet');
    console.log(rejectedSelected);
    localStorage.setItem("userNumber", rejectedSelected);
    location.replace('http://127.0.0.1:5501/html/rejectedPage.html');
})

document.getElementById('rejectedListCustomerBtn').addEventListener('click', function(){
    location.replace('http://127.0.0.1:5501/html/customerList.html');
})