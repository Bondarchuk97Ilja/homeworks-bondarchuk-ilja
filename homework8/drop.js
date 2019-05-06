let getUl = document.querySelector('.menu');

getUl.addEventListener('click', ({target}) =>{
    const getDown = getUl.querySelector('.down')

    if (getDown){
        getDown.classList.remove('down')
        getDown.classList.add('d-none')
    }

    let getLi;
    if (target.tagName === 'Li') {
        getLi = target
    } else {getLi = target.closest('li')
    }

    const liDown = getLi.querySelector('.dropdown-menu')
    if(liDown){
        liDown.classList.add('down')
        liDown.classList.remove('d-none')
    } else {
        alert('click on drops')
    }

    if (liDown === getDown){
        getDown.classList.remove('down')
        getDown.classList.add('d-none')
    }

});