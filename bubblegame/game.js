const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d");

canvas.style.backgroundColor= "#4da6ff";

let life=10;
let score=0;
let timer=60;
let startGame=0;


class bubbles{
    constructor(){
        this.x= 100 + (Math.random()*(canvas.width-150))
        this.y=40
        this.radius=30
        this.character = Ques[Math.floor(Math.random() * 62)];
    }
    draw(){

        context.font = "20px Arial";
        context.textAlign = "center"; 
        context.textBaseline = "middle"; 
        context.beginPath();
        context.fillStyle="#000066"
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.stroke();
        context.fillText(this.character,this.x,this.y);
        context.closePath();
        
    }
    update() {
        this.y += 2; 
        this.draw();
    }
}

let bubblesArray =[];

let Ques=[0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

setInterval(() => {
    if(startGame >=1){
    let bubble = new bubbles();
    bubblesArray.push(bubble);
    
    timer--;  }
}, 1000);



for(let i=0;i<Ques.length;i++){
  
    addEventListener("keydown",function(event){
        if(event.key==bubblesArray[i].character){
            score++;
            bubblesArray.splice(i,1);
            pop.play();
           
        }
        
    

    })
  
}



function Start(){
   context.clearRect(0,0,canvas.width,canvas.height)
    context.fillStyle="#000066";
    context.fillRect(0,0,canvas.width,canvas.height)
    context.font = "50px Arial";
    context.textAlign = "center"; 
    context.textBaseline = "middle";
    context.fillStyle="white";
    context.fillText("Press Enter to Play",canvas.width/2,canvas.height/2);
    addEventListener("keydown",function(event){
        if(event.key=="Enter"){
            startGame+=1;
            updateAnimation();
           
            return;
        }
    })
    
}

Start();


function updateAnimation() {
    context.clearRect(0, 0, canvas.width, canvas.height);   
    context.fillStyle="white";

        context.font = "50px Arial";
        context.textAlign = "center"; 
        context.textBaseline = "middle";
        context.fillText("Life:",80,50)
        context.fillText(life,180,50)
        context.fillText("Score:",100,100)
        context.fillText(score,220,100)
        context.fillText("Timer:",100,150)
        context.fillText(timer,220,150)
    
    for(let i=0;i<bubblesArray.length;i++){
    bubblesArray[i].update(); 


        if(bubblesArray[i].y>=canvas.height){
            life--;
            bubblesArray.splice(i,1);
        }
    }


    if(timer<=0){
        context.font = "80px Arial";
        context.textAlign = "center"; 
        context.textBaseline = "middle"; 
        context.clearRect(0,0,canvas.width,canvas.height)

       
        context.fillText("Score:",4*canvas.width/9,4*canvas.height/7)
        context.fillText(score,5*canvas.width/9,4*canvas.height/7)
        

        addEventListener("keydown",function(event){
            if(event.key=="r"){
                
                 window.location.reload();
            }
        })
       
    }

    if(life<=0){

        context.font = "80px Arial";
        context.textAlign = "center"; 
        context.textBaseline = "middle"; 
        context.clearRect(0,0,canvas.width,canvas.height)
        context.fillText("You Lost!! (Press R to Restart)",canvas.width/2,3*canvas.height/7)

        context.fillText("Score:",4*canvas.width/9,4*canvas.height/7)
        context.fillText(score,5*canvas.width/9,4*canvas.height/7)

        addEventListener("keydown",function(event){
            if(event.key=="r"){
                
                 window.location.reload();
            }
        })
    }

    requestAnimationFrame(updateAnimation);
}
