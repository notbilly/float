function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var url = prompt("URL?");
if(url){
  var vid = document.createElement("iframe");
  vid.setAttribute('src','https://www.youtube.com/embed/'+ getParameterByName("v",url));
  vid.setAttribute('width','280');
  vid.setAttribute('height','158');
  vid.setAttribute('style','position:fixed;right:8px;bottom:8px');
  vid.setAttribute('frameborder','0');
  vid.setAttribute('allowfullscreen','');
  document.body.appendChild(vid);
}
