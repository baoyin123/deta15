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

   ajaxs('../../php/code/index.php?select_text=about&select_text2=about_id=\"1\"',function(obj) {
   		about_content(obj);
   });
   function about_content (obj) {
   		
   		$("#about_content").html(obj[0].about_text);
   }