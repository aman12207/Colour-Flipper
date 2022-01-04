const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
document.querySelector(".btn-hero").addEventListener("click",function()
{
    // var randomColor = Math.floor(Math.random()*16777215).toString(16);      //shortcut for creating random hex code
    var randomColor="";
    for(var i=1;i<=6;i++)
    {
        var randompos=Math.floor(Math.random()*hex.length);
        randomColor+=hex[randompos];
    }
    document.querySelector("body").style.backgroundColor=("#"+randomColor);
    document.querySelector(".color").innerText=("#"+randomColor);
    console.log(randomColor);
});