function ReadLocated(){
    var dots = document.getElementById("locatedDots");
    var moreText = document.getElementById("locatedMore");
    var btnText = document.getElementById("locatedBtn");
    
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function Readfy(){
    var dots = document.getElementById("fyDots");
    var moreText = document.getElementById("fyMore");
    var btnText = document.getElementById("fyBtn");
    
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
