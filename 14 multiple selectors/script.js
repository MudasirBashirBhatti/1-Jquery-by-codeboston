//we can add as many selectors as we need and the one click function will be applied to all.
$(document).ready(function(){
    $('#btn, #para').click(function(){
        alert('Something is clicked')
    });
});