$(document).ready(function(){

    $("#city_code").change(function(e){
        e.preventDefault();
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast",
            method: "GET",
            data:{
                appid: "e3fe7f697891e5be034cac12e083a03b",
                id: $(this).val()
            },
            success: function(response){
                console.log(response);
                $(".current__temp").text(response.list[0].main.temp);
                $(".current__icon").attr("src","http://openweathermap.org/img/w/"+ response.list[0].weather[0].icon +".png");
                
                var list = [3,6,9];
                for(var i = 0;i < list.length;i++){
                    var classIndex = parseInt(i+1);
                    var day1 = new Date(response.list[list[i]].dt_txt);
                    $("#day"+ classIndex +"_date").text(day1.getDate()+"/"+parseInt(day1.getMonth()+1));
                    $("#day"+ classIndex +"_temp").text(response.list[list[i]].main.temp);
                    $("#day" + classIndex +"_date").attr("src", "http://openweathermap.org/img/w/"+ response.list[list[i]].weather[0].icon +".png");
                }
                $(".widget__display").css("display","block");
            }
        });
    });



});