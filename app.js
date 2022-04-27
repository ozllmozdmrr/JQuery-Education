$(function(){
    // $("p").children().css("color","red");
   // $("p").children(":first").hide(); // span ile oluşturmuş olduğumuz ilk çocuk nesnesini silmiş olduk. 
    //$("p").children(":last").hide(); // ikinci çocuk nesnesini sildik

    //Parent
    // $("span").parent().css("color","orange")
    //Siblings()
    // $("em").siblings().css("color","orange");

    

    $("button").click(function(){
        //$("h1").addClass("aktif");
        // $("h1").removeClass("yeni");
        $("h1").toggleClass("aktif");
    });  







});
