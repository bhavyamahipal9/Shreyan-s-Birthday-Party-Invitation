function speak(){
    var synth = window.speechSynthesis;

    speakData = "Its Teenager's Party No Over Teens Allowed! With respect no Adults Allowed to get Included into the Party. You are safe at the party no need to worry.";

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);
}
