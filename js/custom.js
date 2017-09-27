$(document).ready(function(){
	$('.job_search_option_triger').on('click',function(){
		console.log('ok')
		$(this).toggleClass('open').next('.options_checkbox').toggle();
	});

	$('.filter_search_triger').on('click', function(){
		$(this).toggleClass('open');
		$('.search_job_filters_holder').slideToggle(200);
	});

	// Business sector form selection
	$('#business_sector_select').click(function() {
		 return !$('#business_sector_select option:selected').remove().appendTo('#business_sector_selected_items');
		});
		$('#business_sector_selected_items').click(function() {
		 return !$('#business_sector_selected_items option:selected').remove().appendTo('#business_sector_select');
		});

	// End business sector form selection
});
