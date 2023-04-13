if (window.location.search) {
	const { searchParams } = new URL(location.href);
	const search = searchParams.get("q");
	chrome.storage.sync.get(null).then(data => {
		for (const [find, replace] of Object.entries(data)) {
			const re = new RegExp("^" + find, "gi");
			if (!re.test(search)) continue;

			// These should never trigger.
			// Empty keys/values should be discarded by the popup script.
			if (find.length === 0) continue;
			if (replace.length === 0) continue;

			const newURL = search.replace(re, replace);
			window.location.replace(newURL);
		}
	});
}