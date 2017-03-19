	/*nav部分组件*/
  Vue.component('m-nav', {

     template:`
        <nav class="clear" :style="style.nav">
          <div class="w">
            <ul :style="style.topLeft">
              <li v-for="(item,index) in topLeft" :style="style.topLi"><a :href="hrefLeft[index]" v-text="item" :style="style.topA" @mouseover="hoverEnter" @mouseout="hoverLeave"></a></li>
            </ul>
            <ul :style="style.topRight">
              <li v-for="(item,index) in topRight" :style="style.topLi"><a href="" v-text="item"  :href="hrefRight[index]" :style="style.topA" @mouseover="hoverEnter" @mouseout="hoverLeave"></a></li>
            </ul>
          </div>  
        </nav>
     `,
     data(){
      return{
        topLeft:['魅族官网','魅族商城','Flyme','专卖店','社区','服务'],
        topRight:['我的收藏','我的订单','登录','注册'],
        hrefLeft:['../meizu.html','../index.html','flyme.html','retail.html','care.html','after_ser.html'],
        hrefRight:['login.html','login.html','login.html','login.html'],
        style:{
          nav:{backgroundColor:'#fafafc',},
          topLeft:{float: 'left'},
          topRight:{float: 'right'},
          topLi:{float: 'left',marginRight:'40px'},
          topA:{
                fontSize:'12px',
                color: '#666',
                lineHeight: '40px',
                textAlign: 'left',
                transition: 'color .2s ease-in-out'
          }
        },
      }
     },
     methods:{
      hoverEnter:function(ev){
        //alert(ev.target.tagName);
        ev.target.style.color = "#00c3f5";
      },
      hoverLeave:function(ev){
        ev.target.style.color = "#666";
      }
     }
  });

/*header部分组件*/
  Vue.component('m-header',{
    template:`
  <header class="clear">
   <div class="w header">
    <div class="head-logo"><a href="index.html"></a></div>    
    <ul class="head-list"  @mouseover ="show" @mouseout ="hide">
      <li  class="head-link" v-for= "(item,i) in head.list" :id="i"><a :href="head.href[i]" v-text="item" :id="i"></a></li>
    </ul>
   </div>
   <div class="mobile" @mouseover ="selc" @mouseout ="hide">
     <ul class="head-mobile" v-for="(value,key,index) in head.mobile" :id="index">
      <li v-for="(item,i) in value" >
        <a :href="value[i][1]" @mouseover="opac" @mouseout="opvc">
          <img :src="value[i][0]">
          <p class="mobile-name"  v-text="value[i][2]"></p>
          <p class="mobile-price" v-text="value[i][3]"></p>
        </a>
      </li>
    </ul>
  </div> 
  </header>  
    `,
    data(){
      return {
        head:{
          list:['PRO手机','魅蓝手机','MX手机','精选配件','智能硬件'],
          href:['index.html','index.html','index.html','index.html','index.html'],
             mobile:{
                pro:[
                ['../images/mobile/pro01.png','../index.html','Pro6plus','￥2699'],
                ['../images/mobile/pro02.png','../index.html','Pro6s','￥2999'],
                ['../images/mobile/pro03.png','../index.html','mx6','￥2299']],
             meilan:[
                ['../images/mobile/note01.png','../index.html','魅蓝5','￥799起'],
                ['../images/mobile/note02.png','../index.html','魅蓝Note5','￥999起'],
                ['../images/mobile/note03.png','../index.html','魅蓝X','￥1999起'],
                ['../images/mobile/note04.png','../index.html','魅蓝5','￥788起'],
                ['../images/mobile/note05.png','../index.html','魅蓝Note3','￥799起'],
                ['../images/mobile/note06.png','../index.html','魅蓝3s','￥699起'],
                ['../images/mobile/note07.png','../index.html','魅蓝3','￥599']],
                mx:[
                ['../images/mobile/mx01.png','index.html','魅族MX6','￥1699起']],
  
                affix:[
                ['../images/mobile/affix01.png','../index.html','魅族H50耳机','￥399'],
                ['../images/mobile/affix02.png','../index.html','先锋耳机','￥79'],
                ['../images/mobile/affix03.png','../index.html','铁三角','￥488'],
                ['../images/mobile/affix04.png','../index.html','森海塞尔','￥688'],
                ['../images/mobile/affix05.png','../index.html','房图麦克风','￥268'],
                ['../images/mobile/affix06.png','../index.html','飞骜X1二代','￥158'],],
                auto:[
                ['../images/mobile/ying01.png','../index.html','航嘉小优usb','￥78'],
                ['../images/mobile/ying02.png','../index.html','乐心体重秤','￥169'],
                ['../images/mobile/ying03.png','../index.html','魅族手环','￥229'],
                ['../images/mobile/ying04.png','../index.html','乐乐心率手环','￥169'],
                ['../images/mobile/ying05.png','../index.html','暴风魔镜S1','￥179'],
                ['../images/mobile/ying06.png','../index.html','新款游戏手柄','￥99'],
                ['../images/mobile/ying07.png','../index.html','行车记录仪','￥339'],
                ['../images/mobile/ying08.png','../index.html','智能手环','￥299'],]
             },
        }
     }
   },
    methods:{
      show:function(ev){
        var mob = document.querySelector('.mobile');
        var mobile = document.querySelectorAll('.head-mobile');
        
        mob.style.height = "150px";
        mob.style.opacity = "1";
        for(var i=0;i<mobile.length;i++){
          mobile[i].style.opacity= "0";
          mobile[i].style.zIndex= "1000";
          if(ev.target.id == mobile[i].id){
            mobile[i].style.opacity= "1";
            mobile[i].style.zIndex= "2000";
          }
        }
      },
      selc:function(ev){
        var mob = document.querySelector('.mobile');
        mob.style.height = "150px";
        mob.style.opacity = "1";
      },
      hide:function(ev){
        var mob = document.querySelector('.mobile');
        mob.style.height = "0";
        mob.style.opacity = "0";
      },
      opac:function(ev){
        var mob = document.querySelector('.mobile');
        var img = mob.querySelectorAll('img');
        if(ev.target.tagName.toLowerCase() === 'img'){
          for(var i=0;i<img.length;i++){
            img[i].style.opacity = '0.7';
            img[i].parentNode.style.opacity = '0.7';
          }
          ev.target.style.opacity = '1';
          ev.target.parentNode.style.opacity = '1';
        }
      },
      opvc:function(){
        var mob = document.querySelector('.mobile');
        var img = mob.querySelectorAll('img');
          for(var i=0;i<img.length;i++){
            img[i].style.opacity = '1';
            img[i].parentNode.style.opacity = '1';
        }
      }
    }
  });

/*footer部分组件*/
  Vue.component('m-footer',{
     template:`
       <footer style="background-color: #fafafc;">
        <div style="margin-top: 10px;"><img src="../images/footer-service.png"></div>
         <div class="w">
          <div class="footer-message clear" style="width: 100%;padding: 20px 0;" >
           <ul :style="footerTitle">帮助说明
             <li :style="footerList" v-for="(item,index) in help" ><a href="helpHref[index]"      v-text="item"></a></li>
           </ul>
           <ul :style="footerTitle">Flyme
             <li :style="footerList" v-for="(item,index) in flyme" ><a href="flymeHref[index]"      v-text="item"></a></li>
           </ul>
           <ul :style="footerTitle">关于我们
             <li :style="footerList" v-for="(item,index) in about" ><a href="aboutHref[index]"      v-text="item"></a></li>
           </ul> 
           <ul :style="footerTitle">关注我们
             <li :style="footerList" v-for="(item,index) in attention" ><a href="attentionHref[index]"      v-text="item"></a></li>
           </ul>   
           <ul :style="footerTitle">
             <li :style="telHeader">24小时全国服务热线</li>
             <li :style="telNum">400-788-3333</li>
             <li :style="telBtn">24小时在线客服</li>
           </ul>           
          </div>
           <p :style="footerLaw">{{law}}</p>
       </footer>  
     `,
     data(){
      return{
        help:['支付方式','配送说明','售后服务','付款帮助'],
        flyme:['开放平台','固件下载','软件商店','查找手机'],
        about:['关于魅族','加入我们','练习我们','法律声明'],
        attention:['支付方式','配送说明','售后服务','付款帮助'],
        helpHref:['meizu.html','../index.html','flyme.html','retail.html'],
        flymeHref:['meizu.html','../index.html','flyme.html','retail.html'],
        aboutHref:['meizu.html','../index.html','flyme.html','retail.html'],
        attentionHref:['meizu.html','../index.html','flyme.html','retail.html'],
        law:'©2017 Meizu Telecom Equipment Co., Ltd. All rights reserved. 备案号：粤ICP备13003602号-2 经营许可证编号：粤B2-20130198 营业执照 ',
        footerTitle:{
            borderTop: '1px solid #eee',
            paddingTop:'20px',
            float: 'left',
            width: '20%',
            textAlign: 'center',
            color:'#333',
            fontSize:'15px',
            lineHeight:'30px'
        },
        footerList:{
            lineHeight: '26px',
            fontSize: '12px'
        },
        telHeader:{
            color: '#666',
            fontSize: '14px',
            marginBottom: '10px'
        },
        telNum:{
            color: 'var(--cr)',
            fontSize: '24px'
        },
        telBtn:{
            color: '#fff',
            fontSize: '14px',
            width: '150px',
            borderRadius: '5px',
            padding: '6px 0',
            marginTop: '14px',
            marginLeft: '46px',
            backgroundColor: 'var(--cr)'
        },
        footerLaw:{
            borderTop: '1px solid #ddd',
            height: '100px',
            backgroundColor: '#fafafc',
            lineHeight: '100px',
            marginTop: '20px',
            fontSize: '12px',
            textAlign: 'center',
            color: '#777' 
        }
     }
   }
  });