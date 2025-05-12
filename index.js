let btn=document.querySelector("#btn");
let voice=document.querySelector("#voice");
function speak(voice){
let speak_voice=new SpeechSynthesisUtterance(voice)
speak_voice.rate=0.6;
speak_voice.pitch=0.5;
speak_voice.volume=1;
speak_voice.lang="en-US";

window.speechSynthesis.speak(speak_voice)
}   

function greeting(){    
    let day=new Date();
    let hours=day.getHours();
    if(hours<=0 && hours<12){
        speak("Hii good morning sir")
    }
    else if(hours>=12 && hours<16){
        speak("Hii good afternoon sir")
    }
    else{
        speak("hii good evning sir")
    }
}

window.addEventListener("load",()=>{
    greeting();   
})

let  speechRecog=window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition=new speechRecog();  
recognition.onresult=(event)=>{
    console.log(event)
    let currentIndx=event.resultIndex
    let transcript=event.results[currentIndx][0].transcript 
      takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
        recognition.start()
        btn.style.display="none"
        voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
  if(message.includes("hello")){
         speak("HII HOW CAN I HELP YOU");
     }
     else if(message.includes("who are you")){
        speak("I am gaurav tare how can i help you");   
 }
     else if(message.includes("hu r u")){
        speak("I am gaurav your vitual assistant how can i help you");   
 }
     else if(message.includes("how are you")){
        speak("I am fine whats about you");
 }
     else if(message.includes("open youtube")){
        speak("openning youtube")
        window.open("https://www.YouTube.com/")
 }
     else if(message.includes("time")){
    let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
}
     else if(message.includes("date")){
    let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
    speak(date)
}
     else if(message.includes("open google")){
        speak("opening google search")
        window.open("https://www.google.co.in/")
 }
     else{
        speak("This is what i found on internet regarding")
        window.open(`https://www.google.com/search?q=${message.replace("gaurav","")}`)
 }
} 