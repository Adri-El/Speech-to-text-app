const texts = document.querySelector('.texts')
const notes = document.querySelector('.notes')
const start = document.getElementById('start')
start.style.animation = 'buzz 500ms infinite';
const body = document.getElementById('body')
const colors = ['red', 'blue', 'green', 'yellow', 'white', 'black', 'purple', 'orange', 'pink', 'gold', 'Red', 'Blue', 'Green', 'Yellow', 'White', 'Black', 'Purple', 'Orange', 'Pink', 'Gold']
const socialMedia = ['Facebook', 'Instagram', 'Google', 'YouTube', 'Twitter']

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true

start.addEventListener('click', e=>{
    recognition.start()
    start.style.animation = '';
})

let p = document.createElement('p')

recognition.addEventListener('result', e=>{
   
    const text = Array.from(e.results)
    .map(result=> result[0])
    .map(result=> result.transcript)
    .join('');

    p.innerText = text;
    p.classList.add('word')
    notes.appendChild(p);


    if(e.results[0].isFinal){
        if(text.includes('who are you') || text.includes('what is your name') || text.includes("what's your name")){
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = `My name is X5. I am a robot created by AdriEl, He is still working on me, 
            but right now I can help you with few tasks, for example, i can change your screen to any color you want
            and i can also take you to your favourite social media web page `;
            notes.appendChild(p);
        }

        for(let i of colors){
            
            if(text.includes(`to ${i}`)){
                body.style.backgroundColor = i
    
            }
        
        }

        
        for(let i of socialMedia){ 
            if(text.includes(`to ${i}`)){
                window.open(`https://${i}.com`)
    
            }
        
        }


        p = document.createElement('p')
    }
    
})

recognition.addEventListener('end', e=>{
    recognition.start()
    
})

//recognition.start()