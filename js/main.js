'use strict';

const DomElement = function(selector, height, width, bg, fonSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fonSize = fonSize;
};

DomElement.prototype.createElem = function(txt) {
    if(this.selector[0] === '.') {
        const div = document.createElement('div');
        let newClass = this.selector.split('.')[1];
        div.classList.add(newClass);
        div.style.cssText = `
            height: ${this.height};
            width: ${this.width};
            background: ${this.bg};
            font-size: ${this.fonSize};
        `;
        div.textContent = txt;
        document.body.append(div);

    } else if(this.selector[0] === '#') {
        const paragraph = document.createElement('p');
        let newID = this.selector.split('#')[1];
        paragraph.setAttribute('id', newID);
        paragraph.style.cssText = `
            height: ${this.height};
            width: ${this.width};
            background: ${this.bg};
            font-size: ${this.fonSize};
        `;
        paragraph.textContent = txt;
        document.body.append(paragraph);
    }
};



const obj = new DomElement('.thisblovk', '100px', '100px', 'red', '20px');

obj.createElem('Hello, OOP...');