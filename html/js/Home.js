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

   ajaxs('../../php/code/index.php?select_text=homepage&select_text2=homepage_id=\"1\"',function(obj) {
   		lunbo(obj);
 
   		kehu(obj);
   });
   ajaxs('../../php/code/index.php?select_text=caseName&select_text2=case_choose=\"1\"',function(obj) {
   		case_list(obj);
   });
  //轮播图js
 function lunbo(obj) {
	  
	  		var zongkuang = $("<div></div>");
	  		zongkuang.attr("id","kinMaxShow");
	  		zongkuang.appendTo("#lunbotu_kuang");

	  		var lunboimg =obj[0].homepage_luboimg;
	 		var imgarr = lunboimg.split(",");
	 		for (var i = 0; i <  imgarr.length; i++) {
	 			var divs = $("<div></div>");
	 			divs.addClass("img_kuang");
	 			divs.appendTo($("#kinMaxShow"));
	 			
	 			var imgs = $("<img />");
	 			imgs.appendTo(divs);
	 			imgs.addClass("lunbo_img")
				imgs.attr("src","../../php/img/zhuyemian/Homeimg/"+ imgarr[i]);

	 		}	
			 $(function(){
				$("#kinMaxShow").kinMaxShow({
						height:533,
						intervalTime:1.5,
						hoverPause:false,
						button:{
								showIndex:false,
								normal:{width:'14px',height:'14px',left:'950px',top:'485px',background:"url(../../php/img/zhuyemian/Homeimg/1111.png) no-repeat",marginRight:'5px',border:"0px"},
								focus:{background:"url(../../php/img/zhuyemian/Homeimg/2222.png) no-repeat",border:"none"}
							}			
					});
					
					
				
				$("#kinMaxShow2").kinMaxShow({
						height:294,
						intervalTime:3,
						button:{
								showIndex:false,
								normal:{width:'14px',height:'14px',left:'1180px',top:'246px',background:"url(../../php/img/zhuyemian/Homeimg/1111.png) no-repeat",marginRight:'5px',border:"0px"},
								focus:{background:"url(../../php/img/zhuyemian/Homeimg/2222.png) no-repeat",border:"none"}
							}			
					});
			
			});	

}
 
//创建颜色数组
	var  colorArr = ["#808E95","#F5A200","#0075C2","#00AFEC","#ED6D0F","#B01E32","#FDD000","#2E77CE","#51C4A6","#1B944B","#BC121A","#F6AB00"];
//创建一个随机的数字	
	function random(min,max) 
			{
				return parseInt(Math.random()*(max-min+1)+min);
			}
//推荐案例 部分
function case_list(obj) {
//	var titleArr = [];
//	var textArr = [];
//	var imgArr = [];
//	var imgurlArr =[];
	for (var i = 0; i< 12; i++) {
//		titleArr.push(obj[i].case_title);
//		textArr.push(obj[i].case_detail);
//		imgArr.push(obj[i].case_img);	
		var title = obj[i].case_title;
		var text = obj[i].case_detail;
		
		var img = obj[i].case_img;
		var imgurl = img.split(",")[0];
//		imgurlArr.push(linshi[0]);
//		创建li
		var lis = $("<li></li>");
		lis.appendTo("#case_list");
		lis.addClass("case_kuang");
		lis.css({
			height:270,
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
		var span = $("<h3/>");
		span.appendTo(textPic);
		span.text(title);
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
			"src" : "../../php/img/zhuyemian/anliXX_img/"+imgurl,
			"alt" : title,
		})
		picimg.css({
			width:426,
			height:270,
		})
		
//		给每一个案例框添加一个背景框
		var back = colorArr[random(0,colorArr.length-1)];
	
		lis.css("background",back);
		textPic.css("background",back);	
	}		
} 
		
//  内容:logo图于 部分客户展示   
function kehu(obj) {
	var content_logo  = obj[0].homepage_logo;
	var content_client = obj[0].homepage_client;
	var content_business = obj[0].homepage_business;
	
	var  logoImg = $("<img/>");
	 logoImg.appendTo("#box3");
	 logoImg.attr("src","../../php/img/zhuyemian/Homeimg/"+content_logo);
	 logoImg.css({
	 	width:1280,
	 	height:372,
	 })
	$("#box4kuang").html(content_client); 
	$("#box789").html(content_business);
}