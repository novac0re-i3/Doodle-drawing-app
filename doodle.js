let canvas;
url='https://teachablemachine.withgoogle.com/models/rHJNj5ytv/';
let doodle;


function setup() {
    canvas = createCanvas(980, 650);
    background('lightgoldenrodyellow');
    canvas.center();
    doodle=ml5.imageClassifier(url+'model.json',modelloaded)
}

function draw(){
    stroke(document.getElementById('colorSelector').value);
    strokeWeight(document.getElementById('sizeSelector').value);
    if (mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}

function clearCanvas(){
    background('lightgoldenrodyellow');
}

function modelloaded(){
    console.log('model is ready')
}

function prediction(){
    doodle.classify(canvas,gotResult)
}

function gotResult(error,result){
    if (error) {
        console.log(error)
    }
    else{
        console.log(result)
        var h3=document.getElementById('h3');
        label=result[0].label;
        con=result[0].confidence.toFixed(3)*100
        h3.innerText='prediction :'+label+"( " +con+ "% )"
    }
}