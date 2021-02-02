Webcam.set({
    width: 305,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 100,

    constraints: {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById('result').innerHTML = '<img id="captured_img" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('MobileNet',load);

function load(){
    console.log('The Model is Loaded! ');
}

function identify_image(){
    img = document.getElementById('captured_img');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("answer").innerHTML = results[0].label;
    }
}