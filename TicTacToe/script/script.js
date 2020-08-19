var selector = (()=>{
    function getElements(element) {
        var elements = document.querySelectorAll(element);
        return elements;
    }
    return {
        getElements,
    };
})();

var player = (num) => {
    var name = prompt(`Player${num}, type your name: `);
    if (num == 1) {
        var choice = prompt(" X or O?");
    } else {
        var choice = "";
    }
    return {
        name,
        choice
    }
}

var game = (() => {
    var spaces = selector.getElements(".space");
    
    var player1 = player(1);
    var player2 = player(2);
    if (player1.choice=="x") {
        player2.choice = "o";
    } else {
        player2.choice = "x";
    }
    var index = 0;
    var counter = 0;
    var score;
    var players = [player1, player2]
    console.log(spaces);
    function cleaner() {
        spaces.forEach(space => {
            space.id = "";
            space.style.transform = "scale(1)";
            space.style.border = "";
        });
    }

    // winner function
    function winner() {
        //horizontal winner
        var i = 0;
        while(i <= 6){
            if (spaces[i].id==spaces[i+1].id && spaces[i].id==spaces[i+2].id 
                && spaces[i].id != ""){
                spaces[i].style.transform = "scale(1.3)";
                spaces[i].style.border = "0px";
                spaces[i+1].style.transform = "scale(1.3)";
                spaces[i+1].style.border = "0px";
                spaces[i+2].style.transform = "scale(1.3)";
                spaces[i+2].style.border = "0px";
                return spaces[i].id;
            }
            i += 3;
        }

        //vertical winner
        i = 0;
        while(i <= 2){
            if (spaces[i].id==spaces[i+3].id && spaces[i].id==spaces[i+6].id 
                && spaces[i].id != ""){
                spaces[i].style.transform = "scale(1.3)";
                spaces[i].style.border = "0px";
                spaces[i+3].style.transform = "scale(1.3)";
                spaces[i+3].style.border = "0px";
                spaces[i+6].style.transform = "scale(1.3)";
                spaces[i+6].style.border = "0px";
                return spaces[i].id;
            }
            i++;
        }

        //diagonal winner
        i = 0;
        while(i <= 2){
            if (spaces[i].id==spaces[4].id && spaces[i].id==spaces[i==0?8:6].id 
                && spaces[i].id != ""){
                spaces[i].style.transform = "scale(1.3)";
                spaces[i].style.border = "0px";
                spaces[4].style.transform = "scale(1.3)";
                spaces[4].style.border = "0px";
                spaces[i==0?8:6].style.transform = "scale(1.3)";
                spaces[i==0?8:6].style.border = "0px";
                return spaces[i].id;
            }
            i += 2;
        }
    }

    spaces.forEach ( space => {
        space.onclick = function() {

            if(!space.id) {
                space.id = players[index].choice;
                if(index==0) index = 1;
                else index = 0;
                counter++;
                console.log(counter);
            }
            if (counter==9) {
                alert("it's a tie.")
                cleaner();
                counter = 0;
            } 
            score = winner();
            if (score) {
                counter = 0;
                if(score == player1.choice) alert(`${player1.name} Won!`);
                else alert(`${player2.name} Won!`);
                cleaner();
            }
        }   
    });

})();


