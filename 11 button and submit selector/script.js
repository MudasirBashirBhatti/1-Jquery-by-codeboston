//button selector in jquery
//we use button selector to select the button. We can also select the button from it id.


//(1)  ":button" will pick all the buttons on the page.
$(document).ready(function(){
    $(':button').click(function(){ 
        alert('You clicked on button = button');
    })
})



//(1) ":submit" this will select all the buttons with submit
$(document).ready(function(){
    $(':submit').click(function(){
        alert('you clicked on button=submit')
    })
})




//(2) button with attribute
    $(document).ready(function(){
        $(':button').click(function(){
            $(this).attr('value', 'Hide');  //this will only effect the button that is being clicked.
        })
    })
