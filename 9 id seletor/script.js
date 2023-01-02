//id selector in jquery

//first example
var name = $('#name').val();    //the .val() is used here to get value of p element
alert(name);


//second example
var x = $('#txt').text();   //this will give us the text of this particular div whose id is txt
alert(x);



//third example
$('#click_me').click(function(){
    alert('you clicked on me')
});