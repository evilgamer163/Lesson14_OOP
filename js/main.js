'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
            let newClass = this.selector.slice(1);
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
            let newClass = this.selector.slice(1);
            paragraph.classList.add(newClass);
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
    
    const obj = new DomElement('.block', '100px', '100px', 'red', '20px');

    let block = obj.createElem('Hello, OOP...');
    block = document.querySelector('.block');
    block.style.position = 'absolute';

    document.addEventListener('keydown', (e) => {
        switch(e.keyCode) {
            case 37:
                block.style.left = '10px';
                block.style.right = '';
                break;
            case 38:
                block.style.top = '10px';
                block.style.bottom = '';
                break;
            case 39:
                block.style.right = '10px';
                block.style.left = '';
                break;
            case 40:
                block.style.bottom = '10px';
                block.style.top = '';
                break;
        }
    });
});
