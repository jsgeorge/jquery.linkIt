/*
* name: linkIt
* author Geroge Meyer
* version 0.0.0
* 
*/

(function($) {
	$.fn.linkIt = function (options) {
		//defual setting
		var  settings = $.extend({
			href  	:null,
			text	:null,
			target	:'_self'
		}, options);
		
		
		//validation
		if (settings.href==null) {
			console.log('you need an href option for linIt to work');
			return this;
		}
		
		return this.each(function() {
			var object = $(this);
			
			if(settings.text==null) {
				settings.text = object.text();
			}

			object.wrap('<a target="' + settings.target + '" href="' + settings.href + '"></a>').text(settings.text);

		});
		
		}
}(jQuery));