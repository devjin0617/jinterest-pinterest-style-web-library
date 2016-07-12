function Jinterest(list) {
	$.get("jinterest-form.html", function(form) {
		$('.jt-body').html(form);

		$.get("jinterest-content-view.html", function(result) {

			for (var n = 0; n < list.length; n++) {
				var data = list[n];
				var push = $('.jt-push');

				var content = $('.hidden').html();

				var height = 9999;
				var index;

				for (var i = 0; i < 4; i++) {
					var c = push[i];
					if (c.offsetHeight < height) {
						height = c.offsetHeight;
						index = i;
					}
				}

				var html = result.replace('{ID}', data.id).replace('{JT_IMG_URL}', data.img_url).replace('{JT_TITLE}', data.title).replace('{JT_CONTENT}', data.content);
				html = html.replace('{JT_DATE}', data.date).replace('{JT_LIKE_COUNT}', data.like_count).replace('{JT_REPLY_COUNT}', data.reply_count);

				$('.jt-push').get(index).innerHTML += html;


			}

		});

	});
}
