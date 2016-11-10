window.onload=function(){


//topnav下拉菜单开始
var topnav=$(".topnav-right")[0];
var yiji=$(".yiji");
var erji=$(".erji");
var yijia=$(".yijia");
for (var i=0;i<yiji.length;i++) {
		yiji[i].index=i;
		hover(yiji[i],function(){
			yiji[this.index].style.background="#fff";
			erji[this.index].style.display="block";
			yijia[this.index].style.color="#C40000";
			yijia[3].style.color="#999";
		},function(){
			yiji[this.index].style.background="";
			erji[this.index].style.display="none";
			yijia[this.index].style.color="#999";
		});
	}
//topnav下拉菜单结束
//top顶部结束


// banner图区开始
	var banner_img=document.getElementsByClassName("tu-mid")
	var tu_btn=document.getElementsByClassName("tu-btn")
	var tu_boxs=document.getElementsByClassName("tu-box")[0]
	var tu_boxcolor=["#E8E8E8","#519AFF","#FF2063","#FFF38F","#FF9000","#FF7007"]
		for (var i = 0; i < tu_btn.length; i++) {
			tu_btn[i].index=i;
			tu_btn[i].onmouseover=function(){
				for (var i = 0; i < banner_img.length; i++) {
					banner_img[i].style.zIndex="1";
					tu_btn[i].style.backgroundColor="#A2A2A2";
				};
					banner_img[this.index].style.zIndex="2";
					tu_btn[this.index].style.backgroundColor="#fff";
					tu_boxs.style.backgroundColor=tu_boxcolor[this.index]
			}
		};
var lunbo=setInterval(move,3000);//move为回调函数
	var num=0;
	function move(){
		num++;
		if (num==tu_btn.length) {
			num=0;
			}
		for (var i = 0; i < banner_img.length; i++) {
				tu_btn[i].style.backgroundColor="#555";
				banner_img[i].style.zIndex="1";
			}
			tu_btn[num].style.backgroundColor="#fff";
			banner_img[num].style.zIndex="2";
			tu_boxs.style.backgroundColor=tu_boxcolor[num];
	banner_img.onmouseover=function(){
		clearInterval(lunbo)
	}
	banner_img.onmouseout=function(){
		lunbo=setInterval(move,3000)
		}
	}
// banner图区结束

// banner图左侧导航开始
var bannerbj=document.getElementsByClassName("tu-left-one1")
var bannerwz=document.getElementsByClassName("tu-left-one")[0]
var bannercolor=["#E54077","#427DF4","#6347ED","#E54077","#6347ED","#657DEF","#FA5C5C","#F7A859","#F7A831","#427DF4","#DD2727","#427DEF","#F7A859","#3BC7B0","#DD2727","#3BC7B0"]
for (var i = 0; i < bannerbj.length; i++) {
		bannerbj[i].index=i;
		bannerbj[i].onmouseover=function(){
		bannerbj[this.index].style.backgroundColor="#fff"
	}
		bannerbj[i].onmouseout=function(){
		bannerbj[this.index].style.backgroundColor=""
		}
}

	var lists=$(".tu-left-one1");
	var nav2s=$(".tu-jsbox");
	for (var i = 0; i < nav2s.length; i++) {
		var lis=$("div",nav2s[i]);
		var height=lis.length*1;
		nav2s[i].height=height;
	};
for (var i = 0; i < lists.length; i++) {//遍历lists的长度
		lists[i].index=i;
	hover(lists[i],function(){	//鼠标经过执行
		nav2s[this.index].style.display="block";//设置下拉导航显示
		animate(nav2s[this.index],{height:nav2s[this.index].height})//动画显示下拉导航
	},function(){
		nav2s[this.index].style.display="none";
		nav2s[this.index].style.height="0";
		})

	}
// banner图左侧导航结束

// 导航栏区开始
var dhtop_wz=document.getElementsByClassName("daohang-right-1wz")
var top_btn=document.getElementsByClassName("daohang-top2")
// alert(dhtop_wz.length)
for (var i = 0; i < dhtop_wz.length; i++) {
		dhtop_wz[i].index=i;
		dhtop_wz[i].onmouseover=function(){
		top_btn[this.index].style.opacity="1"
	}
		dhtop_wz[i].onmouseout=function(){
		top_btn[this.index].style.opacity="0"
	}
}
// 导航栏区结束

//图片遮罩区开始
	var zj_three_1s=document.getElementsByClassName("zj-three-1")
	var masks=document.getElementsByClassName("mask")
	for (var i = 0; i < zj_three_1s.length; i++) {
			zj_three_1s[i].index=i;
			zj_three_1s[i].onmouseover=function(){
			masks[this.index].style.opacity="0.8"
		}
			zj_three_1s[i].onmouseout=function(){
			masks[this.index].style.opacity="0"
			}
	}
//图片遮罩区开始


//中间2区图片放大效果 开始
var huanxintu=$(".zj2-img");
  var huanxin=$(".zj2-four");
  for (var i = 0; i < huanxintu.length; i++) {
    huanxin[i].index=i;
    hover(huanxin[i],function(){
      animate(huanxintu[this.index],{width:160,height:160,marginLeft:39,marginTop:0},100)
    },function(){
      animate(huanxintu[this.index],{width:140,height:140,marginLeft:49,marginTop:10},100)
    })     
}
//中间2区结束


// 右侧边栏开始(有问题)
	var items=$(".cb1");
	var names=$(".cb-a1");
	var t;
for (var i = 0; i < items.length; i++) {
	items[i].index=i;
	hover(items[i],function(){
		var that=this;
		clearTimeout(t);
		t=setTimeout(function(){
			names[that.index].style.display="block";
			animate(names[that.index],{left:0,opacity:1},300)
	},100)
		},function(){
		clearTimeout(t);	
			animate(names[this.index],{left:-90,opacity:0.7},100,function(){
				this.style.display="none";
			})
	 	})
    }
//返回顶部
var obj=document.documentElement;
var hhtops=$(".cb1one")[0];
	hhtops.onclick=function(){
		var obj=document.body.scrollTop==0?document.documentElement:document.body;
		animate(obj,{scrollTop:0})
	}
// 右侧边栏结束




// // 顶部悬浮框和左侧导航栏开始
	var topbar=$(".topbar")[0];
	var floor=$(".cb2-bigbox")[0];
	document.documentElement.scrollTop=1;
	if (document.documentElement.scrollTop==1) {
		var scrollobj=document.documentElement;
	}else{
		var scrollobj=document.body;
		}
	var flag=true,flag2=false;
	window.onscroll=function(){
		var st=scrollobj.scrollTop;
		if (st>500) {
			flag=false;flag2=true;
			animate(topbar,{top:0})
			animate(floor,{width:36,height:333})
		}else{
			if (flag2) {
				flag=true;flag2=false;
			};
			animate(topbar,{top:-50})
			animate(floor,{width:0,height:0})
		}
	}
// 	var floorbtn=$(".cb2-two2wz");
// 	var contents=$(".cc");
// 	// alert(contents.length)
// 	for (var i = 0; i <floorbtn.length; i++) {
// 		floorbtn[i].index=i;
// 		floorbtn[i].onclick=function(){
// 			var ot=contents[this.index].offsetTop;
// 			animate(scrollobj,{scrollTop:ot})
// 		}
// 	};

// 顶部悬浮框和左侧导航栏结束

//左侧导航区
  var rightbn=$(".cb2-bigbox")[0];
  var as=getChild(rightbn);
      document.documentElement.scrollTop=1;
      if (document.documentElement.scrollTop==1) {
        var scrollobj=document.documentElement;
      }else{
        var scrollobj=document.body;
      }
      addEvent(window,"scroll",function(){//滚动到一定距离触发 导航栏显示出来
        var st=scrollobj.scrollTop;
        if (st>1100) {//距离大于800  则显示
          rightbn.style.display="block";
        }else{
          rightbn.style.display="none";
        }
      })

	var floorbtn=$(".cb2-two");//点击楼层跳转到相应的楼层
	var contents=$(".cc");
	for (var i =0; i <floorbtn.length; i++) {
		floorbtn[i].index=i;
		floorbtn[i].onclick=function(){
			var ot=contents[this.index].offsetTop;
			animate(scrollobj,{scrollTop:ot})
		}
	};


var cb2_bjcolor=["#DD2727","#F7A945","#19C8A9","#F15453","#64C333","#0AA6E8","#EA5F8D","#DD2727"]; 
   addEvent(window,"scroll",function(){//滚动到相应楼层导航栏按钮变色
      var st=scrollobj.scrollTop;
      for (var i = 0; i < contents.length; i++) {
          if(st+700>contents[i].offsetTop){
          for (var j = 0; j < contents.length; j++) {
            as[j].style.background=""
          };
          as[i].style.background=cb2_bjcolor[i];
            };
        }
   })

// //左侧边栏返回顶部
var obj=document.documentElement;
var hhtop=$(".cb2-three")[0];
	hhtop.onclick=function(){
		var obj=document.body.scrollTop==0?document.documentElement:document.body;
		animate(obj,{scrollTop:0}) //点击触发动画回到顶部
	}

//整页按需加载开始
var axjz=$(".axjz");
// console.log(axjz)
var tops=[];
var doc=getDoc();
// console.log(doc)
	var ch=doc.clientHeight;
for (var i = 0; i < axjz.length; i++) {
	tops.push(axjz[i].offsetTop);
}
	doc.scrollTop=1;
	window.onscroll=function(){
	var scrollT=doc.scrollTop;
	for (var i = 0; i < tops.length; i++) {
		if (scrollT+ch>tops[i]&&axjz[i].getAttribute("flag")!="true") {
			var imgs=$("img",axjz[i]);
			for (var j = 0;j < imgs.length; j++) {
				imgs[j].src=imgs[j].getAttribute("asrc");
			}
			axjz[i].setAttribute("flag",true)
		};
	 };
   };

//按需加载结束
}