(function () {

	Behaviour.register({
		'head': function (e) {
			e.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">' +
				'<link href="https://fonts.googleapis.com/css?family=Merriweather:400,900,900i" rel="stylesheet">')
		}
	});

	Behaviour.register({
		'div.jenkins-breadcrumbs': function (e) {
			e.insertAdjacentHTML('beforeend', '<a tooltip="Un-wrap logs" class="log-unwrap"></a>')
			e.insertAdjacentHTML('beforeend', '<a tooltip="Wrap logs" class="log-wrap"></a>')

			jQuery('.log-unwrap').show();
			jQuery('.log-wrap').hide();

			jQuery(function () {
				jQuery('.log-unwrap').click(function () {
					jQuery('.log-unwrap').hide();
					jQuery('.log-wrap').show();
					jQuery('pre').css('white-space','pre')
				});

				jQuery('.log-wrap').click(function () {
					jQuery('.log-wrap').hide();
					jQuery('.log-unwrap').show();
					jQuery('pre').css('white-space','pre-wrap')
				});
			});
		}
	});
})();