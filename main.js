document.addEventListener("DOMContentLoaded", () => {
    
    let colorPrev = document.querySelector('.color-prev');
    let colors = document.querySelector('#colors');
    let timerMenu = document.querySelector('.timer-menu');
    let timer = document.querySelector('.timer');
    let scoreMenu = document.querySelector('.score-menu');
    let points = document.querySelector('.points');

    let startGame = document.querySelector('.start-btn');
    let stopGame = document.querySelector('.stop-btn');

    let ballons = document.querySelector('.ballon-container');

    //Ballon color selection
    colors.addEventListener('change', (e) => {

        const selected = e.target;

        if(selected.value === "red") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#CC1600';

            let animation = document.querySelectorAll('.red');
            difficultyEasy(animation, "red");
        }
        else if(selected.value === "green") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#00A018';
            
            let animation = document.querySelectorAll('.green');
            difficultyEasy(animation);
            difficultyEasy(animation, "green");
        }
        else if(selected.value === "blue") {
            
            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#0099CF';
            
            let animation = document.querySelectorAll('.blue');
            difficultyEasy(animation);
            difficultyEasy(animation, "blue");
        }
        else if(selected.value === "yellow") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#faee44';
            
            let animation = document.querySelectorAll('.yellow');
            difficultyEasy(animation);
            difficultyEasy(animation, "yellow");
        }
        else if(selected.value === "pink") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#F6CADF';
            
            let animation = document.querySelectorAll('.pink');
            difficultyEasy(animation);
            difficultyEasy(animation, "pink");
        }
        else if(selected.value === "orange") {
            
            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#FA5D2D';
            
            let animation = document.querySelectorAll('.orange');
            difficultyEasy(animation);
            difficultyEasy(animation, "orange");
        }
        else if(selected.value === "naviblue") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#553D95';
            
            let animation = document.querySelectorAll('.naviblue');
            difficultyEasy(animation);
            difficultyEasy(animation, "naviblue");
        }
        else if(selected.value === "golden") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#D29529';
            
            let animation = document.querySelectorAll('.golden');
            difficultyEasy(animation);
            difficultyEasy(animation, "golden");
        }
        else if(selected.value === "slimgreen") {
            
            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#9EE24F';
            
            let animation = document.querySelectorAll('.slimgreen');
            difficultyEasy(animation);
            difficultyEasy(animation, "slimgreen");
        }
        else if(selected.value === "darkgreen") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#00951F';
            
            let animation = document.querySelectorAll('.darkgreen');
            difficultyEasy(animation);
            difficultyEasy(animation, "darkgreen");
        }
        else if(selected.value === "darkblue") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#3F7FBB';
            
            let animation = document.querySelectorAll('.darkblue');
            difficultyEasy(animation);
            difficultyEasy(animation, "darkblue");
        }
        else if(selected.value === "darkpink") {
            
            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#EC118F';
            
            let animation = document.querySelectorAll('.darkpink');
            difficultyEasy(animation);
            difficultyEasy(animation, "darkpink");
        }
        else if(selected.value === "darkred") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#780117';
            
            let animation = document.querySelectorAll('.darkred');
            difficultyEasy(animation);
            difficultyEasy(animation, "darkred");
        }
        else if(selected.value === "darkyellow") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#F0B31A';
            
            let animation = document.querySelectorAll('.darkyellow');
            difficultyEasy(animation);
            difficultyEasy(animation, "darkyellow");
        }
        else {
            colorPrev.style.backgroundColor = '#ffffff';
        }

        startGame.addEventListener('click', () => {

            var startSound = new Audio("audio/play.mp3");

            if(selected.value !== "null") {
                
                startSound.play();
                startGame.classList.add('hide');
                stopGame.classList.add('show');
                ballons.classList.add('show');
                startTimer();
            }
            else {
                alert("Please select a color to play the game!");
            }
        });
    });

    //Stoping the game
    stopGame.addEventListener('click', () => {

        window.location.reload();
    });

    //Game timer => 2 minutes
    function startTimer() {

        var minute = 1;
        var sec = 59;

        const gameTimer = setInterval(function() {
            timer.innerHTML = "";
            timer.append(minute+":"+ sec);
            sec--;

            if (sec == 00) {
                minute --;
                sec = 60;

                if (minute == -1) {

                    timer.innerHTML = "";
                    timer.append("00:00");
                    clearInterval(gameTimer);
                    ballons.remove();
                }
            }

        }, 1000);
    }

    //Difficulty & target selection
    function difficultyEasy(name, target) {

        name.forEach((e) => {
            e.classList.add('animation');
        });

        popBallon(target);
    }

    //Poping the target ballon
    let score = 0;

    function popBallon(targetBallon) {

        var pop = new Audio("audio/pop.mp3");

        document.addEventListener('click', function(e){

            if(e.target.className === "red animation" && targetBallon === "red"){
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
                pop.play();
            }
            else if(e.target.className === "green animation" && targetBallon === "green"){

                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
                pop.play();
            } 
            else if(e.target.className === "blue animation" && targetBallon === "blue") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
                pop.play();
            }
            else if(e.target.className === "yellow animation" && targetBallon === "yellow") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
                pop.play();
            }
            else if(e.target.className === "pink animation" && targetBallon === "pink") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
                pop.play();
            }
            else if(e.target.className === "orange animation" && targetBallon === "orange") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
                pop.play();
            }
            else if(e.target.className === "naviblue animation" && targetBallon === "naviblue") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
                pop.play();
            }
            else if(e.target.className === "golden animation" && targetBallon === "golden") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
                pop.play();
            }
            else if(e.target.className === "slimgreen animation" && targetBallon === "slimgreen") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
                pop.play();
            }
            else if(e.target.className === "darkgreen animation" && targetBallon === "darkgreen") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
                pop.play();
            }
            else if(e.target.className === "darkblue animation" && targetBallon === "darkblue") {
               
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
                pop.play();
            }
            else if(e.target.className === "darkpink animation" && targetBallon === "darkpink") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
                pop.play();
            }
            else if(e.target.className === "darkred animation" && targetBallon === "darkred") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
                pop.play();
            }
            else if(e.target.className === "darkyellow animation" && targetBallon === "darkyellow") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
                pop.play();
            }
            else {
                console.log(e.target);
            }
        });
    }
});