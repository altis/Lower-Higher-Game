document.getElementById('lowerbutton').addEventListener('click',function(){
validatePlayersChallenge('lower')

});
document.getElementById('higherbutton').addEventListener('click',function(){
    validatePlayersChallenge('higher')
    });
    document.getElementById('restart').addEventListener('click',initialize);
    document.getElementById('tryAgainButton').addEventListener('click',initialize);
    let previousCard;
       let currentCard;
       let deckArray = new Array();
       let pickedCardArray = new Array();
       initialize();
       console.log('Try Again');
    function initialize(){
        console.log('Initialized');
        previousCard=0;
        currentCard=1;
        deckArray.length = 0;
        pickedCardArray.length=0;
        resetDisplay();
        deckArray = [
            {card:1,value:1},{card:2,value:1},{card:3,value:1},{card:4,value:1},
            {card:5,value:2},{card:6,value:2},{card:7,value:2},{card:8,value:2},
            {card:9,value:3},{card:10,value:3},{card:11,value:3},{card:12,value:3},
            {card:13,value:4},{card:14,value:4},{card:15,value:4},{card:16,value:4},
            {card:17,value:5},{card:18,value:5},{card:19,value:5},{card:20,value:5},
            {card:21,value:6},{card:22,value:6},{card:23,value:6},{card:24,value:6},
            {card:25,value:7},{card:26,value:7},{card:27,value:7},{card:28,value:7},
            {card:29,value:8},{card:30,value:8},{card:31,value:8},{card:32,value:8},
            {card:33,value:9},{card:34,value:9},{card:35,value:9},{card:36,value:9},
            {card:37,value:10},{card:38,value:10},{card:39,value:10},{card:40,value:10},
            {card:41,value:11},{card:42,value:11},{card:43,value:11},{card:44,value:11},
            {card:45,value:12},{card:46,value:12},{card:47,value:12},{card:48,value:12},
            {card:49,value:13},{card:50,value:13},{card:51,value:13},{card:52,value:13}];

        pickCardFromDeck();

    }
    function resetDisplay(){
            document.getElementById("overlayContainer").style.display="none";
            document.getElementById("fail").style.display="none";
            document.getElementById("overlay").style.display="none";
            document.getElementById("completed").style.display="none";
            for(let aIndex=0;aIndex<7;aIndex++){
                document.getElementById("img"+aIndex).src = "images/cards/blueBack.png";

            }
            document.getElementById("smallOverlayContainer").style.display="none";
            document.getElementById("textSmallOverlay").style.display="none";
             document.getElementById("nice").style.display="none";
             document.getElementById("great").style.display="none";
             document.getElementById("underlay").style.display="none";
    }
       function getRandomNumber(max){
           return Math.floor(Math.random() * Math.floor(max));
       }
       function pickCardFromDeck(){
        pickedCardArray.length=0;
           let rand= getRandomNumber(deckArray.length);
           let newCard= deckArray[rand];
           
           for(let aIndex = 0;aIndex<7;aIndex++){
               rand = getRandomNumber(deckArray.length);
               newCard = deckArray[rand];
               pickedCardArray.push(newCard);
               deckArray.splice(rand,1);
           }
           displayNewCard(0);
       }
       function displayNewCard(card){
           console.log('card '+card);
           console.log('Array Length -->'+pickedCardArray.length)
           console.log(pickedCardArray[card].card);
           document.getElementById("img"+card).src = "images/cards/card"+(pickedCardArray[card].card)+".png";
           console.log("../images/"+pickedCardArray[card].card);
           if(card==2){
             document.getElementById("smallOverlayContainer").style.display="flex";
             document.getElementById("textSmallOverlay").style.display="flex";
              document.getElementById("nice").style.display="flex";
              document.getElementById("underlay").style.display="flex";
               
           } 
           if(card==3){
            document.getElementById("smallOverlayContainer").style.display="none";
            document.getElementById("textSmallOverlay").style.display="none";
             document.getElementById("nice").style.display="none";
             document.getElementById("underlay").style.display="none";
              
          } 
          if(card==4){
            document.getElementById("smallOverlayContainer").style.display="flex";
            document.getElementById("textSmallOverlay").style.display="flex";
             document.getElementById("great").style.display="flex";
             document.getElementById("underlay").style.display="flex";
          } 
          if(card==5){
            document.getElementById("smallOverlayContainer").style.display="none";
            document.getElementById("textSmallOverlay").style.display="none";
             document.getElementById("great").style.display="none";
             document.getElementById("underlay").style.display="none";
          } 
       }
       function validatePlayersChallenge(playersChallenge){

           //console.log("PCV -> "+pickedCardArray[previousCard].value + " CCV--> " + pickedCardArray[currentCard].value);
           displayNewCard(currentCard);
           switch(playersChallenge){
               case 'higher':
               if(pickedCardArray[previousCard].value<pickedCardArray[currentCard].value){
                   //document.getElementById("message").innerHTML = "(H)continue.."
               }
               else{
                   //document.getElementById("message").innerHTML = "(L)Looser.."
                       endGame('Looser')
                       return;
                   }
               break;
               case 'lower':
               if(pickedCardArray[previousCard].value > pickedCardArray[currentCard].value){
                   //document.getElementById("message").innerHTML = "(L)continue.."
               }
               else {
                   //document.getElementById("message").innerHTML = "(L)Looser.."
                       endGame('Looser')
                       return;
               }
               break;
               default:
               break;
           }

           previousCard = currentCard;
           currentCard++;

           if(currentCard>=7){
            
            document.getElementById("overlayContainer").style.display="flex";
            document.getElementById("completed").style.display="flex";
            document.getElementById("overlay").style.display="flex";
           }
        
       }
       function endGame(message){
           console.log(message)
           document.getElementById("overlayContainer").style.display="flex";
            document.getElementById("fail").style.display="flex";
            document.getElementById("overlay").style.display="flex";
            //initialize();
            //document.getElementById("tryAgainButton").addEventListener("click", function(){
            

          

       }
