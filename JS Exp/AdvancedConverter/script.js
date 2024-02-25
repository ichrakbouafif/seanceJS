(function(){
    'use strict';
    
    let convertType = "Miles";
    let heading = document.querySelector('h1');
    let intro = document.querySelector('p');
    let answerDiv = document.getElementById('answer');
    let form = document.getElementById('convert');

    document.addEventListener('keydown',function(e){
        let key = e.code;
        console.log(key);
        if (key === 'KeyK'){
            convertType = 'Kilometers ';
            heading.innerHTML = "Kilometers to Miles Converter";
            intro.innerHTML = "Type in a number of kilometers and convert the distance to miles";

        }
        else if (key === 'KeyM'){
            convertType = 'Miles';
            heading.innerHTML = "Miles to Kilometers Converter";
            intro.innerHTML = "Type in a number of miles and convert the distance to kilometers";
        }
    });
    form.addEventListener('submit',function(e){
        e.preventDefault();
        let distance = parseFloat(document.getElementById('distance').value);
        if (distance){
            if (convertType == 'Miles'){
                let answer = (distance * 1.609344).toFixed(3);
                answerDiv.innerHTML = `${distance} miles converts to ${answer} kilometers`
            }
            else {
                let answer = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML = `${distance} kilometers converts to ${answer} miles`
            }

        }
        else {
            answerDiv.innerHTML = `<h2>Please provide a number !</h2>`;
        }

    });
})();

