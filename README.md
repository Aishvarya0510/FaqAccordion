# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![desktop.png](https://github.com/Aishvarya0510/FaqAccordion/blob/master/desktop.png)

![mobile-responsive.png](https://github.com/Aishvarya0510/FaqAccordion/blob/master/mobile-responsive.png)


### Links

- Live Site URL: (https://faq-accordion-aish.netlify.app/)

## My process
At first I completed  all the styling and responsive development. After then, i started working on javascript. I searched different accordion examples in codepen and finally i thought to implement bootstrap accordion on my own.
### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- vanilla javascript
- Mobile-first workflow


### What I learned

Recreated bootstrap accordion in vanilla javascript.

- toggle functionality
- Animation with toggle Functionality

```js
document.querySelectorAll('.accordion__question').forEach((item) => {
    item.addEventListener('click', toggleFunction, false);
});

function toggleFunction() {
    for (let i =0; i < accItem.length; i++) {

        setTimeout(() => {
            accordionCollapse[i].className = 'accordion__collapse collapsing';
            accordionCollapse[i].style.height = '0px';
            accordionCollapse[i].className = 'accordion__collapse collapse';
            accordionCollapse[i].style.height = '';
            accQues[i].className = 'accordion__question';
        }, 2);

    }
    let accCollapse = this.nextElementSibling;

    if(accCollapse.className === 'accordion__collapse collapse') {
        accCollapse.style.display = 'block';

        setTimeout(() => {
            accCollapse.style.height = accCollapse.scrollHeight + 'px';
            accCollapse.style.display = '';
        },400);
        setTimeout(() => {
            accCollapse.classList = 'accordion__collapse collapsing';
        },15);
        setTimeout(() => {
            accCollapse.classList = 'accordion__collapse open';
            this.className = 'accordion__question open';
        },600);

    }
    else {
        toggleCollapse(accCollapse);
    }

}
function toggleCollapse(accCollapse) {

    setTimeout(() => {
        accCollapse.className = 'accordion__collapse collapsing';
        accCollapse.style.height = '0px';
        this.className = 'accordion__question';
    }, 1);
    setTimeout(() => {
        accCollapse.className = 'accordion__collapse collapse';
        accCollapse.style.height = '';
        this.className = 'accordion__question';
    }, 300);

}

```
### Continued development

I would like to create more components with vanilla javascript and custom css (model, carousal etc..)

### Useful resources

- https://getbootstrap.com/docs/5.0/components/accordion/ - I took bootstrap accordion as an example and recreated with custom js and scss
- https://css-tricks.com/ - I took css tricks to refer some properties syntax.

## Author

- Twitter - [@aishs1231](https://twitter.com/aishs1231)

## Acknowledgments

I would like to thank frontend Mentor for this challenge. (https://www.frontendmentor.io/)
