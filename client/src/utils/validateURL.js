function validateURL(url){
    var httpString = "http://";
    var httpsString = "https://";
    return(url.substring(0,7) == httpString || url.substring(0,8) == httpsString);
}

module.exports = validateURL;