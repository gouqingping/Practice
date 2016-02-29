// JavaScript Document


jQuery(function(){
	var allCheckBoxs = $('.clearfix [name="preDelCheck"]:checkbox');
		allChecked = $('.allChecked');
		boxChe = allCheckBoxs.is('checked');
		orm = $(".room");
		blc = $(".blackroom");

		allChecked.click(function(){

			allCheckBoxs.each(function() { 
			var flag = $(this).attr("checked");
				$(this).attr("checked", flag);
			}
		});

		function room() {
		    orm.toggle();
		    blc.toggle();
		}

});


/*
jQuery(function(){

		function botsort(obj){
			$(obj).append('<img src="static/images/sort_asc_icon.png" class="none img_bot"/>');
		}
	});



	jQuery(function(){

	function selectAllDels(){

		var allCheckBoxs = $('[name="preDelCheck"]');
			desc = $(".allChecked");
			selectOrUnselect=false;

		for(var i = 0; i < allCheckBoxs.length; i ++ ){
			if(allCheckBoxs[i].checked){
				selectOrUnselect=true;
				break;
			}
		}
		if (selectOrUnselect){
			_allUnchecked(allCheckBoxs);
		}
		else
		{
			_allchecked(allCheckBoxs);
		}
	}

	function _allchecked(allCheckBoxs){
		for(var i = 0; i < allCheckBoxs.length; i ++ ){
			allCheckBoxs[i].checked = true;
		}
	}

	function _allUnchecked(allCheckBoxs){
		for(var i = 0; i < allCheckBoxs.length; i ++ ){
			allCheckBoxs[i].checked = false;
		}
	}

});
*/
