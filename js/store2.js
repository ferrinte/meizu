  /*store 商品详情页组件*/
  Vue.component('m-store',{
     template:`
    <div class="w">
      <section class="crumbs clear">
        <a href="../index.html">首页</a>&nbsp;>&nbsp;
        <a href="javascript:;" class="crumbs-title" v-text="property.proTitle"></a>
      </section>
      <section class="row clear">
       <div class="preview">
        <div class="preview-prev"  v-for="(item,key,i) in preview">
          <div class="preview-booth clear" >
            <a href="javascript:;" v-for="(value,index) in item"><img :src="value[0]"></a>
          </div>
          <ul class="preview-thumb clear">
           <li :class="current[index]" v-for="(value,index) in item"  @click= "preChange(now,$event)">
            <a href="javascript:;"><img :src="value[1]" :id="index"></a></li>
          </ul>
        </div>
       </div>   
        <div class="property">
          <div class="property-hd clear">
            <h1 v-text="property.proTitle"></h1>
            <p class="mod-info" v-text="property.proDiscrib"></p>
          </div>
          <div class="property-sell clear">
            <i>价<span style="padding: 0 12px;"></span>格 :</i><span v-text="property.proPrice"></span>
          </div>
          <div class="property-set clear">
            <dl class="property-set-version" v-if="property.proVersion">
              <dt>版<span style="padding: 0 12px;"></span>本:</dt>
              <dd><a v-for="(val,i) in property.proVersion" v-text="val" :id="i" :class="cla[i]"></a></dd>
            </dl>
            <dl class="property-set-version" v-if="property.proNet">
              <dt>网络类型:</dt>
              <dd><a v-for="(val,i) in property.proNet" :id="i" v-text="val" :class="cla[i]"></a></dd>
            </dl>
            <dl class="property-set-color" v-if="property.proColor">
              <dt>颜色分类:</dt>
              <dd>
                <a v-for="(val,key,i) in property.proColor"   :id="i"  @click= "proChange" :class="cla[i]">
                  <img :src="val" :id="i"/><span v-text="key" :id="i"></span>
                </a>
              </dd>
            </dl>
            <dl class="property-set-version" v-if="property.proRom">
              <dt>内存容量:</dt>
              <dd><a v-for="(val,i) in property.proRom"  v-text="val" :id="i" :class="cla[i]"></a></dd>
            </dl>
            <dl class="property-set-version" v-if="property.proCombo">
              <dt>套<span style="padding: 0 12px;"></span>餐:</dt>
              <dd><a v-for="(val,i) in property.proCombo"  v-text="val" :id="i"></a></dd>
            </dl>
          </div>
          <div class="property-service ">
            <dl class="property-service-item">
              <dt>支<span style="padding:0 12px;"></span>持</dt>
              <dd >
                <span v-for="(val,i) in property.proService.support">
                <i class="right">√</i>
                <span class="ser-support" v-cloak v-text="val"></span>
                </span>
              </dd>
            </dl>
            <dl class="property-service-deliver" v-if="property.proService.deliver">
              <dt>配送<span style="padding:0 6px;"></span>至</dt>
              <dd >
                <span><i></i>广东 广州市 【请选择】</span>
              </dd>
            </dl>
            <dl class="property-service-provider" >
              <dt>服<span style="padding:0 12px;"></span>务 </dt>
              <dd>本商品由 <span v-cloak>{{property.proService.service}}</span> 负责发货并提供售后服务</dd>
            </dl>
            
          </div>
          <div class="property-buy">
            <dl class="property-buy-quantity">
              <dt>数<span style="padding: 0 10px;"></span>量 :</dt>
              <dd>
                <div class="ipt-quantity">
                  <a href="javascript:;" title="减少" @click="sub" class="sub">－</a>
                  <input class="num" type="text" value="1" maxlength="1" >
                  <a href="javascript:;" title="增加" @click="add" class="add">＋</a>
                </div>
                <div class="btn-assert">
                  <a href="login.html" class="btn-buynow">立即购买</a>
                  <a href="javascript:;" class="btn-login" v-show="false">立即登录</a>
                  <a><a href="login.html" class="collect">收藏</a></a>
                  <span></span>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>  
      </section>
    </div>
     `,
     props:{
      'preview':{
        type:Object,
        default:function(){
          return{
            preone:[
              ['../images/store/black01.png','../images/store/thumb01.jpg'],
              ['../images/store/black02.png','../images/store/thumb02.jpg'],
              ['../images/store/black03.png','../images/store/thumb03.jpg'],
              ['../images/store/black04.png','../images/store/thumb04.jpg'],
            ],
            pretwo:[
              ['../images/store/white01.png','../images/store/thumb1.jpg'],
              ['../images/store/white02.png','../images/store/thumb2.jpg'],
              ['../images/store/white03.png','../images/store/thumb3.jpg'],
              ['../images/store/white04.png','../images/store/thumb4.jpg'],
            ],
          }
        }
       },
     'property':{
        type:Object,
        default:function(){
           return{
            proTitle:'魅族蓝牙小音箱',
            proDiscrib:'曼妙持久，好音感直达心灵',
            proPrice:'￥169.00',
            proVersion:['128G版','64G版'],
            proNet:['全网通公开版'],
            proRom:['64G'],
            proCombo:['官方标配',' 魅力卡套餐0元'],
            proColor:{
                深空灰:'../images/store/index1.png',
                皓月白:'../images/store/index2.png',
            },
            proService:{
              support:['顺丰包邮','七天无理由退货'],
              deliver:[],
              service:'魅族',
            },
          }
        }
      },
      'current':{
        type:Array,
        default:function(){
          return ['current','','','']
        }
      }, 
      'cla':{
        type:Array,
        default:function(){
          return ['set-active','','','','','']
        }
      }, 
    },
     data(){
      return{
        now:0,
      }
     },
     methods:{
      preChange:function(idx,ev){
          var a = document.querySelectorAll('.preview-booth')[idx].children;
          var s = document.querySelectorAll('.preview-thumb')[idx].children;
          for(var i=0;i<a.length;i++){
            a[i].style.opacity = 0;
            a[ev.target.id].style.opacity = 1;
          }
          for(var i=0;i<s.length;i++){
            s[i].className = '';
            s[ev.target.id].className = "current";
          }
      },
      proChange:function(ev){
        //console.log(ev.target.tagName);
        var p = document.querySelectorAll('.preview-prev');
        var l = document.querySelector('.property-set-color').children[1].children;
        for(var i=0;i<l.length;i++){
          //l.style.className = ''
           l[i].removeAttribute('class');
        }
        l[ev.target.id].setAttribute('class', 'sale-link-active');
        for(var i=0;i<p.length;i++){
          p[i].style.display = 'none';
          p[ev.target.id].style.display = 'block';
          this.now = ev.target.id;
        }
      },
      add:function(ev){
        var num = document.querySelector('.num');
        var sub = document.querySelector('.sub');
        sub.style.color = "#333";
        if(num.value<5){
          num.value++;
          ev.target.style.color = "#333";
        }
        if(num.value == 5){
           ev.target.style.color = "#ccc";
        }
      },
      sub:function(ev){
        var num = document.querySelector('.num');
        var add = document.querySelector('.add');
        add.style.color = "#333";
        if(num.value>1){
          num.value--;
          ev.target.style.color = "#333";
        }
        if(num.value == 1){
          ev.target.style.color = "#ccc";
        }
      }
     },
  });