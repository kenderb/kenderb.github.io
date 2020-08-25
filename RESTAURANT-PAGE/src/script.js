export {navButton};

var navButton = (function () {
    var menu = document.querySelectorAll('.menu');
    onclickAction(menu[0], 1, '/dist/assets/images/Backgorund4.jpg');
    onclickAction(menu[1], 2, '/dist/assets/images/Backgorund4.jpg');
    onclickAction(menu[2], 3, '/dist/assets/images/Backgorund4.jpg');
    onclickAction(menu[3], 4, '/dist/assets/images/Backgorund4.jpg');

    function onclickAction (item, position, bg) {
        item.onclick = function() {
            var content = document.querySelectorAll('.contentInfo');
            content[position].style.display = 'grid';
            var body = document.querySelector('body');
            body.style.backgroundImage = `url(${bg})`;
    
            item.style.backgroundColor = '#ff9035';
            item.style.color = 'rgb(53, 7, 1)';
            console.log(content);
            for (let index = 0; index < content.length; index++) {
                if (index != position) {
                    content[index].style.display = 'none';
                }
                if (index != position-1) {
                    menu[index].style.color = '#ff9035';
                    menu[index].style.backgroundColor = '';
                }
            }
        };
    }

    function menuInfo () {
        return console.log(menu);
    }
    return  {
        menuInfo
    }
})()