//input type = text selector in jquery
//we can do this process for all form elements check them using this method.


// example 1 
$(document).ready(function(){
    $(':text').focusin(function(){
        $(this).css('background-color','yellow')
    })
})

$(document).ready(function(){
    $(':text').blur(function(){
        $(this).css('background-color','white')
    })
})


// example 2 

$(document).ready(function(){
    $('textarea').focusin(function(){
        $(this).css('background-color','red')
    })
})

$(document).ready(function(){
    $('textarea').blur(function(){
        $(this).css('background-color','white')
    })
})



