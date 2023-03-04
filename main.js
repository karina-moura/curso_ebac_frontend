$(document).ready(function(){
    
   $('form').submit(function(e){
    e.preventDefault()
    const tarefa = $('#nome-tarefa').val()
    const inserirAtividade = $(`<li>${tarefa}</li>`).appendTo('ul')
    $('li').click(function(){
    $('li').css('text-decoration', 'line-through')
    $('li').css('color', 'blue')
    })
   })
    
    
})