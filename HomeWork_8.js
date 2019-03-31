//1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
pressBtnMsg()

function pressBtnMsg(){
    let btn = document.body.querySelector('#btn-msg');
    let msg = btn.getAttribute('data-text');
    btn.addEventListener('click',function(){alert(msg);});
}

//2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.

mouseOnBtnMsg()

function mouseOnBtnMsg(){
    let btn = document.body.querySelector('#btn-msg');
    let changeColor = function(){
        btn.setAttribute('style','background-color: red');
    }
    let changeColorDelete =function(){
        btn.removeAttribute('style');
    }
    btn.addEventListener('mouseover',changeColor)
    btn.addEventListener('mouseout', changeColorDelete);
    //Почему у меня не срабатывал вот этот вариант?
    //btn.removeEventListener('mouseout',changeColor)
}




//3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.

showMeName()

function showMeName(){
    let doc = document.body;
    let hereWeAreShowTag = document.querySelector('#tag');
    console.log(hereWeAreShowTag)
    
    doc.addEventListener('click', function(event){
        let elementName = event.target.tagName;
        hereWeAreShowTag.textContent =  'Tag: ' + elementName;
        //hereWeAreShowTag.insertAdjacentHTML('beforeend',elementName);
        console.log(hereWeAreShowTag)
    })
}


//4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д 

generateLi()

function generateLi(){

    let btn = document.querySelector('#btn-generate')
    btn.addEventListener('click', function addLi(){
        let list = document.querySelector('ul');
        let newLi = '<li>Item ' +((list.children.length)+1) +'</li>'
        list.insertAdjacentHTML("beforeend",newLi)
        console.log(list)
    })
}


//drop-down


dropdownMenu()

function dropdownMenu(){

let clickZone = document.querySelector('ul');

clickZone.addEventListener('click', function whereClick(){
    let nameOfSelector = event.target.parentNode
    console.log(nameOfSelector)

    if(nameOfSelector.getAttribute('class') === 'dropdown-item'){

    if(nameOfSelector.getAttribute('class') != 'd-none'){
        nameOfSelector.querySelector('div').setAttribute('class', 'd-none')
        nameOfSelector.querySelector('div').setAttribute('class','dropdown-menu');
        console.log('Close')
    }


    if(nameOfSelector.getAttribute('class') === 'd-none'){
        nameOfSelector.querySelector('div').removeAttribute('class')
        nameOfSelector.querySelector('div').setAttribute('class','dropdown-menu');
        console.log('Open')
        //console.log(nameOfSelector)
    }
    }
    
 

  
   // console.log(nameOfSelector)
} )