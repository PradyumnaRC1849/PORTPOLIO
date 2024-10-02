function k(x) {
    return document.getElementById(x);
}
k("a1").addEventListener("click", function() {
    this.style.color = "aqua";
    k("a2").style.color = "white";
    k("a3").style.color = "white";
    k("a4").style.color = "white";
    k("home").style.display = "flex";
    k("about_us").style.display = "none";
    k("contact").style.display = "none";
    k("game").style.display="none";
});
k("a2").addEventListener("click", function() {
    this.style.color = "aqua";
    k("a1").style.color = "white";
    k("a3").style.color = "white";
    k("a4").style.color = "white";
    k("home").style.display = "none";
    k("about_us").style.display = "flex";
    k("contact").style.display = "none";
    k("game").style.display="none";
});
k("a3").addEventListener("click", function() {
    this.style.color = "aqua";
    k("a2").style.color = "white";
    k("a1").style.color = "white";
    k("a4").style.color = "white";
    k("home").style.display = "none";
    k("about_us").style.display = "none";
    k("contact").style.display = "flex";
    k("game").style.display="none";
});
k("a4").addEventListener("click", function() {
    this.style.color = "aqua";
    k("a2").style.color = "white";
    k("a1").style.color = "white";
    k("a3").style.color = "white";
    k("home").style.display = "none";
    k("about_us").style.display = "none";
    k("contact").style.display = "none";
    k("game").style.display="flex";
});
k("btn").addEventListener("click",function(){
    var r=Math.floor(Math.random()*10)+1;
    var s=k("message").value
    k("yc").innerHTML=s;
    k("cc").innerHTML=r;
    if(s==r){
        k("msg").innerHTML="<span style='color:white;'>YOU</span> WON";
    }
    else if(s!=r){
        k("msg").innerHTML="<span style='color:yellow;'>COMPUTER</span> WON";
    }
});