export{galeryContent};

var galeryContent = ( function () {
    var container = document.querySelector('.container');
    var galeryDiv =  document.createElement('div');
    galeryDiv.classList.add('contentInfo');
    galeryDiv.classList.add('galeryInfo');
    for (let index = 1; index < 7; index++) {
        addGaleryImage(`./assets/images/galery${index}.jpg`);
        
    }
    function addGaleryImage(route) {
        const image =  document.createElement('img');
        image.src = route;
        image.classList.add("galeryImage");
        galeryDiv.appendChild(image);
    }
    container.appendChild(galeryDiv);

    //hide all content
    var content = document.querySelectorAll('.contentInfo');
    content[3].style.display = 'none';

    function infoGalery() {
        return console.log(content[3]);
    }
    return {
        infoGalery
    };
})();