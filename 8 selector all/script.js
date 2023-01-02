//this code will provide us the length of all elements on the page.
var count = $('*').length;
alert("There are " + count + " elements on page");


//this code will provide us the length of all elements only inside 'area' div
var x = $('#area').find('*').length;
alert ("There are " + x + " elements in div whose id is area");



//this code will provide us the length of p elements only inside 'area' div
var x = $('#area').find('p').length;
alert ("There are " + x + " elements in div whose id is area");