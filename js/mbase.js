 /*nav组件*/


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