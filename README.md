# Shortcuts - Chrome Extension

Shortcuts is a Chrome extension that allows you to create automatic redirects based on search queries. With this extension, you can create custom shortcuts for your frequently visited websites, which will redirect you to the desired URL whenever you search for a specific pattern on Google.

## Installation

To install this extension, visit its page on the [Chrome Web Store](https://chrome.google.com/webstore/detail/shortcuts/peplbioenpmoloaonhgglbnjdkhklcid) and click on the "**Add to Chrome**" button.

Alternatively, you can follow the steps below to install the extension from the source code:

1. Clone this repository or download it as a ZIP file.
2. Unzip the downloaded file (if you downloaded it as a ZIP file).
3. Open Chrome and navigate to `chrome://extensions`.
4. Enable "**Developer mode**" in the top right corner.
5. Click on "**Load unpacked**" and select the unzipped folder.

## Usage

Once the extension is installed, you can start creating your own shortcuts. To create a shortcut, follow the steps below:

1. Click the puzzle piece icon in the Chrome toolbar to open the Chrome Extensions menu.
2. Locate the Shortcuts extension in the menu and click on it to open the options page.
	> You can optionally pin the extension to the toolbar by clicking the pin icon located next to the Shortcuts icon. This will allow quicker access to the popup.

	> You can optionally click the three-dot menu located next to the pin icon, and then click "Options" from the dropdown to open a full-screen view of the rules.
4. Click the "**Create new rule**" button on the options page.
5. Enter your desired pattern and corresponding replacement URL in the new inputs
	>Shortcut not working? Making sure to include the protocol (e.g. `http://` or `https://`) in the replacement URL.
6. The extension will automatically redirect your Google searches based on your rules.

## Examples

| Query | Replacement | Description |
| ----- | ----------- | ----------- |
| `r/(.+)` | `https://reddit.com/r/$1` | Redirects you to `reddit.com/r/hello` if you search for `r/hello` on Google. |
| `gh (\S+) (.+)` | `https://github.com/$1/$2` | Redirects you to `github.com/username/repository` if you search for `gh username repository` on Google. |
| `wiki (.*)` | `https://en.wikipedia.org/wiki/$1` | Redirects you to `en.wikipedia.org/wiki/Example` if you search for `wiki Example` on Google. |
| `stackoverflow (.+)` | `https://stackoverflow.com/search?q=$1` | Redirects you to `stackoverflow.com/search?q=how+to+do+something` if you search for `stackoverflow how to do something` on Google. |
| `yt (.+)` | `https://youtube.com/results?search_query=$1` | Redirects you to `youtube.com/results?search_query=funny+cat+videos` if you search for `yt funny cat videos` on Google. |
| `imdb (.+)` | `https://imdb.com/find?q=$1` | Redirects you to `imdb.com/find?q=the+godfather` if you search for `imdb the godfather` on Google. |
| `amazon (.+)` | `https://amazon.com/s?k=$1` | Redirects you to `amazon.com/s?k=iphone+14` if you search for `amazon iphone 14` on Google. |

> Most of this README was generated using [ChatGPT](https://chat.openai.com/)