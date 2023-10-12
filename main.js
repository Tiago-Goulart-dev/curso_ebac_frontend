$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`
            <p class="titulo">${novaTarefa}</p>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(750);
        $('#nova-tarefa').val('');
    })
    $('ul').on('click','li',function(){
            $(this).css('text-decoration', 'line-through')
    })
})