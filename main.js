














function speak(){
    var synth = window.speechSynthesis;
    speakData1 = "A primeira previsão é " + prediction1;
    speakData2 = "E a segunda previsão é " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2);
    synth.speak(utterThis);
  }
  
  
    function check()
    {
      img = document.getElementById('captured_image');
      classifier.classify(img, gotResult);
    }