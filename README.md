# Firefox extension to Load JSON-LD

- License: Apache 2.0
- Author: Matthew B. Jones

This is a simple Firefox extension that provides a button on the toolbar to load JSON-LD from a web page into the [JSON-LD Playground]() site. The Playground makes it easy to inspect and visualize JSON-LD, so this button makes it fast to go from a web page to the Playground. 

The extension works by creating a browser action to create a toolbar button with a listener for when the button is pressed. Upon click, the browser action finds the currently active tab, and executes a content sxcript that queries the DOM for the first JSON-LD block, and returns that JSON string to the action through a message.  The browser action registers a listener for thosemessages containing JSON, and then opens a new tab at the JSON-LD playground site using the JSON content.

As a standard FF extension, this can be installed following the Firefox instructions for [temporarily installing extensions](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) in development. I have not yet published it for general install as an extension, but that would be straightforward as needed.
