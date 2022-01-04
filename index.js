const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
document.querySelector(".btn-hero").addEventListener("click",function()
{
    var randomIndex = Math.floor(Math.random()*4);
    var randomColor= colors[randomIndex];
    document.querySelector("body").style.backgroundColor=(randomColor);
    document.querySelector(".color").innerText=(randomColor);
    console.log(randomColor);
});