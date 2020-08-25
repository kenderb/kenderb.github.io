export {homePage};

var homePage = (function () {
    //get the container
    var container = document.querySelector(".container")

    //Create the header
    var header = document.createElement("header");
    header.classList.add('head');
    header.classList.add('content');
    
    //Create the logo Div tag
    var logoDiv = document.createElement("div");
    logoDiv.classList.add('item');

    //Create the nav bar
    var navBar = document.createElement('nav');
    navBar.classList.add('item');

    //Create the info Div
    var infoDivPhone = document.createElement("div");
    infoDivPhone.classList.add('item');
    infoDivPhone.classList.add('info');
    infoDivPhone.id = 'phone'

    var phoneIcon = document.createElement('img');
    phoneIcon.id = 'phoneIcon';
    phoneIcon.src = './assets/images/phone.png';

    var infoDivPhoneText = document.createTextNode('01800-857865');
    infoDivPhone.appendChild(phoneIcon);
    infoDivPhone.appendChild(infoDivPhoneText);
    
    //create a image tag
    var logoImg = document.createElement('img');
    
    logoImg.src = './assets/images/logo.png';
    logoImg.alt = 'logo';
    logoImg.id = 'logo';

    //Create menu spans
    var menuSpan = document.createElement('span');
    menuSpan.classList.add('menu');
    menuSpan.classList.add('hover');
    menuSpan.id = 'menu';

    var historySpan = document.createElement('span');
    historySpan.classList.add('menu');
    historySpan.id = 'history';

    var galerySpan = document.createElement('span');
    galerySpan.classList.add('menu');
    galerySpan.id = 'galery';

    var contactSpan = document.createElement('span');
    contactSpan.classList.add('menu');
    contactSpan.id = 'contact';

    //Add text to the menu
    var menuSpanText = document.createTextNode('Menu');
    menuSpan.appendChild(menuSpanText);

    var historySpanText = document.createTextNode('Our history');
    historySpan.appendChild(historySpanText);

    var galerySpanText = document.createTextNode('Galery');
    galerySpan.appendChild(galerySpanText);

    var contactSpanText = document.createTextNode('Contact');
    contactSpan.appendChild(contactSpanText);

    //Create a content section
    var sectionContent =  document.createElement('section');
    sectionContent.classList.add('content');
    sectionContent.classList.add('contentInfo');
    sectionContent.id = 'section1';

    

    //create h1
    var h1 = document.createElement('h1');
    var textH1 = document.createTextNode('You are especial for us.');
    h1.appendChild(textH1);

    //Create a p tag for the section
    var TextPVar = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
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
                    mollit anim id est laborum.`;

    var pSection =  document.createElement('p');
    var pText = document.createTextNode(TextPVar)
    pSection.appendChild(pText);

    //Div for a read more botton

    var divMore = document.createElement('div');
    var spanBotton = document.createElement('span');
    spanBotton.classList.add('info');
    var textBotton =  document.createTextNode('Read more');
    spanBotton.appendChild(textBotton);
    divMore.appendChild(spanBotton);

    //Add to the header
    header.appendChild(logoDiv);
    header.appendChild(navBar);
    header.appendChild(infoDivPhone);

    //Add logo to the div tag
    logoDiv.appendChild(logoImg);

    //Add spans to the nav Bar
    navBar.appendChild(menuSpan);
    navBar.appendChild(historySpan);
    navBar.appendChild(galerySpan);
    navBar.appendChild(contactSpan);

    // Add content to the section tag
    sectionContent.appendChild(h1);
    sectionContent.appendChild(pSection);
    sectionContent.appendChild(divMore);

    //Add to the container
    container.appendChild(header);
    container.appendChild(sectionContent);

    //reload page on click
    logoImg.onclick = function() {
        location.reload();
    }


    function outPut () {
        return console.log(container);
    }
    return {
        outPut
    }
})();