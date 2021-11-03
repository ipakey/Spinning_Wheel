function oneTurnLeft(){

}

function oneTurnRight(){

}

function runMatchTest(){

}

// audio constructor

class AudioController {	
    constructor(){
		this.bgMusic = new Audio('Assets/Audio/Bground1.mp3');
		this.flipSound = new Audio('Assets/Audio/cardflip.wav');
		this.matchSound = new Audio('Assets/Audio/Match.wav');
		this.victorySound = new Audio('Assets/Audio/Victory.wav');
		this.gameOverSound = new Audio('Assets/Audio/GameOver.wav');
		this.noMatchSound = new Audio('Assets/Audio/NoMatch.wav');
		this.bgMusic.volume = 0.2;
		this.bgMusic.loop = true;	
	}
	
	startMusic(){									// > 64, (>182)
		this.bgMusic.play();						//		65> 
	} 
	
	stopMusic() {									// > 36, >40
		this.bgMusic.pause();
		this.currentTime = 0;
	}
	
	flip(){											// > 88
		
		this.flipSound.play(); 						// >90
	}
	
	matchAudio(){										// >109
		this.matchSound.play();
	}
	
	noMatchAudio() {
		this.noMatchSound.play();
	}
	
	victoryAudio(){										// >142
		this.stopMusic();
		this.victorySound.play();					//			143>
	} 
	
	gameOverAudio(){										// >142
		this.stopMusic();
		this.gameOverSound.play();					//			143>
	} 
}

// game constructor

class Spinner_Game_5{
	//This constructor initallises all the variables at the start of the game.
	constructor(totalTime, cardsO, cardsI) {					
		this.cardOArray = cardsO;
        this.cardIArray = cardsI;
		this.totalTime = totalTime;
		this.timeRemaining = totalTime;
		this.timer = document.getElementById('time-remaining');
		this.ticker = document.getElementById('flips');
		this.endClicks = 0;
        this.flips = 0;
		console.log(this.flips);
		this.audioController= new AudioController();
	}
	
	//Start the game method
	startGame(){	
        console.log ("game started");													//	>182
		this.cardToCheck = null;
		this.totalClicks = 0;
		this.timeRemaining = this.totalTime;
		this.matchedCards = [];
		this.busy = true;
		
		// this timeout pauses the game to allow the shuffle to happen before the countdown & flips can begin it is set to .5seconds
		setTimeout(() =>{								// Timeout
			this.audioController.startMusic();								//			 17>
			this.shuffleCards();											//	> 18	152>
			this.countDown = this.startCountDown();							//	>137	129>
			this.busy = false;			
		} , 500);
		//this part makes sure every card is in play at the start of a game removes all visble and matched classElements from cards. 
		this.hideCards();    												// 	> 79
		this.timer.innerText = this.timeRemaining;		
		this.ticker.innerText = this.totalClicks; 							//  		 85>
	}

    //hide cards

    hideCards(){															// 	>151, >122, >144
        this.cardArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');								//  	69>, eop>, eop>
        }); 
    }

    //flip card
    flipCard(card, totalClicks){											//	> 70, >147
        if(this.canFlipCard(card)){											//				160>
            this.audioController.flip();									//	>162		25>
            this.totalClicks++;												//	> 27
            this.ticker.innerText= this.totalClicks;
            card.classList.add('visible');
            console.log('this.total clicks' +this.totalClicks, card);
            this.checkFlip(this.totalClicks, card);
        }
    }
    //check flip
    checkFlip(totalClicks, card){
        if(this.cardToCheck)
            this.checkForCardMatch(card);
        else
            this.cardToCheck= card;
    }

    //check for cardmatch
    checkForCardMatch(card, cardToCheck) {									//> 96
        if(this.getCardType(card) === this.getCardType(this.cardToCheck))	//>125, >125
            this.cardMatch(card, this.cardToCheck);							//			105>
        else 
            this.cardMisMatch(card, this.cardToCheck);						// 			114>
        
    }

    //card Match
    cardMatch(card1, card2){												//	> 98
        this.matchedCards.push(card1);		//Add matched cards to matched cards array
        this.matchedCards.push(card2);
        card1.classList.add('matched');		//add matched class to cards.
        card2.classList.add('matched');
        this.cardToCheck = null;
        this.audioController.matchAudio();										//			 30>    play matched sound 
        if(this.matchedCards.length === this.cardArray.length){
            this.audioController.victoryAudio();
            this.victory();														//			145>
        }
    }

    //card mismatch
    cardMisMatch(card1, card2){
        this.busy = true;
        setTimeout(() => {					// Timeout
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.audioController.noMatchAudio();

        }, 1000);
            this.cardToCheck = null;
            this.busy = false;		
    }

    //get card type

    getCardType(card){														// >98
        return card.getElementsByClassName('card-value')[0].src;			//			99>
    }

    //start count down

    startCountDown(){														// >66
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.matchedCards.length === this.cardArray.length){
                this.timeRemaining = timer;
                this.timer.innerText = totalTime;
            }
                else {
                    if(this.timeRemaining === 0)							//			140>
                        this.gameOver();		
                }		
        }, 1000);															//			 67>
    }

    //end game
    gameOver(){																//	>136
        clearInterval(this.countDown);
        this.audioController.gameOverAudio();								//			 38>
        document.getElementById('game-over-text').classList.add('visible');
        this.hideCards();													// 			 75>
    }

    //victory overlay
    victory(){																//	>111
        clearInterval(this.countDown);										//			 34>
        document.getElementById('victory-text').classList.add('visible');	//	> 36
        this.audioController.victoryAudio();	  
                                                                    
    }

    //suffle cards

    shuffleCards(){
        for(let i = this.cardArray.length - 1; i > 0; i--) { 				//>65 
            let randomIndex = Math.floor(Math.random() * (i+1));
            this.cardArray[randomIndex].style.order = i;
            this.cardArray[i].style.order = randomIndex;						//		66>
        }
    }

    //is card available for match? 

    canFlipCard(card){																			// >83
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;	//		84>
    }		
    }

function ready(){
	// load overlays and cards and create Arrays of data
	
	let overlays = Array.from(document.getElementsByClassName('overlay-text'));
	let cardsO = ["1+0","1+1","1+2","1+3","1+4","1+5"];
    let cardsI = [1,2,3,4,5,6];
	console.log(cardsI);
    console.log(cardsO);
	let totalTime= document.getElementById('time-remaining');
	let game = new Spinner_Game_5(100, cardsO, cardsI);
	
 		overlays.forEach(overlay => {
			overlay.addEventListener('click', () => {
				overlay.classList.remove('visible');
				game.startGame();			//Will start //game play when defined
			let audioController = new AudioController();							//		  6>
			audioController.startMusic();
																// >14	 17>
			});
		});

}

if(document.readyState === 'loading'){
	document.addEventListener('DOMContentLoaded', ready());
}	else{
		ready();
}




