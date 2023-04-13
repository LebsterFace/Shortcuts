const create = (tagName, attributes) => Object.assign(document.createElement(tagName), attributes);
const chunkify = (arrLike, size) => {
	const result = [];
	for (let i = 0; i < arrLike.length; i += size) {
		result.push(arrLike.slice(i, i + size));
	}

	return result;
};

const createRule = (find = '', replace = '') => {
	document.querySelector(".container").append(
		create("input", { type: "text", value: find, spellcheck: false, placeholder: "Search query regex" }),
		create("input", { type: "text", value: replace, spellcheck: false, placeholder: "Replacement URL" }),
	);
};

document.querySelector('button').addEventListener("click", () => createRule());

const updateSettings = async () => {
	await chrome.storage.sync.clear();
	const values = [...document.querySelectorAll("input")].map(input => input.value);
	const rules = chunkify(values, 2).filter(([find, replace]) => find.trim().length > 0 && replace.trim().length > 0);
	return chrome.storage.sync.set(Object.fromEntries(rules));
};

document.addEventListener("input", updateSettings);

chrome.storage.sync.get(null).then(data => {
	let ruleCount = 0;
	for (const [find, replace] of Object.entries(data)) {
		ruleCount++;
		createRule(find, replace);
	}

	if (ruleCount === 0) createRule(); // Just to keep the UI looking nice
});