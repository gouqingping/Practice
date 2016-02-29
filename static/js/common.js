function menu_click(obj){
	$('#ul_menu li').removeClass('active act');
	$(obj).addClass('active act');
}
function stop_propagation(e){
	e.stopPropagation();
}

jQuery(function(){

	var navbar = $('#bs-example-navbar-collapse-1');
		navIn = $(".navbar-inverse");

	navIn.click(function (event){
		navbar.show();//显示
		$(document).click(function(){
			navbar.hide();//影藏
		});
		event.stopPropagation();//阻止事件向上冒泡
	});

	navbar.click(function (event){
		event.stopPropagation();//阻止事件向上冒泡
	});
});

function confirm(){
	var text=document.getElementById('text');
	document.getElementById('text').innerHTML='<div class="forward-hend"><h4 style="font-weight:bold">发送消息给全体人员</h4><textarea class="font_text" type="text" placeholder="提示：不可随意发无用消息，请确保自己的职责，以及相关法律责任。" contenteditable="true""></textarea></div>';
	$('#success').show();
	$('.blackroom').show();
}

function text_hide(){
	$('#success').hide();
	$('.blackroom').hide();
}

function room() {
    $(".room").toggle();
    $(".blackroom").toggle();
}

jQuery(function(){
            
    var          dlt = "";
		       apEnd = $(".apEnd");
		     profile = $(".profile");
			  apfoRm = $(".apfoRm");
		maskingLayer = $(".tion");
		   modalShow = $(".modalShow");
		   hideapEnd = $(".hideapEnd");
		       subEd = $(".subEd");
		       vicon = '<img weight="20" height="20" src="static/images/verified.@2x.png" />';
		       uneme = $(".uneme");

		        endA = '<option selected="true" val="1">牛人工作人员</option>';
		        endB = '<option val="2">签约作家</option>';
		        endC = '<option val="3">政府认证</option>';
		        endD = '<option val="4">企业认证</option>';
		        endE = '<option val="5">媒体认证</option>';
		        endF = '<option val="6">机构团体</option>';
		        endG = '<option val="7">个人认证</option>';
		     mothEnd = endA+endB+endC+endD+endE+endF+endG;

		profile.click(function(){
			modalShow.show();
			maskingLayer.show();
			apEnd.append(mothEnd);
		});

		hideapEnd.click(function(){
			apEnd.submit();
			apEnd.html(dlt);
			modalShow.hide();
			maskingLayer.hide();
		});

		subEd.submit(function(){

		    var title = apEnd.val()

			apEnd.html(dlt);
			modalShow.hide();
			maskingLayer.hide();

		    $.ajax({
				type: "POST",
				url: "index",
				data: {'title': title},
				success: function(msg){
					uneme.append(vicon);
					console.log( "Data Saved: " + msg );
			 	}
			});

		});

		
});