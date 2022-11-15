// document.addEventListener("DOMContentLoaded", GameMenu);

GameMenu();
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');

//     let image = new Image(50, 50);
//         image.onload = drawImage;
     

//     function drawImage()
//     {
//         image.src = 'images/logo.png';
//         canvas.width = image.naturalWidth;
//         canvas.height = image.naturalHeight;

//         // ctx.drawImage(this, 0, 0);

//         ctx.drawImage(image, 200, 200, 700, 500);
//     }

//     function drawRectangle()
// {
//     ctx.beginPath();
//     ctx.rect(10, 10,30, 10);
//     ctx.fillStyle = 'red';
//     ctx.lineJoin = 'round';
//     ctx.fill();

//     // ctx.moveTo(20, 10);
//     //      ctx.lineTo(80, 10);
//     //      ctx.quadraticCurveTo(90, 10, 90, 20);
//     //      ctx.lineTo(90, 80);
//     //      ctx.quadraticCurveTo(90, 90, 80, 90);
//     //      ctx.lineTo(20, 90);
//     //      ctx.quadraticCurveTo(10, 90, 10, 80);
//     //      ctx.lineTo(10, 20);
//     //      ctx.quadraticCurveTo(10, 10, 20, 10);
//     //      ctx.stroke();
// }



function GameMenu()
{

    var end_menu = document.querySelector('.end_menu');
    var play_button = document.querySelector('#game_play');
    var the_game_menu = document.getElementById('game_menu');

    the_game_menu.style.top = '20%'
    the_game_menu.style.display = 'block'
    end_menu.style.display = 'none'

    play_button.addEventListener('click', menu_moving);
}

function end_menu(gaming_scores)
{
    var end_menu = document.querySelector('.end_menu');
    var replay_button = document.querySelector('#replay_button');
    var home_button = document.querySelector('.home_button');
    var final_scores = document.querySelector('.final_scores');

    end_menu.style.display = 'block';

    final_scores.innerHTML = gaming_scores;
}

function replay_clicked()
{
    var end_menu = document.querySelector('.end_menu');

    if (end_menu.style.display === 'block')
    {
        end_menu.style.display = 'none';
    } else {
        end_menu.style.display = 'block';
    }
}

function play_clicked()
{
    var the_game_menu = document.getElementById('game_menu');

    if (the_game_menu.style.display === 'block')
    {
        the_game_menu.style.display = 'none';
    } else {
        the_game_menu.style.display = 'block';
    }
}

function menu_moving()
{

    var end_menu = document.querySelector('.end_menu');
    var the_menu = document.getElementById('game_menu');
    let pos = 20;
    let sum = 0;

    end_menu.style.display = 'none'

    let menu_interval = setInterval(frame1, 15);

    function frame1()
    {
        if (pos >= screen.height)
        {
            clearInterval(menu_interval);
            play_clicked();
        } else {
                pos += sum;
                the_menu.style.top = pos + "%";
                sum++;
        }
    }


    let timeInterval = 0;
    let number = 3;
    

    let counterNumber = document.getElementById('counter_start');
    let counterTransform = document.getElementsByClassName('counter-transform');
    counterPlaying();
    
    let numbersCounting  = setInterval(counterPlaying, timeInterval);
    
    
    function counterPlaying()
    {

        if (number == 0)
        {
            clearInterval(numbersCounting);
            game_playing();

        } else 
        {

            counterNumber.innerHTML = number--;
            counterNumber.style.fontSize = '800%';

            setTimeout(() => {
                counterNumber.style.fontSize = '0%';

            }, 300);
            
            if (timeInterval === 0)
            {
                timeInterval += 800;
            }

        }

    }

    // var i = 3;
    //     counter_start();
    //     var number = setInterval(counter_start, 700);
    

    // function counter_start()
    // {
    //     var the_number = document.getElementById('counter_start');
    //     if (i <= 0)
    //     {
    //         clearInterval(number);
    //         i = 3;
    //         the_number.innerHTML = '';
    //         game_playing();
    //     } else {

    //         the_number.innerText = i;
    //         var size = 0;
    //         var the_opacity = 100 ;

    //         let zoom = setInterval(zooming, 1);

    //         function zooming()
    //         {
    //             if (the_number.style.fontSize === 800 + '%' )
    //             {
    //                 clearInterval(zoom);
    //             } else {
    //                 size += 5;
    //                 the_number.style.fontSize = size + '%';
                    
    //                 the_opacity -= 0.8;
    //                 the_number.style.opacity = the_opacity + '%';
    //             }
    //         }
    //         the_number.style.fontSize = 0;
    //         i--;
    //     } 
                       
    // } 
    
}


function game_playing()
{

    var working = 0;
    var track1_virus_index = 0;
    var track2_virus_index = 0;
    var track3_virus_index = 0;
    var track4_virus_index = 0;
    var loop = 1;
    var random_number;
    var num_of_viruses = 0;
    var track1_base = 0;
    var track2_base = 0;
    var track3_base = 0;
    var track4_base = 0;
    var track1_id = 'a0';
    var track2_id = 'b0';
    var track3_id = 'c0';
    var track4_id = 'd0';
    
    var gaming_scores = 0;
    var insert_speed = 300;

    var track1 = document.getElementById('track-1');
    var track2 = document.getElementById('track-2');
    var track3 = document.getElementById('track-3');
    var track4 = document.getElementById('track-4');
    
    var virus_speed = 5;

    var color_of_track1 = document.querySelector('.color_of_track1');
    var color_of_track2 = document.querySelector('.color_of_track2');
    var color_of_track3 = document.querySelector('.color_of_track3');
    var color_of_track4 = document.querySelector('.color_of_track4');

    function update_gaming_scores()
    {
        var scores = document.querySelector('.scores_number');
        //var viruses_color = document.querySelector('.color_of_viruses_changing');
        
        gaming_scores++;
        scores.innerHTML = gaming_scores;

        if (gaming_scores == 50) {
            color_of_track1.style.backgroundColor = '#1C1C1C';
            color_of_track2.style.backgroundColor = '#212121';
            color_of_track3.style.backgroundColor = '#1C1C1C';
            color_of_track4.style.backgroundColor = '#212121';
            
            //viruses_color.style.backgroundColor = red;
        }
        
        if (gaming_scores == 100) {
            color_of_track1.style.backgroundColor = '#E2D3A8';
            color_of_track2.style.backgroundColor = '#EDE1C3';
            color_of_track3.style.backgroundColor = '#E2D3A8';
            color_of_track4.style.backgroundColor = '#EDE1C3';
            
            //viruses_color.style.backgroundColor = red;
        }
        
        if (gaming_scores == 10)
        {
            virus_speed += 0.1
        }
        
        if (gaming_scores == 20)
        {
            virus_speed += 0.1
        }
        
        if (gaming_scores == 30)
        {
            virus_speed += 0.1
        }
        
        if (gaming_scores == 40)
        {
            virus_speed += 0.1
        }
        
        if (gaming_scores == 50)
        {
            virus_speed += 0.1
        }
        
        if (gaming_scores == 70)
        {
            virus_speed += 0.1
        }
        
        if (gaming_scores == 80)
        {
            virus_speed += 0.1
        }
        
        if (gaming_scores == 90)
        {
            virus_speed += 0.1
        }
        
        if (gaming_scores == 100)
        {
            virus_speed += 0.1
        }
    }
            insert_virus();                  
            var new_virus = setInterval(insert_virus, insert_speed--);

            function insert_virus()
            {
       
                let virus = new Array();
                
                random_number = Math.floor((Math.random() * 4) + 1)
       
                switch(random_number)
                {
                    case 1:
                        // console.log('I am case 1');
                            
                            // drawRectangle();
                    // var virus_element = document.querySelectorAll('a');
                    // var track1_count = track1.children.length;
                    // track1_id = 'a' + (track1_count);

                    // virus[track1_virus_index] = document.createElement('a')

                    // virus[track1_virus_index].innerHTML = drawImage();
                  
                    // virus[track1_virus_index].classList.add(track1_id);


                    // var track1_index_virus = track1_count - 1;

                    // // virus_element.forEach(checkClicked)

                    
                        
                    //     //virus_element[track1_index_virus].addEventListener('click', remove_viruse);
                    //     canvas.onmouseover = function() {
                    //         console.log('hmny');
                    //         canvas.remove();
                    //         //virus_element[track1_index_virus].setAttribute('class', 'a0');
                    
                    //         // clearInterval(track1_interval);
                    //         update_gaming_scores();
                    //     };
                    
                    
                //     if (gaming_scores >= 50 && gaming_scores < 100) {
                        
                //         virus[track1_virus_index].style.backgroundColor = '#EAB41B';
                //     }
                    
                //     if (gaming_scores >= 100 && gaming_scores < 150) {
                        
                //         virus[track1_virus_index].style.backgroundColor = '#DB2C2C';
                //     }
                    
                //     if (gaming_scores >= 150 && gaming_scores < 200) {
                        
                //         virus[track1_virus_index].style.backgroundColor = '#DB2C2C';
                //     }


                    
                //     virus[track1_virus_index].classList.add('color_of_viruses_changing');
                    
                  
                //     track1.append(virus[track1_virus_index]);

                //     track1_viruses_moving(track1_virus_index, ++num_of_viruses, track1_base, track1_id, virus_speed);

                //     ++track1_virus_index;
                //     ++track1_base;
                //     working = 1;

                // break;

                case 2:
                        console.log('I am case 2');


                    var track2_count = track2.children.length;
                    track2_id = 'b' + (track2_count);

                    console.log('number of viruses: ' + track2_count);
                    console.log('viruse id: ' + track2_id);

                    virus[track2_count] = document.createElement('b');
        
                    virus[track2_count].classList.add(track2_id);
                    
                    //virus[track2_virus_index].classList.add('color_of_viruses_changing');
                 
                    track2.appendChild(virus[track2_count]);

                    let pos = -.20 * screen.height;


                    let virus_move = setInterval(virusMoving, 10);

                    function virusMoving()
                    {
                        if (pos >= screen.height)
                        {
                            clearInterval(virus_move);
                            stop_inserting(); 
                        } else {
                            pos += virus_speed;
                            virus[track2_count].style.top = pos + "px";
                        }

                       
                        virus.forEach(myFunction);

                        function myFunction()
                        {
                            virus[track2_count].onmouseover = function() {
                                virus[track2_count].remove();
                        
                                clearInterval(virus_move);
                                update_gaming_scores();
                            };
                        }
                            
                        
                        
                    }



                    //track2_viruses_moving(track2_virus_index, ++num_of_viruses, track2_base, track2_id, virus_speed);

                    ++track2_virus_index;
                    ++track2_base;
                    working = 1;

                break;

                case 3:
                        // console.log('I am case 3');
                //     var track3_count = track3.children.length;
                //     track3_id = 'c' + (track3_count);

                //     virus[track3_virus_index] = document.createElement('c')
                   
                //     virus[track3_virus_index].classList.add(track3_id);
                    
                //     if (gaming_scores >= 50 && gaming_scores < 100) {
                        
                //         virus[track3_virus_index].style.backgroundColor = '#EAB41B';
                //     }
                    
                //     if (gaming_scores >= 100 && gaming_scores < 150) {
                        
                //         virus[track3_virus_index].style.backgroundColor = '#DB2C2C';
                //     }
                    
                //     if (gaming_scores >= 150 && gaming_scores < 200) {
                        
                //         virus[track3_virus_index].style.backgroundColor = '#DB2C2C';
                //     }
                    
                //     virus[track3_virus_index].classList.add('color_of_viruses_changing');
                
                //     track3.append(virus[track3_virus_index]);

                //         track3_viruses_moving(track3_virus_index, ++num_of_viruses, track3_base, track3_id, virus_speed);

                //     ++track3_virus_index;
                //     ++track3_base;
                //     working = 1;

                // break;

                case 4:
                        // console.log('I am case 4');

                //     var track4_count = track4.children.length;
                //     track4_id = 'd' + (track4_count);

                //     virus[track4_virus_index] = document.createElement('d')

                //     virus[track4_virus_index].classList.add(track4_id);
                    
                //     if (gaming_scores >= 50 && gaming_scores < 100) {
                        
                //         virus[track4_virus_index].style.backgroundColor = '#EAB41B';
                //     }
                    
                //     if (gaming_scores >= 100 && gaming_scores < 150) {
                        
                //         virus[track4_virus_index].style.backgroundColor = '#DB2C2C';
                //     }
                    
                //     if (gaming_scores >= 150 && gaming_scores < 200) {
                        
                //         virus[track4_virus_index].style.backgroundColor = '#DB2C2C';
                //     }
                    
                //     virus[track4_virus_index].classList.add('color_of_viruses_changing');
                //     track4.append(virus[track4_virus_index]);

                //         track4_viruses_moving(track4_virus_index, ++num_of_viruses, track4_base, track4_id, virus_speed);

                //     ++track4_virus_index;
                //     ++track4_base;
                //     working = 1;

                // break;
                }
                
            }

            var stop_signal = 0;

            function stop_inserting()
            {
                var track1 = document.getElementById('track-1');
                var track2 = document.getElementById('track-2');
                var track3 = document.getElementById('track-3');
                var track4 = document.getElementById('track-4');

                if (stop_signal === 0) {

                    track1.innerHTML = '';
                    track2.innerHTML = '';
                    track3.innerHTML = '';
                    track4.innerHTML = '';

                    clearInterval(new_virus);
                    end_menu(gaming_scores);
                
                    stop_signal++;

                }
            }


function track1_viruses_moving(track1_virus_index, num_of_viruses, track1_base, track1_id, virus_speed)
{
    
    if (track1_virus_index >= track1_base)
    {
        var virus_element = document.querySelectorAll('a');
        var track1 = document.getElementById('track-1');

        //virus_element[track1_index_virus].style.top = '80%';
        
        // if (virus_element[track1_index_virus].style.top > screen.height)
        // {
        //     console.log('hmny');
        //     // clearInterval(track2_interval);
        //     stop_inserting();

        // }


        var track1_count = track1.children.length;
        var track1_index_virus = track1_count - 1;

        virus_element.forEach(checkClicked)

        function checkClicked()
        {
            //virus_element[track1_index_virus].addEventListener('click', remove_viruse);
            virus_element[track1_index_virus].onmouseover = function() {
                virus_element[track1_index_virus].remove();
                //virus_element[track1_index_virus].setAttribute('class', 'a0');
        
                clearInterval(track1_interval);
                update_gaming_scores();
            };
        }
       
       
        
        
    }
    
}

function track2_viruses_moving(track2_virus_index, num_of_viruses, track2_base, id, virus_speed)
{
    
    if (track2_virus_index >= track2_base)
    {

        var virus_element = document.querySelectorAll('b');
        var track2 = document.getElementById('track-2');

        var track2_count = track2.children.length;
        var track2_index_virus = track2_count - 1;

        virus_element.forEach(myFunction)

        function myFunction()
        {
            //virus_element[track2_index_virus].addEventListener('click', remove_viruse);
            virus_element[track2_index_virus].onmouseover = function() {
                virus_element[track2_index_virus].remove();
                virus_element[track2_index_virus].setAttribute('class', 'b0');
        
                clearInterval(track2_interval);
                update_gaming_scores();
            };
        }

            
        var loop = 1;
        let pos = -.20 * screen.height;

        
        var track2_interval = setInterval(frame_of_virus, 1);

            function frame_of_virus()
            {
                
                if (pos >= screen.height)
                {            
                    clearInterval(track2_interval);
    
                        stop_inserting(); 

                } else {
                    pos += virus_speed;
                    virus_element[track2_index_virus].style.top = pos + "px";
                }

            }      
        
    }
    
    /*function remove_viruse()
    {
        virus_element[track2_index_virus].remove();
        virus_element[track2_index_virus].setAttribute('class', 'b0');
        clearInterval(track2_interval);
        update_gaming_scores();
    }  */
}

function track3_viruses_moving(track3_virus_index, num_of_viruses, track3_base, id, virus_speed)
{
    
    if (track3_virus_index >= track3_base)
    {

        var virus_element = document.querySelectorAll('c');
        var track3 = document.getElementById('track-3');

        var track3_count = track3.children.length;
        var track3_index_virus = track3_count - 1;

        virus_element.forEach(myFunction)

        function myFunction()
        {
            //virus_element[track3_index_virus].addEventListener('click', remove_viruse);
            virus_element[track3_index_virus].onmouseover = function() {
                virus_element[track3_index_virus].remove();
                virus_element[track3_index_virus].setAttribute('class', 'c0');
        
                clearInterval(track3_interval);
                update_gaming_scores();
            };
        }

            
        var loop = 1;
        let pos = -.20 * screen.height;

        
        var track3_interval = setInterval(frame_of_virus, 1);

            function frame_of_virus()
            {
                
                if (pos >= screen.height)
                {            
                    clearInterval(track3_interval);
                    
                        stop_inserting(); 


                } else {
                    pos += virus_speed;
                    virus_element[track3_index_virus].style.top = pos + "px";
                    //console.log(virus_element[virus_index]);
                }

            }
        
        
    }
    
    /*function remove_viruse()
    {
        virus_element[track3_index_virus].remove();
        virus_element[track3_index_virus].setAttribute('class', 'c0');
        clearInterval(track3_interval);
        update_gaming_scores();
    }   */
}

function track4_viruses_moving(track4_virus_index, num_of_viruses, track4_base, id, virus_speed)
{

    if (track4_virus_index >= track4_base)
    {

        var virus_element = document.querySelectorAll('d');
        var track4 = document.getElementById('track-4');

        var track4_count = track4.children.length;
        var track4_index_virus = track4_count - 1;

        virus_element.forEach(myFunction)

        function myFunction()
        {
            //virus_element[track4_index_virus].addEventListener('click', remove_viruse);
            virus_element[track4_index_virus].onmouseover = function() {
                virus_element[track4_index_virus].remove();
                virus_element[track4_index_virus].setAttribute('class', 'd0');
        
                clearInterval(track4_interval);
                update_gaming_scores();
            };
        }

        var loop = 1;
        let pos = -.20 * screen.height;

        
        var track4_interval = setInterval(frame_of_virus, 1);

            function frame_of_virus()
            {
                
                if (pos >= screen.height)
                {            
                    clearInterval(track4_interval);
 
                        stop_inserting(); 
                
                } else {
                    pos += virus_speed;
                    virus_element[track4_index_virus].style.top = pos + "px";
                }

            }
        
        
    }
    
    /*function remove_viruse()
    {
        virus_element[track4_index_virus].remove();
        virus_element[track4_index_virus].setAttribute('class', 'd0');

        clearInterval(track4_interval);
        update_gaming_scores();
    }  */ 
}

}


