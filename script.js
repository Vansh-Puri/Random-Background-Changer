var myBtn = document.querySelector(".btn");
var body = document.querySelector(".container")
var text = document.querySelector(".colorname");
 
console.log(myBtn)
var hexColor = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
var randomColor = "#"
 
 
myBtn.addEventListener("click", (e) => {
    console.log("click")
    var rCol = generateRandomColor()
    text.innerHTML = "Color : "+rCol;
    body.style.background = rCol;
 
})
 
function generateRandomNum(){
    var random = Math.floor(Math.random()*hexColor.length);
    return random;
}
 
function generateRandomColor(){
    randomColor = "#"
    for(var i=0; i<6; i++){
        var randomNum = generateRandomNum()
        randomColor = randomColor + hexColor[randomNum]
    }
    return randomColor;
}