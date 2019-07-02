//Spilts name for class
function breakUpWord(str, num) 
{
    return str.split('_')[num];
}
//gets name for the folder
function getFolderName()
{
    let classAbrv = breakUpWord(document.querySelector("#breadcrumbs > ul > li:nth-child(2) > a > span").textContent,0);
    let classNum = breakUpWord(document.querySelector("#breadcrumbs > ul > li:nth-child(2) > a > span").textContent,1);
    return classAbrv + " " + classNum;
}
//Puts the file name here and sends it
let folderName = getFolderName();
//console.log(folderName);
//chrome.runtime.sendMessage({folder: folderName})
var port = chrome.runtime.connect({name: "giveFolderName"});
port.postMessage({folder: folderName});
