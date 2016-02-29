// JavaScript Document
function this_month(){
	$('.this_month').show(300);
	$('.main_none').show();
	$('.month_close').show();
	$('.this_bold').css('font-weight','bold');
	$('.bot_bold').css('font-weight','100');
	$('.top_bold').css('font-weight','100');
	$('.top_month').hide(300);
	$('.bot_month').hide(300)}
function top_month(){
	$('.top_month').show(300);
	$('.main_none').show();
	$('.month_close').show();
	$('.top_bold').css('font-weight','bold');
	$('.this_bold').css('font-weight','100');
	$('.bot_bold').css('font-weight','100');
	$('.this_month').hide(300);
	$('.bot_month').hide(300)}
function bot_month(){
	$('.bot_month').show(300);
	$('.main_none').show();
	$('.month_close').show();
	$('.bot_bold').css('font-weight','bold');
	$('.this_bold').css('font-weight','100');
	$('.top_bold').css('font-weight','100');
	$('.top_month').hide(300);
	$('.this_month').hide(300)}
function month_close(){
	$('.month_close').hide(300)
	$('.this_month').hide(300);
	$('.bot_month').hide(300);
	$('.top_month').hide(300);
	$('.main_none').hide(300);
	$('.top_bold').css('font-weight','100');
	$('.bot_bold').css('font-weight','100');
	$('.this_bold').css('font-weight','100')}