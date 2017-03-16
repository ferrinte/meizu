	/*store 商品详情页组件*/

  Vue.component('m-store',{
     template:`
    <div class="w">
      <section class="crumbs clear">
        <a href="store.html">首页</a>&nbsp;>&nbsp;
        <a href="javascript:;" class="crumbs-title" v-text="property.proTitle"></a>
      </section>
      <section class="row clear">  
      	<div class="preview"  v-for="(item,key,i) in preview" :class="dis[i]">
      		<div class="preview-booth clear" >
      			<a href="javascript:;" v-for="(value,index) in item"><img :src="value[0]"></a>
      		</div>
      		<ul class="preview-thumb clear">
      		 <li :class="current[index]" v-for="(value,index) in item"  @click= "preChange(now,$event)">
      		  <a href="javascript:;"><img :src="value[1]" :id="index"></a></li>
      		</ul>
      	</div>
      	<div class="property">
      		<div class="property-hd clear">
      			<h1 v-text="property.proTitle"></h1>
      			<p class="mod-info" v-text="property.proSubTitle"></p>
      		</div>
      		<div class="property-sell clear">
      			<i v-html="property.proPrice[0]"></i><span v-text="property.proPrice[1]"></span>
      		</div>
      		<div class="property-set clear">
      			<dl class="property-set-sale">
      			  <dt v-text="property.proColor.title"></dt>
      				<dd>
      					<a v-for="(value,key,index) in property.proColor.color" :id="index"  @click= "proChange" >
      					  <img :src="value" :id="index"/><span v-text="key" :id="index"></span>
      					</a>
      				</dd>
      			</dl>
      		</div>
      		<div class="property-service clear">
      			<dl class="property-service-item clear">
      				<dt v-html="property.proService.support[0]"></dt>
      				<dd >
      				  <span v-html="property.proService.support[1]"><i></i></span>
      				</dd>
      			</dl>
      			<dl class="property-service-provider clear">
      				<dt v-html="property.proService.service[0]"></dt>
      				<dd v-html="property.proService.service[1]"></dd>
      			</dl>
      			<dl></dl>
      		</div>
      		<div class="property-buy clear">
      			<dl class="property-buy-quantity">
      				<dt>数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量 :</dt>
      				<dd>
      					<div class="ipt-quantity">
      						<a href="javascript:;" title="增加">－</a>
      						<input type="text" name="" value="1">
      						<a href="javascript:;" title="减少">＋</a>
      					</div>
      					<div class="btn-assert">
      						<span href="javascript:;" class="btn-buynow">立即购买</span>
      						<span><a href="javascript:;" class="collect">收藏</a></span>
      						<span></span>
      					</div>
      				</dd>
      			</dl>
      		</div>
      	</div>
      </div>	
      </section>
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
               proSubTitle:'曼妙持久，好音感直达心灵',
               proPrice:['价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格 :','￥169.00'],
               proColor:{
               	title:'颜色分类',
               	color:{
               		深空灰:'../images/store/index1.png',
               		皓月白:'../images/store/index2.png',
               	},
               },
               proService:{
                 support:['支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持 :','顺丰包邮&nbsp;&nbsp;&nbsp;七天无理由退货'],
                 service:['服&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务 :','本商品由 魅族 负责发货并提供售后服务'],
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
      'dis':{
      	type:Array,
      	default:function(){
      		return ['pre-s01','pre-s02']
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
          //alert('msg');
         // console.log(ev.target.tagName);
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
        var p = document.querySelectorAll('.preview');
        var l = document.querySelector('.property-set-sale').children[1].children;
        console.log(l);
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
     	}
     },
	});