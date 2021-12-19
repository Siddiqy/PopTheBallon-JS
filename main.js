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

    timerMenu.classList.add('hide');
    scoreMenu.classList.add('hide');
    stopGame.classList.add('hide');
    ballons.classList.add('hide');

    colors.addEventListener('change', (event) => {

        const selected = event.target;
        const value = colors.value;

        if(selected.value === "red") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#CC1600';
            popBallon(selected.value);
        }
        else if(selected.value === "green") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#00A018';
            popBallon(selected.value);
        }
        else if(selected.value === "blue") {
            
            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#0099CF';
            popBallon(selected.value);
        }
        else if(selected.value === "yellow") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#faee44';
            popBallon(selected.value);
        }
        else if(selected.value === "pink") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#F6CADF';
            popBallon(selected.value);
        }
        else if(selected.value === "orange") {
            
            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#FA5D2D';
            popBallon(selected.value);
        }
        else if(selected.value === "naviblue") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#553D95';
            popBallon(selected.value);
        }
        else if(selected.value === "golden") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#D29529';
            popBallon(selected.value);
        }
        else if(selected.value === "slimgreen") {
            
            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#9EE24F';
            popBallon(selected.value);
        }
        else if(selected.value === "darkgreen") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#00951F';
            popBallon(selected.value);
        }
        else if(selected.value === "darkblue") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#3F7FBB';
            popBallon(selected.value);
        }
        else if(selected.value === "darkpink") {
            
            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#EC118F';
            popBallon(selected.value);
        }
        else if(selected.value === "darkred") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#780117';
            popBallon(selected.value);
        }
        else if(selected.value === "darkyellow") {

            timerMenu.classList.add('show');
            scoreMenu.classList.add('show');
            colorPrev.style.backgroundColor = '#F0B31A';
            popBallon(selected.value);
        }
        else {
            colorPrev.style.backgroundColor = '#ffffff';
        }

        startGame.addEventListener('click', () => {

            if(selected.value !== "null") {

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

    stopGame.addEventListener('click', () => {

        window.location.reload();
    });

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

    let score = 0;

    function popBallon(targetBallon) {
        document.addEventListener('click', function(e){

            if(e.target.className === "red" && targetBallon === "red"){

                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
            }
            else if(e.target.className === "green" && targetBallon === "green"){

                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
            }   
            else if(e.target.className === "blue" && targetBallon === "blue") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
            }  
            else if(e.target.className === "yellow" && targetBallon === "yellow") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
            }  
            else if(e.target.className === "pink" && targetBallon === "pink") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
            }  
            else if(e.target.className === "orange" && targetBallon === "orange") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
            }  
            else if(e.target.className === "naviblue" && targetBallon === "naviblue") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
            }  

            else if(e.target.className === "slimgreen" && targetBallon === "slimgreen") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
            }  
            else if(e.target.className === "darkgreen" && targetBallon === "darkgreen") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
            }  
            else if(e.target.className === "darkblue" && targetBallon === "darkblue") {
               
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
            }  
            else if(e.target.className === "darkpink" && targetBallon === "darkpink") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
            }
            else if(e.target.className === "darkred" && targetBallon === "darkred") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
            }   

            else if(e.target.className === "darkyellow" && targetBallon === "darkyellow") {
                
                e.target.remove();
                points.innerHTML = "";
                score += 1;
                points.append(score);
            } 
            else {
                
            }
        });
    }

});