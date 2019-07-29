
    let easyText = ['a dog', 'a pencil', 'a tree', 'a happy face', 'a doodle', 'a series of lines',' a piece of fruit', 'a jellyfish', 'a fish', 'a whale', 'a candle','a stick figure', 'a rainbow','a flower', 'a cloud', 'an object with a face', ' a fork', 'a teacup', 'a cup of coffee', 'a houseplant', 'cake', ' housekeys', ' a piece of toast', 'gummy bears', ' a planet', 'a hot air balloon', 'an icecream cone', 'an earthworm', 'the sun and moon', 'a house', 'fried chicken', 'chapstick', 'a tent', 'a lego', 'a rubber duck', 'a pencil', 'game pieces', 'an old chair','a volcano', 'a pinecone', 'a seashell', 'a tool', 'a hard candy', 'a pair of glasses', 'a banana peel'   ];
    let mediumText = ['a piece of draped fabric', 'a butterfly', 'a smiling face', 'an old pair of shoes', 'a brown paper bag', 'a Zentangle', 'a random shape and then fill it in', 'a phrase', ' your favorite song', 'the wind', 'a still life', 'your favorite animal', 'something small', 'graffiti letters', 'an elegant letter', 'a galaxy', 'a stipple sky', 'a superhero', ' a study of ears', 'a series of bells', 'a robot', 'a faery circle', 'a dandy lion', 'a cat in boots', 'the rain', 'a hand lettered quote', 'a compass rose', 'a landscape using geometric shapes', 'a viking', 'a starship', 'underwater poppies', 'a stack of books', 'an old camera', 'ocean waves', 'a bicycle', 'your family' ];
    let hardText = ['the boogie man', 'your favorite villian', 'a self portrait','a turtle with an island on its back','your astrological sign as a creature','a ballerina in pose', 'a broken piece of china', 'the skeletal and muscle structure of an arm', 'an animal skull', 'an old camera', 'a mandala', 'a hand', 'a mermaid','an elemental dragon', 'a glass dish', 'an emotion', 'top view of a room', 'a galaxy being born', 'a forest spirit', 'a chimera', 'east of the sun, west of the moon',  'a personal logo', 'dandelion wishes', 'fishing', 'day and night', 'the feeling of a song', 'a planet party', 'Bob Ross painting', 'a stock photo', 'Cthulu' ];
    
    let resetTxt = 'Pick a level of difficulty and generate a prompt to draw';

    let close = document.querySelector("#close");


    let buttons = function  (){

      let logo =  document.getElementById('menu');
      let mediumBtn =  document.getElementById('mediumbtn');
      let hardBtn =  document.getElementById('hardbtn');
      let mainBtn = document.getElementById('mainbtn');
      let resetBtn = document.getElementById('resetbtn');
      let easyBtn =  document.getElementById('easybtn');


      mediumBtn.addEventListener('click', function() { 
        promptTxt.innerHTML =  promptTxt.innerHTML = 'Draw ' + mediumText[Math.floor(Math.random()* mediumText.length)];
        mainBtn.style.display = "none";
        resetBtn.style.display = "block";
        promptTxt.style.color = "#AC4167";
      });
      hardBtn.addEventListener('click', function() { 
        promptTxt.innerHTML =  promptTxt.innerHTML = 'Draw ' + hardText[Math.floor(Math.random()* hardText.length)];
        mainBtn.style.display = "none";
        resetBtn.style.display = "block";
        promptTxt.style.color = "#AC4167";
      });
      resetBtn.addEventListener('click', function() { 
        promptTxt.innerHTML =  promptTxt.innerHTML = resetTxt;
        mainBtn.style.display = "block";
        resetBtn.style.display = "none";
        promptTxt.style.color = "black";
      });

      easyBtn.addEventListener('click', function() { 
        promptTxt.innerHTML =  promptTxt.innerHTML = 'Draw ' + easyText[Math.floor(Math.random()* easyText.length)];
        mainBtn.style.display = "none";
        resetBtn.style.display = "block";
        promptTxt.style.color = "#AC4167";
      });




      
      }




     
      


    window.onload = buttons;


