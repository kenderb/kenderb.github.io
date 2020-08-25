export{menuContent};

var menuContent = ( function () {
    var container = document.querySelector('.container');
    var menuContent =  document.createElement('div');
    menuContent.classList.add('contentInfo');
    menuContent.classList.add('foodMenu');
    createImage('/dist/assets/images/food_01.jpg');
    createImage('/dist/assets/images/food_02.jpg');
    createImage('/dist/assets/images/food_04.jpg');
    container.appendChild(menuContent);
    function createImage(rute) {
        let image =  document.createElement('img');
        image.src = rute;
        image.classList.add('menuImage');
        menuContent.appendChild(image);
    }
    //hide all content
    var content = document.querySelectorAll('.contentInfo');
    content[1].style.display = 'none';
    function infoMenu() {
        return console.log(content[1]);
    }
    return {
        infoMenu
    };
})();