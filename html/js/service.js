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

   ajaxs('../../php/code/index.php?select_text=service&select_text2=service_id=\"1\"',function(obj) {
   		content_html(obj)
   });
   
	function content_html(obj) {
		$("#service_content").html(obj[0].service_html);
	}