<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spinner App</title>
    <script src="scripts.js"></script>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2 class="page-title">Spinner Game by Yfke</h2>
    
    <div class="wrapper">
        <div class="overlay-text" id="overlays"></div>
            <div class="overlay-text" id="game-over-text">GAME OVER!
                <span class="overlay-text-small">Bad Luck: click to try again </span>
            </div>

            <div class="overlay-text visible" id="game-start-text">CHOOSE A LEVEL AND CLICK THE BUTTON TO START!
                <form action="" method="post">
                   <label for="stage" class='formButtonText' style='width:3%; color: LemonChiffon'>6 Questions</label>
		           <input type="radio" name="stage" id="Qs" value="6">
                   <label for="stage" class='formButtonText' style='width:3%; color: LemonChiffon'>8 Questions</label>
		           <input type="radio" name="stage" id="Qs" value="8">
                   <button class='formButton' style='margin-top: 10px; padding: 10px; margin-bottom:10px'  type='submit' name='qsGame'>Start Game</button>
                </form>
            </div>
            <div class="overlay-text" id="game-win-text">VICTORY!
                <span class="overlay-text-small">Well Done: click to try again</span>
                <button type="submit" id='incudeInLeague' style='margin-top: 10px; padding: 10px; margin-bottom:10px' >Save Result</button>
            </div>      
    </div>
    <div class="game-info-container">
        <div class="game-info">
            Time <span id="time-remaining">100</span>
            Attempts Made <span id="picks">0</span>
            Score <span id="score">0</span>/6
        </div>
    </div>

    <div class="game-buttons">
        <div><button class="btn-submit" id="arrowL" onclick="oneTurnLeft()"  alt="Left Arrow" > <img class='btn-style' src="images\circle-anti-blue.gif"  alt="Left Arrow"></button></div>
        <div ><button class="btn-submit" id="arrowR" onclick="oneTurnRight()"  alt="Right Arrow" > <img class='btn-style' src="images\circle-clock-blue.gif"  alt="Right Arrow"></button></div>
        <div class="match" ><button  class="btn-submit" id="matchBtn"  onclick="runMatchTest()" type="submit">Match</button></div>
    </div>
   
    <div class="game-container">
        <div class="card-deck">
            <div class="card-1">
                <div class="card card-outer card-face" id="card-1">
                    <img src="Assets/Images/one.jpg" alt="outer card face 1" class="outer-image" id="card-outer-1">
                </div>
                <div class="card card-inner card-face" id="card-1">
                    <img src="Assets/Images/one.jpg" alt="inner card face 1" class="inner-image" id="card-inner-1">
                </div> 
            </div>
               
            <div class="card-2 ">
                 <div class="card card-outer card-face" id="card-2">
                    <img src="Assets/Images/two.jpg" alt="outer card face 2" class="outer-image" id="card-outer-2">
                </div>
                <div class="card-inner card-face" id="card-2">
                    <img src="Assets/Images/two.jpg" alt="inner card face 2" class="inner-image" id="card-inner-2">
                </div>
               
            </div>
                 
            <div class="card-3 ">
                <div class="card card-outer card-face" id="card-3">
                    <img src="Assets/Images/three.jpg" alt="outer card face 3" class="outer-image" id="card-outer-3">
                </div>
                <div class="card-inner card-face" id="card-3">
                    <img src="Assets/Images/three.jpg" alt="inner card face 3" class="inner-image" id="card-inner-3">
                </div>

            </div>

            <div><img src="images/nutden.png" alt="the den center boss" class="pivot-image">  </div>
                        
            <div class="card-4 ">
                <div class="card-inner card-face" id="card-4">
                    <img src="Assets/Images/four.jpg" alt="inner card face 4" class="inner-image" id="card-inner-4">
                </div>
                <div class="card-outer card-face" id="card-4">
                    <img src="Assets/Images/four.jpg" alt="outer card face 4" class="outer-image" id="card-outer-4">
                </div>
            </div>
            
            <div class="card-5 ">
                <div class="card-inner card-face" id="card-5">
                    <img src="Assets/Images/five.jpg" alt="inner card face 5" class="inner-image" id="card-inner-5">
                </div>
                <div class="card card-outer card-face" id="card-5">
                    <img src="Assets/Images/five.jpg" alt="outer card face 5" class="outer-image" id="card-outer-5">
                </div>
            </div>
                       
            <div class="card-6 ">
                <div class="card-inner card-face" id="card-6">
                    <img src="Assets/Images/six.jpg" alt="inner card face 6" class="inner-image" id="card-inner-6">
                </div>
                <div class="card card-outer card-face" id="card-6">
                    <img src="Assets/Images/six.jpg" alt="outer card face 6" class="outer-image" id="card-outer-6">
                </div>
            </div>
            
        </div>
    </div>
</body>
</html>