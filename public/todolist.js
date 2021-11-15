$(function(){

    let inp=$('#input')
    let btn=$('#btn')
    let list=$('#list')

    btn.click(function(){
        let data=inp.val()
        let string=""

        //list.append('<li>'+ data +'</li>')
        $.post(
            '/todos',
            { task: data },
            function (data1){
                 list.empty();
                 for(let d=0; d<data1.length ; d++){
                    string+='<li>'+ data1[d] +'</li>'
                 }
                 list.html(string)
            }
        )
    })
})