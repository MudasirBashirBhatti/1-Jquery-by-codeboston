
// first check this method 
// $(window).unload(function(){    
//     console.log('You are leaving this page');
// });

//second check this method
// $(window).on('beforeunload' , function(){
//     console.log('hey you');
// });


//3rd check this method
function my(){
    //   var x = confirm('are you sure you want to leave this page')
    // if(x){
    //     return true;
    // }else{
    //     return false;
    // }
    alert('hello');
}


//4th jquery method
$('body').attr('onunload' , 'my()');

