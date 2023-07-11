//alert("hello");
var noOfbutton=document.querySelectorAll(".drum").length;
for(let i=0;i<noOfbutton;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        // alert("i got clicked!!");
        // var audio=new Audio('tom-1.mp3');
        // audio.play();
        // console.log(this.style.color="white");
        var buttonclass=this.innerHTML;
       makeSound(buttonclass);
       addAnimation(buttonclass);
        
    })
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    addAnimation(event.key);
})
function makeSound(key){
    switch(key){
        case "w":
            var audio=new Audio('tom-1.mp3');
            audio.play();
            break;
            case "a":
                var audio=new Audio('tom-2.mp3');
                audio.play();
                break;
                case "s":
                    var audio=new Audio('tom-3.mp3');
                    audio.play();
                    break;
                    case "d":
                        var audio=new Audio('tom-4.mp3');
                        audio.play();
                        break;
                        case "j":
                            var audio=new Audio('crash.mp3');
                            audio.play();
                            break;
                            case "k":
                                var audio=new Audio('snare.mp3');
                                audio.play();
                                break;
                                case "l":
                                    var audio=new Audio('kick-bass.mp3');
                                    audio.play();
                                    break;
                                                                            
    }  

}
function addAnimation(currentKey){
var activebutton=document.querySelector("."+currentKey);
activebutton.classList.add("pressed");
setTimeout(function(){
    activebutton.classList.remove("pressed");
},100)
}