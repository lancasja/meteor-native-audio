if (Meteor.isCordova) {

	Meteor.startup(function() {
		
		var src = 'application/audio/dominguez.mp3';
		var media = new Media(src);
		media.play();

	});
}

