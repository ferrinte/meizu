 /*nav组件*/
Vue.component('z-nav',{
	template:`
    <nav>
      <div class="w">
          <a href="meizu.html" class="logo"></a>

          <ul class="nav-list">
           <li v-for = "(item,index) in showBar.list" @mouseover="show" @mouseout="hide" :id ="showBar.value[index]">
              <a :id="showBar.value[index]" :href="showBar.href[index]" v-text="item" ></a>
           </li>
           <li class="login login-default" @mouseover="hoverEnter" @mouseout="hoverLeave">
             
             <ul class="float-login">
                 <li v-for="(item,index) in showBar.login.text" >
                     <a :href="showBar.login.href[index]" v-html="item" :class="showBar.login.class[index]"></a>
                 </li>
             </ul>
             <p>
           </li>
          </ul>



      </div>

      <ul class="float-mobile" v-for="(value,key,index) in hideBar.mobile" :class="key">
         <li v-for="(item,i) in value">
           <a :href="value[i][1]" :style="{backgroundImage:value[i][0]}">
             <i v-text="value[i][2]"></i>
           </a>
         </li>
      </ul>
    `,
	data(){
       return {
          showBar:{
             list:['魅族商城','魅蓝手机','魅族手机','魅族声学','智能 · 配件','服务','专卖店','Flyme','  社区'],
             href:['index.html','index.html','index.html','index.html','index.html','index.html','index.html','index.html','index.html'], 
             value:['','meilan','meizu','affix','auto','','','','',],
             event:['','','','','','','','','',],
             event2:' hoverEnter',
             login:{
                  text:['立即登录','<i>立即注册<i/>','我的购物车','我的订单','M码通道'],
                  href:['index.html','index.html','index.html','index.html','index.html'],
                  class:['login-btn','login-rig','login-item','login-item','login-item']
             }
          },
          hideBar:{
             mobile:{
                meizu:[
                ['url(../images/pro01.png)','index.html','PRO6PLUS'],
                ['url(../images/pro02.png)','index.html','PRO6S'],
                ['url(../images/pro03.png)','index.html','MX6']],
                meilan:[
                ['url(../images/note01.png)','index.html','note1',],
                ['url(../images/note02.png)','index.html','note1',],
                ['url(../images/note03.png)','index.html','note1',],
                ['url(../images/note04.png)','index.html','note1',],
                ['url(../images/note05.png)','index.html','note1',],
                ['url(../images/note06.png)','index.html','note1',],
                ['url(../images/note07.png)','index.html','note1',]],
                affix:[
                ['url(../images/affix01.png)','index.html','电源适配器'],
                ['url(../images/affix02.png)','index.html','电源适配器'],
                ['url(../images/affix03.png)','index.html','电源适配器'],
                ['url(../images/affix04.png)','index.html','电源适配器'],
                ['url(../images/affix05.png)','index.html','电源适配器'],
                ['url(../images/affix06.png)','index.html','电源适配器'],],
                auto:[
                ['url(../images/ying01.png)','index.html','智能手环'],
                ['url(../images/ying02.png)','index.html','智能手环'],
                ['url(../images/ying03.png)','index.html','智能手环'],
                ['url(../images/ying04.png)','index.html','智能手环'],
                ['url(../images/ying05.png)','index.html','智能手环'],
                ['url(../images/ying06.png)','index.html','智能手环'],
                ['url(../images/ying07.png)','index.html','智能手环'],
                ['url(../images/ying08.png)','index.html','智能手环'],]
             },
          }
       }
	},
    methods:{
        hoverEnter:function(ev){
            var floatBar = document.querySelector('.float-login');
            var headBar = document.querySelector('.login');
            floatBar.style.display = 'block';
            headBar.className = 'login login-active';
        },
        hoverLeave:function(ev){
            var floatBar = document.querySelector('.float-login');
            var headBar = document.querySelector('.login');
            console.log(typeof ev.target);
            console.log(ev.target.tagName);
            if(typeof ev.target == 'object'){
              floatBar.style.display = 'block';
              headBar.className = 'login login-active';
            }
            floatBar.style.display = 'none';
            headBar.className = 'login login-default';
        },
        show:function(ev){
            if(ev.target.tagName.toLowerCase() == 'li'|| 'a'){
                //console.log(ev.target.id);
                if(ev.target.id){
                var current = document.getElementsByClassName(ev.target.id);
                //console.log(current) ;
                current[0].style.opacity = '1';
                current[0].style.height = '160px';
                for(var i=0;i<current[0].children.length;i++){
                   current[0].children[i].style.transform = 'translate(-100px,0)';
                }
               }
            }
        },
        hide:function(ev){
            if(ev.target.tagName.toLowerCase() == 'li'|| 'a'){
                if(ev.target.id){
                var current = document.getElementsByClassName(ev.target.id);
                current[0].style.opacity = '0';
                current[0].style.height = '0';
                for(var i=0;i<current[0].children.length;i++){
                   current[0].children[i].style.transform = 'translate(0,0)';
                }
               }
            }
        },
        fadeIn:function(ev){
            console.log(ev.target);
             if(ev.target.tagName.toLowerCase() == 'ul'){
                console.log(1);
             }
        },
        fadeOut:function(ev){
            
        }
    },
    computed:{

    }
});


/*  footer组件  */
Vue.component('z-footer',{
    template:`
            <footer >
              <div class="footer-service w">
               <ul v-for ="(value,key,index) in footer.item ">
                  <h3 v-text="key"></h3>
                <li v-for = "(item,i) in value">
                   <a :href="value[i][1]" v-text="value[i][0]"></a>
                 </li>
               </ul>
               <ul class="footer-tel">
                 <li v-for ="(item,index) in footer.asociation.text" :class="footer.asociation.class[index]" v-text="item"></li>
               </ul>  
             </div>
             <div class="footer-law">
               <p v-text="footer.copyright"></p>
             </div>    
           </footer> 
    `,
    data(){
        return{
         footer:{item:{
                  魅族商城:[
                     ['魅蓝 Note5','index.html'],
                     ['PRO 6 Plus','index.html'],
                     ['魅蓝 X','index.html'],
                     ['魅蓝 5','index.html'],],
                   服务支持:[
                     ['寄送快修','index.html'],
                     ['上门快修','first.html'],
                     ['预约维修','ser-after.html'],
                     ['预约维修','hello.html'],],
                    Flyme:[                   
                     ['系统下载','index.html'],
                     ['开放平台','index.html'],
                     ['软件商店','index.html'],
                     ['查找手机','index.html'],],
                     关于我们:[
                     ['关于魅族','index.html'],
                     ['加入我们','index.html'],
                     ['联系我们','index.html'],
                     ['意见反馈','index.html'],]
                 },
                asociation:{text:['24小时全国服务热线','400-788-3333','24小时在线客服'],
                            class:['tel-header','tel-num','tel-btn'],       
               },
                copyright:'©2017 Meizu Telecom Equipment Co., Ltd. All rights reserved. 备案号：粤ICP备13003602号-2 经营许可证编号：粤B2-20130198 营业执照 ',               
               },
        }
    },
});