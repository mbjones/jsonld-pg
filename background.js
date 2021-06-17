function openPage() {
  browser.tabs.query({active: true})
    .then(tabs => browser.tabs.get(tabs[0].id))
    .then(tab => { 
        console.info("TabID: " + tab.id); 
        console.info("Title: " + tab.title);
        browser.tabs.executeScript(tab.id, {
            code: `json = window.document.querySelector('script[type="application/ld+json"]'); browser.runtime.sendMessage(json.innerHTML)`
        })
    });

}

function jsonListener(json) {
    const encoded = encodeURIComponent(json.trim());
    playground_uri = "https://json-ld.org/playground/#startTab=tab-expanded&json-ld=" + encoded
    console.info(playground_uri)
    browser.tabs.create({
      url: playground_uri
    });
}

browser.runtime.onMessage.addListener(jsonListener)
browser.browserAction.onClicked.addListener(openPage);
