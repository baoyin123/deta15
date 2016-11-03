function lunbojs(divname,objmax,objbtn){
				divname.kinMaxShow({
						height:objmax.height,
						intervalTime:objmax.intervalTime,
						hoverPause:false,
						button:{
								showIndex:false,
								normal:{width:'14px',height:'14px',left:objbtn.left,top:objbtn.top,background:"url(../../php/img/zhuyemian/Homeimg/1111.png) no-repeat",marginRight:'5px',border:"0px"},
								focus:{background:"url(../../php/img/zhuyemian/Homeimg/2222.png) no-repeat",border:"none"}
							}			
					});
					
					
//				
//				$("#kinMaxShow2").kinMaxShow({
//						height:294,
//						intervalTime:3,
//						button:{
//								showIndex:false,
//								normal:{width:'14px',height:'14px',left:'1180px',top:'246px',background:"url(../../php/img/zhuyemian/Homeimg/1111.png) no-repeat",marginRight:'5px',border:"0px"},
//								focus:{background:"url(../../php/img/zhuyemian/Homeimg/2222.png) no-repeat",border:"none"}
//							}			
//					});
			
			};	