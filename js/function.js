$("button[name='checkButton']").click(function(){
    let like = $(this).children().children("[name='like']")
    let dislike = $(this).children().children("[name='dislike']")
    let none = $(this).children().children("[name='none']")

    if ($(this).attr("value") == "none"){
        like.show()
        dislike.hide()
        none.hide()
        $(this).attr("value", "like")

    } else if ($(this).attr("value") == "like"){
        like.hide()
        dislike.show()
        none.hide()
        $(this).attr("value", "dislike")

    } else{
        like.hide()
        dislike.hide()
        none.show()
        $(this).attr("value", "none")
    }
})