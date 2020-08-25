export{historyContent};

var historyContent = ( function () {

    var container = document.querySelector('.container');
    var div = document.createElement('div');
    var articule = document.createElement('article');
    div.classList.add('contentInfo');
    div.id = 'historyFrame';
    const textArt = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.`
    
    var articuleText = document.createTextNode(textArt);
    var h1Articule = document.createElement('h1');
    var h1ArticuleText = document.createTextNode('This is our history');
    var pArticule = document.createElement('p');
    var historyImage = document.createElement('img');
    historyImage.src = './assets/images/pexels-snapwire-245535.jpg';
    
    historyImage.id = 'historyImage';
    
    h1Articule.appendChild(h1ArticuleText);
    articule.appendChild(h1Articule);
    pArticule.appendChild(articuleText)
    articule.appendChild(pArticule);
    div.appendChild(articule);
    div.appendChild(historyImage);
    container.appendChild(div);
    
    //hide all content
    var content = document.querySelectorAll('.contentInfo');
    content[2].style.display = 'none';
    
    function infoHistory() {
        return console.log(div);
    }

    return {
        infoHistory
    };
})();