function ibg(){

	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();

function ibg(){

	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}

ibg();

$(document).ready(function(){
	$('.icon-menu').click(function(event){
		$('.icon-menu, .menu__body').toggleClass('active')
		$('body').toggleClass('lock')
	})
})

$('.filter__item').click(function(event){
	var i=$(this).data('filter');
	if (i==1){
		$('.works__column').show();
	}
	else {
		$('.works__column').hide();
		$('.works__column.f_'+i).show(); 
	}

	$('.filter__item').removeClass('active');
	$(this).addClass('active');

	return false;
})

$(function(){
	$('.slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		infinite: true,
		responsive:[
		{
			breakpoint: 768,
			settings: {
				slidesToShow:1,
				slidesToScroll: 1
			}
		}
		]
	});
})

