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

   ajaxs('../../php/code/index.php?select_text=IPO&select_text2=ipo_id=\"1\"',function(obj) {
   		ipo_img(obj);
   });
   function  ipo_img(obj) 
   {
   		var ipoimg = obj[0].ipo_img;
   		var imgarr = ipoimg.split(",");
   		
   		for (var  i = 0 ;  i <imgarr.length; i++) 
   		{
   		 	var section = $("<div></div>");
   		 	section.addClass("section");
   		 	section.appendTo("#dowebok");
   		 	
   		 	var ipoimg = $("<img/>");
   		 	ipoimg.appendTo(section);
   		 	ipoimg.attr("src","../../php/img/zhuyemian/IPO/"+imgarr[i]);
   		 	ipoimg.css({
   		 		"width":"100%",
   		 		"height":"100%",
   		 	});
   		}	
   		$("#dowebok").fullpage({
   			navigation:"ture",
   			navigationColor:"#fff"
   		});
   }