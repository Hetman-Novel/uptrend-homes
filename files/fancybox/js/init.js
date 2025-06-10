Fancybox.bind(".js-show-all-photos", {
	groupAll: true, // Group all items
	on: {
		ready: (fancybox) => {
			console.log(`fancybox #${fancybox.id} is ready!`);
		}
	}
});