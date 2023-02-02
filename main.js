//https://teachablemachine.withgoogle.com/models/jG-uOucZS/
function start1() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jG-uOucZS/model.json', modelReady)
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if(error){
console.error(error);
    }
    else {
        console.log(results);
        randomR=Math.floor(Math.random() * 255) + 1;
        randomB=Math.floor(Math.random() * 255) + 1;
        randomG=Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML='I am dancing to' + results[0].label;
        document.getElementById("result_confidence").innerHTML='Confidence:' + (results[0].confidence*100).toFixed(2)+"%";
        img1=document.getElementById('a1');
        img2=document.getElementById('a2');
        img3=document.getElementById('a3');
        img4=document.getElementById('a4');
        if(results[0].label=="Bugs Bunny") {
            img1.src='giphy.gif';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }
        else 
        if(results[0].label=="Woody Woodpecker") {
            img1.src='bugs-bunny-transparent-11546806545sjybr7zzas.png';
            img2.src='woody.gif';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }
        else        if(results[0].label=="Roadrunner") {
            img1.src='aliens-01.png';
            img2.src='aliens-02.gif';
            img3.src='omw-running.gif';
            img4.src='aliens-04.png';
        }
        else        if(results[0].label=="Donald Duck") {
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='dd.gif';
        }
    }
}