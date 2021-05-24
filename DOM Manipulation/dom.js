const paragraphEl = document.createElement('p');
paragraphEl.textContent = ' Hey i\'m red!'
paragraphEl.style.color = 'red';
document.body.append(paragraphEl);

const heading3 = document.createElement('h3');
heading3.textContent = ' i\'m blue h3';
heading3.style.cssText = 'color: blue';
document.body.append(heading3);


// creat a div with h1 and p
const div = document.createElement('div')
div.setAttribute('style', ' background-color: pink; border: 3px solid black');
const heading1 = document.createElement('h1');
heading1.textContent = 'I a\'m in div';
const divParagraph = document.createElement('p');
divParagraph.textContent = 'ME TOO';
div.appendChild(heading1);
div.appendChild(divParagraph);
document.body.append(div)




