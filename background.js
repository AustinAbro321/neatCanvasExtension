    let className;
chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "giveFolderName");
    port.onMessage.addListener(function(msg) {
      className = msg.folder;
    });
  });
// chrome.runtime.onMessage.addListener(
// function(request, sender, sendResponse) {
//     console.log(request.folder)
//     className = request.folder;
// });
chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
    console.log(className);
    suggest({filename: className + "/" + item.filename});
    console.log(item.filename);
});
