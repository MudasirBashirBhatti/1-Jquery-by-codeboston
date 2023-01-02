$(document).ready(function(){
$('#search').keyup(function(){
    search = $(this).val();
    $('#vehicles li').removeClass('highlight');   //this will rome highlight clas if nothing is searched

    if(jQuery.trim(search)  != "")  //this line will remove extra spaces from the value to be searched.
    $("#vehicles li:contains('"+ search +"')").addClass('highlight');  //this line will add new class named highlight which contain the search value.
})

})