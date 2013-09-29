// JavaScript Document
// A hack to make sure URLs open in Safari
function openURL(urlString){
    myURL = encodeURI(urlString);
    window.open(myURL, '_system');
}