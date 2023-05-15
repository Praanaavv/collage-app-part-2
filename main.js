img_id = "";
var speechRecognition = window.webkitSpeechRecognition;
//speech to text
var container = document.querySelector('.container');

var myVideo = document.getElementById('myVideo');

var recognition = new speechRecognition();

function startspeech()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content
    if (content == "Take my selfie.")
    {
        console.log("taking selfie in 5 seconds");
        speak();
    }
    
}
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:100,
    crop_width:320,
    crop_height:250,

});
camera = document.getElementById("camera");


function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds. 5.....4......3....2.....1"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function() {
        myVideo.play();
        container.classList.add('hide');
      }, 3000);

      setTimeout(function() {
        myVideo2.play();
        container.classList.add('hide');
      }, 8000);

      setTimeout(function() {
        myVideo3.play();
        container.classList.add('hide');
      }, 15000);




    

    setTimeout (function()
{
    
    img_id = "selfie1";
    take_snapshot();
    speak_data = "Taking your next selfie in  5.....4....3.......2.....1";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},7500);

setTimeout (function()
{
    img_id = "selfie2";
    take_snapshot();
    speak_data = "Taking your next selfie  in  5......4.......3........2.....1";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},14000);

setTimeout (function()
{
    img_id = "selfie3";
    take_snapshot();    
},20000);


}

function take_snapshot()
{

    console.log(img_id);


 Webcam.snap(function(data_uri){
    if(img_id =="selfie1"){
        document.getElementById("result1").innerHTML = '<img id = "selfie1" src="'+data_uri+'">;'  
    }
    if(img_id =="selfie2"){
        document.getElementById("result2").innerHTML = '<img id = "selfie2" src="'+data_uri+'">;'  
    }
    if(img_id =="selfie3"){
        document.getElementById("result3").innerHTML = '<img id = "selfie3" src="'+data_uri+'">;'  
    }
    
});
}






function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}