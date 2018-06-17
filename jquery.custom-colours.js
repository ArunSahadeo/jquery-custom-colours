(function($)
{
	var colourNames = {
		burgundy: {
			hex: '#4d0024',
			rgb: 'rgb(77, 0, 36)'
		}
	};

	$.fn.customColour = function(options)
	{

		var defaults =
		{
			format: "hex"
		};

		var settings = $.extend( {}, defaults, options);

		return this.each(function()
		{
			var colourInput = String(settings.colour).toLowerCase();
			
			if (!settings.colour || !settings.property )
			{
				console.error("No colour or property has been defined.");
				return;
			}

			if (!colourNames[colourInput])
			{
				console.error("Colour does not exist!");
				return;
			}

			var colour = colourNames[colourInput][settings.format];

			if (settings.property === "background")
			{
				$(this).css({
					background: colour
				});
			}

			else if (settings.property === "color")
			{
				$(this).css({
					color: colour
				});
			}

			else if (settings.property === "backgroundColor")
			{

				$(this).css({
					backgroundColor: colour 
				});
			}

		});

	};

})(jQuery);
