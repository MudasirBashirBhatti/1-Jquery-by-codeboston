$(document).ready(function(){
    $('.evenClass').click(function(){
        $('.table tr:even').addClass('evenHighlight')
    })
    $('.oddClass').click(function(){
        $('.table tr:odd').addClass('evenHighlight')
    })
})