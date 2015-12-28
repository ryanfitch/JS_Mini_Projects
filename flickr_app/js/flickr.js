$(document).ready(function () {
	$('button').click(function () {
		// highlight button so user knows which button has been clicked and selected
		$("button").removeClass("selected");
		$(this).addClass("selected");
		// stores Flickr API URL to the variable flickrAPI
		var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		// structures our search query that gets sent to Flickr and specifies that we want it to be in JSON format 
		var buttonSearch = $(this).text();
		var flickrOptions = {
			tags: buttonSearch,
			format: "json"
		};
		function displayPhotos(data) {
			var photoHTML = '<ul>';
			// loop thru the array of photos
			$.each( data.items, function (i, photo) {
				photoHTML += '<li class="grid-25 tablet-grid-50">';
				photoHTML += '<a href="' + photo.link + '" class="image">';
				photoHTML += '<img src="' + photo.media.m + '"></a></li>';
			});
			photoHTML += '</ul>';
			$('#photos').html(photoHTML);
		}
		$.getJSON(flickrAPI, flickrOptions, displayPhotos);
	});
});