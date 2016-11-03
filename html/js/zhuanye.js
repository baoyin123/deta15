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
  ajaxs('../../php/code/index.php?select_text=caseName&select_text2=case_lunboimg=\"vi\"',function(obj) {
   		lunbo(obj);
   });
// 案例展示,文本img  
  ajaxs('../../php/code/index.php?select_text=caseName&select_text2=case_specialty=\"vi\"',function(obj) {

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
	 			
	 			var imgs = $("<img/>");
	 			
	 			imgs.appendTo(divs);
	 			imgs.addClass("lunbo_img");
				imgs.attr("src","../../php/img/zhuyemian/anliXX_img/"+ imgarr[i]);
				imgs.css({
					width:"100%",
					height:"100%",
				})

	 		}	
			lunbojs(zongkuang,{
				height:294,
				intervalTime:3,
			},{
				left:"1180px",
				top:"246px",
			});

}
   

//专业案例
 var jilu = 8;
function case_list(obj) {
	for (var i = 0; i< obj.length; i++) {
		var text = obj[i].case_title;
		 obj[i].case_img;
		var imgurl = (obj[i].case_img).split(",")[0];
		
//		创建div
		var dls = $("<dl></dl>");
		dls.appendTo("#case_list");
		dls.addClass("case_kuang");
		if (i >= jilu) {
			dls.css("display","none");
		}
//		创建dt 
		var dts = $("<dt></dt>");
		dts.appendTo(dls);
		dts.css({
			"background":"url(../../php/img/zhuyemian/anliXX_img/"+imgurl+")",
			"background-size":"100%"+"100%",
		})
//		创建 dts的a标签
		
		var dts_a = $("<a></a>");
		dts_a.appendTo(dts);
		
		//创建dd
		var dds = $("<dd></dd>");
		dds.appendTo(dls);
//		创建a
		var dds_a = $("<a/>");
		dds_a.appendTo(dds);
		dds_a.text(text)
		
	}	
} 
function tianjia() {
	var likuang  = $(".case_kuang");
	var leijia = 0;
	for (var i = jilu; i < likuang.length; i++) {
		if (leijia == 8) {
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