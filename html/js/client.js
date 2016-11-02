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

   ajaxs('../../php/code/index.php?select_text=client&select_text2=client_id=\"1\"',function(obj) {
   		client_content(obj);
   });
   function client_content (obj) {
   		$("#client_content").html(obj[0].client_text);
   }