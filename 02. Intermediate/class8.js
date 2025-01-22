/*=============================================
=            Section DOM            =
=============================================*/
// seLECTING ELEMENT IN DOMt
const hello = document.getElementById('hello');
hello.textContent = 'my world';

const tagname = document.getElementsByTagName('h1');

tagname[0].style.backgroundColor = 'crimson';
tagname[0].style.color = 'white';
tagname[0].style.fontSize = '30px';
tagname[0].style.textAlign = 'center';
tagname[0].style.padding = '5px 10px';
tagname[0].style.borderRadius = '5px';
tagname[0].style.margin = '10px';

/*=====  End of Section DOM  ======*/