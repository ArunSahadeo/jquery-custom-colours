(function($)
{
	var colourNames = {
		burgundy: {
			hex: '#4d0024',
			rgb: 'rgb(77, 0, 36)'
        },

        mauve: {
            hex: '#6b3f5a',
            rgb: 'rgb(107, 63, 90)'
        }
	};

	$.fn.customColour = function(options)
	{

		var defaults =
		{
			format: "hex"
		};

		var settings = $.extend( {}, defaults, options);

		return $(this).each(function()
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
				return $(this).css({
					background: colour
				});
			}

			else if (settings.property === "color")
			{
				return $(this).css({
					color: colour
				});
			}

			else if (settings.property === "backgroundColor")
			{

				return $(this).css({
					backgroundColor: colour 
				});
			}

		});

	};

})(jQuery);
