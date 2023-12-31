function greetUser() {
    var username = document.getElementById('username').value;
    var greetingElement = document.getElementById('greeting');

    if (username.trim() === '') {
        greetingElement.textContent = 'Please enter your full name.';
    } else {
        var greetingMessage = 'Happy New Year, ' + username + '!'+ " May this year you get everything you ever wished for.";
        var message = 'Happy New Year, ' + username + '!';
        if (username.toLowerCase()=="harpreet singh"){
            greetingMessage = 'Happy New Year, ' + username + '!'+ " May this year you get everything you ever wished for. Aur ek girlfriend se khush ho jaa teen chaar ka koi fayada nahi hai";
        }
        
        greetingElement.textContent = message;
        speak(greetingMessage);
    }
}

function speak(message) {
    var speechSynthesis = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(message);

    speechSynthesis.speak(utterance);
}
