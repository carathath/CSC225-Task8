$(document).ready(function(){

    var apiBase = 'https://jsonplaceholder.typicode.com/photos/';

    axios.get(apiBase).then(function(response){

        console.log(response.data); // Shows the length of the response
        var i = response.data.length; // Stores the length of the response
        var x = 1; // Will be used to access the items in the response individually
        $('.btn').on('click', function(){

            if(x <= i){ 
                var title = response.data[x].title;
                var url = response.data[x].url;

                $('#tasks').html('<div class="out"><img src = "' + url + '" alt = "' + title 
                + '" class="pic">' + "<p class = 'clrchg'>" + title + "</p></div>");                 
                x+=1; // Go to the next item in case the user clicks again
            }

            if(x > i){ // If someone, somehow clicks more than the size of the response
                alert('STOP! Out of pictures...Refresh page')
            }
        });
    
    });

});