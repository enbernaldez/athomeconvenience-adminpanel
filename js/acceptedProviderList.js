var databases = firebase.database().ref().child('HomeService/Accepted/').orderByChild("Type").equalTo("provider");
    databases.once('value', function(snapshot){
        if(snapshot.exists()){
            var content1s = '';
            snapshot.forEach(function(data){
                var shopname = data.val().ShopName;
                var address = data.val().address;
                var contact = data.val().phoneNumber;
                var category = data.val().Category;

                
                content1s += '<tr class="border-b dark:border-neutral-500">';
                content1s += '<class="hidden whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">' + category +'</td>';
                content1s += '<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">' + shopname + '</td>';
                content1s += '<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">' + address + '</td>';
                content1s += '<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">' + contact + '</td>';
                content1s += '<td class="whitespace-nowrap px-6 py-4"><button id="viewBtn" class="text-xs px-5 bg-blue-500 hover:bg-blue-400 text-white py-1 rounded-full" data-sheet="'+ contact +'">VIEW</button></td>';
                content1s += '</tr>';
            });    
                $('#tableListAccepted').append(content1s);
        }
    });
    $('#tableListAccepted').on('click', '#viewBtn', function(){
        var acceptedSelected = $(this).data('sheet');
        console.log(acceptedSelected);
        localStorage.setItem("userNumber", acceptedSelected);
        location.replace('http://127.0.0.1:5501/html/acceptedPage.html');
    })

    document.getElementById('acceptedListCustomerBtn').addEventListener('click', function(){
        location.replace('http://127.0.0.1:5501/html/customerList.html');
    })