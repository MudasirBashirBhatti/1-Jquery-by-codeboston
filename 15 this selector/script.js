// $(document).ready(function(){
//     $('#btn').click(function(){
//         $('#btn').attr('value','Please wait...')
//     });
// });


//we can use this keyword to select the current button which is clicked
$(document).ready(function(){
    $('.btn').click(function(){
        $(this).attr('value','submited')
    })
})