$(function(){

    GetDateStr = function(AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
        var y = dd.getFullYear();
        var m = dd.getMonth()+1;//获取当前月份的日期
        var d = dd.getDate();
        return y+"-"+m+"-"+d;
        }
       
        var myDate = new Date();
        var whatday = myDate.getDay(0);//获取今天星期几
        console.log(whatday);

        $('#dayname').html('星期   '+whatday)
    


    $.ajax({
        url:'https://free-api.heweather.net/s6/weather/forecast?location=shenzhen&key=4693ff5ea653469f8bb0c29638035976',
        method:'get',
        success:function(res){
            console.log(res);
            var status = res.HeWeather6[0].status;
            var now = res.HeWeather6[0].daily_forecast[0];
            var basic = res.HeWeather6[0].basic;
            var update = res.HeWeather6[0].update;
            var second = res.HeWeather6[0].daily_forecast[1];
            var third = res.HeWeather6[0].daily_forecast[2];
            if(status==='ok'){
                var cond_txt = now.cond_txt_d;
                var loc = update.loc;
                var location = basic.location;
                var tmp_max = now.tmp_max;
                var wind_dir = now.wind_dir;
                var pcpn = now.pcpn;
                var vis = now.vis;
                var sectmp=second.tmp_max;
                var thirdtmp=third.tmp_max;
                console.log(cond_txt);
                
                
                $('#weatherdesc').html(cond_txt);
                $('#locationname').html(location);
                $('#weathertemp').html(tmp_max+'°C');
                $('#day').html('updatetime:    '+loc);
                $('#wind_dir').html(wind_dir);
                $('#pcpn').html(pcpn);
                $('#vis').html(vis);
                $('#sectmp').html(sectmp+'°C');
                $('#thirdtmp').html(thirdtmp+'°C');
            }
            
        }
    })
    
})