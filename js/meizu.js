window.onload = function(){
  var nav = new Vue({
    el:'#wrap',
    data:{
      list:[
      ['魅族商城', 'index.html'],
      ['魅蓝手机', 'javascript:;'],
      ['魅族手机', 'javascript:;'],
      ['魅族声学', 'javascript:;'],
      ['智能·配件','javascript:;'],
      ['服务','template/care.html'],
      ['专卖店','template/retail.html'],
      ['Flyme','template/flyme.html'],
      ['社区','index.html'],
      ],
      images:[
      'url(./images/banner01.jpg)',
      'url(./images/banner02.jpg)',
      'url(./images/banner03.jpg)',
      'url(./images/banner04.jpg)',
      ],
      circle:['active','','',''],
      mobile:{
         meizu:[
         ['url(./images/pro01.png)','index.html','PRO6PLUS'],
         ['url(./images/pro02.png)','index.html','PRO6S'],
         ['url(./images/pro03.png)','index.html','MX6']],
         meilan:[
         ['url(./images/note01.png)','index.html','note1',],
         ['url(./images/note02.png)','index.html','note1',],
         ['url(./images/note03.png)','index.html','note1',],
         ['url(./images/note04.png)','index.html','note1',],
         ['url(./images/note05.png)','index.html','note1',],
         ['url(./images/note06.png)','index.html','note1',],
         ['url(./images/note07.png)','index.html','note1',]],
         affix:[
         ['url(./images/affix01.png)','index.html','电源适配器'],
         ['url(./images/affix02.png)','index.html','电源适配器'],
         ['url(./images/affix03.png)','index.html','电源适配器'],
         ['url(./images/affix04.png)','index.html','电源适配器'],
         ['url(./images/affix05.png)','index.html','电源适配器'],
         ['url(./images/affix06.png)','index.html','电源适配器'],],
         auto:[
         ['url(./images/ying01.png)','index.html','智能手环'],
         ['url(./images/ying02.png)','index.html','智能手环'],
         ['url(./images/ying03.png)','index.html','智能手环'],
         ['url(./images/ying04.png)','index.html','智能手环'],
         ['url(./images/ying05.png)','index.html','智能手环'],
         ['url(./images/ying06.png)','index.html','智能手环'],
         ['url(./images/ying07.png)','index.html','智能手环'],
         ['url(./images/ying08.png)','index.html','智能手环'],]
      },
      sales:['url(./images/sale01.jpg)','url(./images/sale02.jpg)','url(./images/sale03.jpg)'],
      footer:{title:['魅族商城','服务支持','Flyme','关于我们'],
              content:{
                a:['魅蓝 Note5','PRO 6 Plus','魅蓝 X','魅蓝 5'],
                b:['寄送快修','上门快修','预约维修','VIP注册'],
                c:['系统下载','开放平台','软件商店','查找手机'],
                d:['关于魅族','加入我们','联系我们','意见反馈']
              },
             }
         },
    methods:{

    }       
  });
  var banner = document.querySelector('#banner');
  var circle = document.querySelector('#circle');
  var oPic = banner.children;
  var oCir = circle.children;
  
  var iNow =0;
  var timer = null;
  var html = document.documentElement;
  var width = html.clientWidth;
  console.log(width);
    for(var i=0;i<oCir.length;i++){
      oCir[i].index = i;
      oCir[i].onmouseover = function(){
        for(var i=0;i<oPic.length;i++){
           oCir[i].className = '';
        }
        banner.style.left = -width*this.index + 'px';
        oCir[this.index].className = 'active';
      }
    }
    function autoPlay(){
         for(var i=0;i<oPic.length;i++){
           oCir[i].className ='';
         }
           banner.style.left = -width*iNow + 'px';
           oCir[iNow].className ='active';
           iNow++;
           iNow = iNow > oPic.length-1? 0 : iNow  
    }
    timer = setInterval(autoPlay,3000);
    banner.addEventListener('mouseover', change1,false);
    banner.addEventListener('mouseout', change2,false);
    function change1(){
         clearInterval(timer);
    };
    function change2(){
         timer = setInterval(autoPlay,3000);
    };
}
