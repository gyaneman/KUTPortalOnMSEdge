var targetPage = "https://portal2.kochi-tech.ac.jp/*";
//var targetPage = "https://env.b4iine.net/";
var ua = "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; NP06; rv:11.0) like Gecko";

function rewriteUserAgentHeader(e) {
    e.requestHeaders.forEach(function(header){
        if (header.name.toLowerCase() == "user-agent") {
            console.log(header.value + " -> " + ua);
            header.value = ua;
        }
    });
    return {requestHeaders: e.requestHeaders};
}
  
browser.webRequest.onBeforeSendHeaders.addListener(
    rewriteUserAgentHeader,
    {urls: [targetPage]},
    ["blocking", "requestHeaders"]
);