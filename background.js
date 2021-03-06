chrome.runtime.onInstalled.addListener(
  function() {
    chrome.storage.sync.set(
      {color: '#EEEEFF'},
      function() {
        console.log("The color is gray/blue.");
      }
    );
    chrome.declarativeContent.onPageChanged.removeRules(
      undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules(
          [
            {
              conditions: [
                  new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {hostEquals: '<all_urls>'},
                  })
              ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
          }]);
    });
});
