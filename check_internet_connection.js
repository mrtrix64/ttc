// JavaScript Document
function doesConnectionExist() {
    var xhr = new XMLHttpRequest();
    var file = "http://www.yoursite.com/somefile.png";
    var randomNum = Math.round(Math.random() * 10000);
     
    xhr.open('HEAD', file + "?rand=" + randomNum, false);
     
    try {
        xhr.send();
         
        if (xhr.status >= 200 && xhr.status < 304) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}