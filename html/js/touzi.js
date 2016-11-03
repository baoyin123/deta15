 function ajaxs(url,hanshu) {
          var ajax = new  XMLHttpRequest();
          ajax.open('GET',url,true);
          ajax.send();
          ajax.onreadystatechange = function   () {
              if (ajax.readyState == 4 && ajax.status == 200) {
                    var str = ajax.responseText;
                    var obj = JSON.parse(str);
                   	if (hanshu) {
                   		hanshu(obj);
                   	}
              }
          }
     }
//获取需要轮播图片的数据
  ajaxs('../../php/code/index.php?select_text=caseName&select_text2=case_lunboimg=\"tz\"',function(obj) {
   		lunbo(obj);
   });
  ajaxs('../../php/code/index.php?select_text=caseName&select_text2=case_line=\"tz\"',function(obj) {
   		case_list(obj);
   });
    // 获取部分客户的文本信息
ajaxs('../../php/code/index.php?select_text=homepage&select_text2=homepage_id=\"1\"',function(obj) {
   		kehu(obj);
   });  
   //轮播图
  
   
   function lunbo(obj) {
	  		
	  		var zongkuang = $("<div></div>");
	  		zongkuang.attr("id","kinMaxShow");
	  		zongkuang.appendTo("#lunbotu_kuang");
		
			var  imgarr = [];
	  		for (var j = 0; j< obj.length; j++) {
	  			imgarr.push(obj[j].case_img.split(",")[0]);
	  		}
	  		
	  	
	 		for (var i = 0; i <  imgarr.length; i++) {
	 			var divs = $("<div></div>");
	 			divs.addClass("img_kuang");
	 			divs.appendTo($("#kinMaxShow"));
	 			
	 			var imgs = $("<img />");
	 			
	 			imgs.appendTo(divs);
	 			imgs.addClass("lunbo_img");
				imgs.attr("src","../../php/img/zhuyemian/anliXX_img/"+ imgarr[i]);

	 		}	
			lunbojs(zongkuang,{
				height:294,
				intervalTime:3,
			},{
				left:"1180px",
				top:"246px",
			});

}
   
//创建颜色数组
	var  colorArr = ["#808E95","#F5A200","#0075C2","#00AFEC","#ED6D0F","#B01E32","#FDD000","#2E77CE","#51C4A6","#1B944B","#BC121A","#F6AB00"];
//创建一个随机的数字	
	function random(min,max) 
			{
				return parseInt(Math.random()*(max-min+1)+min);
			}
//推荐案例
 var jilu = 4;
function case_list(obj) {
	for (var i = 0; i< obj.length; i++) {
//		titleArr.push(obj[i].case_title);
//		textArr.push(obj[i].case_detail);
//		imgArr.push(obj[i].case_img);	
//		var title = obj[i].case_title;
		var text = obj[i].case_detail;
		var imgurl = obj[i].xiaobiaotou_img;
//		var imgurl = img.split(",")[0];
//		imgurlArr.push(linshi[0]);
//		创建li
		var lis = $("<li></li>");
		lis.appendTo("#case_list");
		lis.addClass("case_kuang");
		if (i >= jilu) {
			lis.css("display","none");
		}
		lis.css({
			height:391,
			overflow:"hidden",
		})

//		a标签
		var lianjie = $("<a></a>");
		lianjie.appendTo(lis);
		lianjie.addClass("link a"+(i+1));
		lianjie.attr("href","###");
		
//		创建个div和

		var divpic = $("<div></div>");
		divpic.appendTo(lianjie);
		divpic.addClass("pic");
//		创建divpic 的子标签
		var textPic = $("<div></div>");
		textPic.addClass("textPic");
		textPic.appendTo(divpic);

//		在textPic里面添加内容
//		var span = $("<h3/>");
//		span.appendTo(textPic);
//		span.text(title);
		var strong = $("<strong/>");
		strong.appendTo(textPic);
		strong.text(text);
		
//		创建divpic 的子标签
		var imgkuang = $("<div></div>");
		imgkuang.appendTo(divpic);
		imgkuang.addClass("picimg_kuang");
//		创建的子标签
		var picimg = $("<img/>");
		picimg.appendTo(imgkuang);
		picimg.attr({
			"src" : "../../php/img/zhuyemian/anlixiangmu/hangyefeilei/"+imgurl,
		})
		picimg.css({
			width:"100%",
			height:"100%",
		})
		
//		给每一个案例框添加一个背景框
		var back = colorArr[random(0,colorArr.length-1)];
	
//		lis.css("background",back);
		textPic.css("background",back);	
	}	
	
	
} 
function tianjia() {
	var likuang  = $(".case_kuang");
	var leijia = 0;
	
	for (var i = jilu; i < likuang.length; i++) {
		
		if (leijia == 4) {
			jilu+=leijia;
			break;
		}
		leijia++;
		console.log(likuang[i])
		$(likuang[i]).css("display","block");
	}
}
// 部分客户展示   
function kehu(obj) {
	var content_client = obj[0].homepage_client;
	$("#box4kuang").html(content_client); 
	
}