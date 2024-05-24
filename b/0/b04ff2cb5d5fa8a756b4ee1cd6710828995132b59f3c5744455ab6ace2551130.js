/**
 * Created by Administrator on 2019/7/1 0001.
 */
    //日期格式化
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
var now = new Date();
var clickDate = null;
var Module = Module || {};
Module.calendarArray = [];
Module.calendar = function(opt) {lick = function(inputString) {};
    this.calendar_day_link = function(inputString) {
        return inputString;
    };
    if (opt) {
        if (opt.calendar_day_click) {
            this.calendar_day_click = opt.calendar_day_click;
        }
        if (opt.calendar_day_link) {
            this.calendar_day_link = opt.calendar_day_link;
        }
    }
    this.elmId = "";
    this.calendarId = Module.calendarArray.length;
    Module.calendarArray[this.calendarId] = this;
};
Module.calendar.prototype = {
    L_gCalendarPrevMonthAlt_text: "上个月",
    L_gCalendarNextMonthAlt_text: "下个月",
    L_calendarDayNames_text: ["日", "一", "二", "三", "四", "五", "六"],
    dCalendarStartDay: 1,
    calendarTitleDateFormat: "yyyy年 mm月",
    formatCalendarTitleDate: function(strMonth, strYear) {
        var format = "yyyy-mm";
        if (typeof(this.calendarTitleDateFormat) != "undefined") {
            format = this.calendarTitleDateFormat;
        }
        format = format.replace("mm", strMonth);
        format = format.replace("yyyy", strYear);
        return format;
    },
    showCalendar: function(targetId, dMonth, dYear, dDay) {
        this.elmId = targetId;
        if (dMonth < 0) {
            dMonth = 11;
            dYear--;
        }
        if (dMonth > 11) {
            dMonth = 0;
            dYear++;
        }
        var dNow = new Date();
        if (dDay == 90 && dMonth == dNow.getMonth() && dYear == dNow.getYear()) {
            dDay = dNow.getDate();
        }
        var dCurFD = new Date(dYear, dMonth, 1);
        var dGivenDate = new Date(dYear, dMonth, dDay);
        var dCurrentMonthFirstDay = dCurFD.getDay();
        var dCurrentViewDate = new Date(dCurFD);
        var weekMilliseconds = 604800000;
        var tmpStartDay = this.dCalendarStartDay % 7;
        var iDays = tmpStartDay - dCurrentMonthFirstDay;
        if (iDays > 0) {
            iDays -= 7;
        }
        var oBuf = '<div class="calendar_body">';
        oBuf += '<div class="calendar_top">';
        oBuf += '<a href="" onclick="Module.calendarArray[' + this.calendarId + '].showCalendar(\'' + targetId + "'," + (dMonth - 1) + ',' + dYear + ',' + clickDate + '); return false;"';
        oBuf += 'class="nr_left" title="' + this.L_gCalendarPrevMonthAlt_text + '"></a>';
        oBuf += '<div class="nr_center">' + dYear + '年' + (dMonth + 1) + '月</div>';
        oBuf += '<a href="" onclick="Module.calendarArray[' + this.calendarId + '].showCalendar(\'' + targetId + "'," + (dMonth + 1) + ',' + dYear + ',' + clickDate + '); return false;"';
        oBuf += 'class="nr_right" title="' + this.L_gCalendarNextMonthAlt_text + '"></a>';
        oBuf += '</div><table class="tab_1"  border="0" cellpadding="0" cellspacing="0">';
        oBuf += '<tr>';
        for (var e = 0; e < 7; e++) {
            tmpStartDay = tmpStartDay % 7;
            if (tmpStartDay == 6) {
                oBuf += '<td class="td_1 td_r">' + this.L_calendarDayNames_text[tmpStartDay] + '</td>';
            } else {
                oBuf += '<td class="td_1">' + this.L_calendarDayNames_text[tmpStartDay] + '</td>';
            }
            tmpStartDay++;
        }
        oBuf +="</tr>"
        var nextMonthFirstDay = new Date(dYear, dMonth + 1, 1);
        var IsNextMonthFirstDaySunday = nextMonthFirstDay.getDay() == 0;
        for (var iRows = 0; iRows < 6; iRows++) {
            dCurrentMonthDate = new Date(dCurFD.getFullYear(), dCurFD.getMonth(), dCurFD.getDate() + iDays);
            if (iRows == 5 && dCurrentMonthDate.getMonth() > dCurFD.getMonth()) continue;
            if (iRows == 5 && IsNextMonthFirstDaySunday) continue;
            oBuf += '<tr>';
            for (var iCols = 0; iCols < 7; iCols++) {
                dCurrentViewDate = new Date(dCurFD.getFullYear(), dCurFD.getMonth(), dCurFD.getDate() + iDays);
                dCurrentViewDateString = "" + dCurrentViewDate.getFullYear() + '-' + (dCurrentViewDate.getMonth() + 1) + '-' + dCurrentViewDate.getDate();
                if( (parseInt(dCurFD.getFullYear()))== parseInt(now.Format('yyyy')) &&  (parseInt(dCurFD.getMonth())+1) == parseInt(now.Format('M')) && dCurrentViewDate.getMonth() == dMonth && new Date().getDate() == dCurrentViewDate.getDate()){//当天日期
                    oBuf += '<td class="td_cur" onclick="Module.calendarArray[' + this.calendarId + '].calendar_day_click(\'' + dCurrentViewDateString + '\'); return false;"><a href!="#">' + dCurrentViewDate.getDate() + '</a></td>';
                }else if (dCurrentViewDate.getMonth() < dMonth || iDays < 0) {//上一个月剩余日期
                    oBuf += '<td class="otherday" onclick="Module.calendarArray[' + this.calendarId + '].calendar_day_click(\'' + dCurrentViewDateString + '\'); return false;"><a href!="#">' + dCurrentViewDate.getDate() + '</a></td>';
                }else if (dCurrentViewDate.getMonth() > dMonth || iDays < 0) {//下一个月开始几天日期
                    oBuf += '<td class="otherday nextotherday" onclick="Module.calendarArray[' + this.calendarId + '].calendar_day_click(\'' + dCurrentViewDateString + '\'); return false;"><a href!="#">' + dCurrentViewDate.getDate() + '</a></td>';
                } else {//当月剩余日期
                    oBuf += '<td onclick="Module.calendarArray[' + this.calendarId + '].calendar_day_click(\'' + dCurrentViewDateString + '\'); return false;"><a href!="#">' + dCurrentViewDate.getDate() + '</a></td>';
                };
          
                iDays++;
 
            };
            oBuf +="</tr>"
        };
        oBuf += '</table></div>';
        // document.getElementById(targetId).innerHTML = oBuf
    },
    killMe: function() {
        Module.calendarArray[this.calendarId] = null
    }
};

//点击左右箭头定位高亮
function dwgl(obj){
    var objBox=$(obj);
    //移除所有的高亮
    objBox.find(".tab_1 tr td").removeClass("td_cur");
    var nma=objBox.find(".nr_center").html();

    var arr1=nma.split(/年|月/g);
    var oi=arr1[1];
    Number(oi)<10?oi='0'+oi:null;

    //如果标题日期和日历日期月份相同
    if((arr1[0]+oi)==now.Format('yyyyMM')){
        var sn=objBox.find(".tab_1 tr td").length;
        var sd;
        for(var i=7;i<sn;i++){
            for(var j=7;j<=i;j++){
                sd=objBox.find(".tab_1 tr td").eq(j).attr("onclick");
                var arr=sd.split(/'|-/g);
                var mm1=arr[2];
                var mm2=arr[3];
                Number(mm2)<10?mm2='0'+mm2:null;
                Number(mm1)<10?mm1='0'+mm1:null;
                var bvn=arr[1]+mm1+mm2;
                var  mns=now.Format('dd');//日
                var  mnsbb=now.Format('MM');//月
                if(bvn==now.Format('yyyyMMdd')){
                    objBox.find(".tab_1 tr td").eq(j).addClass("td_cur");
                }
            }
        }

    }else{
        o右切换是获取高亮
$(".nr_right").click(function(){
    dwgl("#calendarBox");
    dwgl("#calendarBox02");
});
$(".nr_left").click(function(){
    dwgl("#calendarBox");
    dwgl("#calendarBox02");
});
var oneCalendar = new Module.calendar();
(function(){
    var now=new Date();
    var c=new Module.calendar();
    c.calendar_day_click=function(sIn){
        var str = "";
        var year = sIn.substring(0, 4);
        var mon = sIn.substring(sIn.indexOf("-") + 1, sIn.lastIndexOf("-"));
        var day = sIn.substring(sIn.lastIndexOf("-") + 1);
        clickDate = day;
        if(mon < 10) mon = "0" + mon;
        if(day < 10) day = "0" + day;
        var pre_month = "";
        if (now.getMonth()+1  < 10) {
            pre_month = "0";
        }
        var pre_day = "";
        if (now.getDate()  < 10) {
            pre_day = "0";
        }
        var time = new Date(year, mon-1, day, 0, 0, 0);
        var start = new Date(2007, 11, 30, 0, 0, 0);
        /*if((time < now) && (time > start)){
         var time_1 = year + mon + day;
         if(time_1<20100506){
         str = "http://news.cctv.com/program/C20697/" + year + mon + day + ".shtml";//这里的地址使用他之前的地址域名
         window.open(str);
         }
         if(time_1>=20100506&&time_1<20110329){
         str = "http://news.cntv.cn/program/C20697/" + year + mon + day + ".shtml";//这里的地址使用他之前的地址域名
         window.open(str);
         }
         if(time_1>=20110329&&time_1<20160205){
         str = "http://cctv.cntv.cn/lm/wanjianxinwen/" + year + mon + day + ".shtml";//这里的地址使用他之前的地址域名
         window.open(str);
         }
         if(time_1>=20160205&&time_1<20160703){
         str = "http://tv.cctv.com/lm/wjxw/" + year + mon + day + ".shtml";//这里的地址使用新地址域名例如
         window.open(str);
         }
         if(time_1>=20160703){
         var time2=ne   if(now<time2){
         } else {
         str="http://tv.cctv.com/lm/wjxw/day/" + year + mon + day + ".shtml";
         conten1(str,year,mon,day);
         }
         }
         }
         else{
         alert("节目尚未播出，暂时无法查看。");
         }*/
    };
    c.calendar_day_link=function(sIn){
        return sIn;
    };
    c.showCalendar("calendarBox", now.getMonth(), now.getFullYear(), now.getDate());
    c.showCalendar("calendarBox02", now.getMonth(), now.getFullYear(), now.getDate());
})();
