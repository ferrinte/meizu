	/*nav部分组件*/
  Vue.component('m-nav', {

     template:`
        <nav class="clear" :style="style.nav">
          <div class="w">
            <ul :style="style.topLeft">
              <li v-for="(item,index) in topLeft" :style="style.topLi"><a :href="hrefLeft[index]" v-text="item" :style="style.topA" @mouseover="hoverEnter" @mouseout="hoverLeave"></a></li>
            </ul>
            <ul :style="style.topRight">
              <li v-for="(item,index) in topRight" :style="style.topLi"><a href="" v-text="item"  :href="hrefLeft[index]" :style="style.topA" @mouseover="hoverEnter" @mouseout="hoverLeave"></a></li>
            </ul>
          </div>  
        </nav>

     `,
     data(){
      return{
        topLeft:['魅族官网','魅族商城','Flyme','专卖店','社区','服务'],
        topRight:['我的收藏','我的订单','登录','注册'],
        hrefLeft:['meizu.html','../index.html','flyme.html','retail.html','care.html','bbs.html'],
        hrefRight:['meizu.html','../index.html','flyme.html','retail.html'],
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
         <div :style="logo"><a href="index.html"></a></div>    
         <ul style="float: left;">
           <li  style="float: left; margin: 0 15px;" v-for= "(item,index) in headList"><a :href="listHref[index]" v-text="item" :style="link" @mouseover="hoverEnter" @mouseout="hoverLeave"></a></li>
         </ul>
        </div>
       </header>  
    `,
    data(){
      return {
        headList:['PRO手机','魅蓝手机','MX手机','精选配件','智能硬件'],
        listHref:['index.html','index.html','index.html','index.html','index.html'],
        logo:{
           float: 'left',
           cursor: 'pointer',
           background:'url(../images/meizu-icon.png)',
           width: '200px',
           height: '78px',
           marginLeft:'-20px',
           marginRight: '50px'
        },
        link:{
           lineHeight: '80px',
           fontSize: '14px',
           color: '#333',
           transition: 'color .2s ease-in-out'
        }
      }
    },
    methods:{
      hoverEnter:function(ev){
        ev.target.style.color = "#00c3f5";
      },
      hoverLeave:function(ev){
        ev.target.style.color = "#666";
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