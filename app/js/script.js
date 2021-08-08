
let accQues = document.querySelectorAll('.accordion__question');
let accItem =  document.querySelectorAll('.accordion__item');
let accordionCollapse =  document.querySelectorAll('.accordion__collapse');

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
