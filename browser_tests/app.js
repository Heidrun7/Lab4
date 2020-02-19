function p1(arr) {
    return arr.reverse();
}

function p2(text) {
    return text.split(" ");
}

function p3(num1, num2, num3, bool) {
    if(bool == true) {
        if(num1 < num2 && num2 < num3) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        if (num1 <= num2 && num2 <= num3) {
            return true;
        }
        else {
            return false;
        }
    }
}

// Viljum að það séu bara tölur þar sem i=j
function p4(mat) {
    if(!Array.isArray(mat)){
        return false;
    }
    for(var i=0; i < mat.length; i++) {
        for(var j=0; j < mat.length; j++) {
            if(i !== j && mat[i][j] !== 0) { // Ef i og j eru ekki sami index og það er einhver önnur tala en 0
                return false
            }
        }
    }
    return true;
}

function p5(circleObj, pointObj) {
    d = Math.sqrt(Math.pow((pointObj.x - circleObj.center.x), 2) + Math.pow((pointObj.y - circleObj.center.y), 2));
    console.log("d is: ", d);
    console.log("radius is: ", circleObj.radius);
    if(d < circleObj.radius) {
        return true;
    }
    else {
        return false;
    }
}

function p6() {
    input = document.getElementById("p6num").value;
    var randNum = Math.floor(Math.random() * 8); // Generate random number 0-8
    if(randNum === Number(input)) {
        document.getElementById("evaluate").textContent = "You guessed right";
    }
    else {
        document.getElementById("evaluate").textContent = "Wrong guess - try again";
    }
}

function p7() {
    currBackground = document.getElementById("p7invert").style.backgroundColor;
    currTextColor = document.getElementById("p7invert").style.color;

    document.getElementById("p7invert").style.backgroundColor = currTextColor;
    document.getElementById("p7invert").style.color = currBackground;
}

function p8() {
    var currImg = document.getElementById("p8img").src; // Ef við viljum ekki að að sama myndin komi aftur
    var imgArr = [
        "https://www.rd.com/wp-content/uploads/2019/04/Hilarious-Dog-Memes-FT.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_h-ziNMhFjutOJNjfFbdllwYUKlTnG4CIMJpck56o9xmU_gkb",
        "https://pbs.twimg.com/media/CsW0pmxUsAAuvEN.jpg",
        "https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg"
    ]
    var randNum = Math.floor(Math.random() * 3); // Generate random number 0-3
    while (currImg === imgArr[randNum]) { // Ef við viljum ekki að að sama myndin komi aftur
        randNum = Math.floor(Math.random() * 3);
    }
    
    document.getElementById("p8img").src = imgArr[randNum];
}

// console.log(p1(["einn", "tveir", "þrír"])); // Should be ["þrír", "tveir", "einn"]

// console.log(p2("Þetta er strengur")); // Should be ["Þetta", "er", "strengur"]

// console.log(p3(1,2,3,1)); // Should be true
// console.log(p3(2, 2, 2, 0)); // Should be true

// console.log(p4([[1,0,0], [0,1,0], [0,0,1]])); // Should be true
// console.log(p4([[0, 1, 0], [1, 0, 0], [0, 0, 1]])); // Should be false

// var circle = {radius: 2, center: {x: 0, y: 0}};
// var point = {x: 0, y: 1};
// console.log(p5(circle, point)); // Should be true
// var point = {x: 2, y: 2.1};
// console.log(p5(circle, point)); // Should be false




