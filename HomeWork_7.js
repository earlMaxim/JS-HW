//1 1. Найти параграф и получить его текстовое содержимое (только текст!)

let paragraph = document.body.querySelector('p')
textOnly = paragraph.textContent;
console.log(textOnly);

//2 Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0)ю

console.log(infoAboutNode('mark'))

function infoAboutNode (nodeName){
    let node = document.querySelector(nodeName);
    let typeOfNode = node.nodeType;
    let nameOfNode = node.nodeName;
    let countOfChild = node.children.length;
    if(countOfChild>0){return("Тип узла - "+typeOfNode +" "+"Имя узла - "+ nameOfNode + " "+"Количество детей - "+ countOfChild)}
    else {return 0}
}

//3  Получить массив, который состоит из текстового содержимого ссылок внутри списка: 
getTextFromUl('ul') 

function getTextFromUl(nodeName){
    let result=[];
    let countOfChild = document.querySelector(nodeName).children.length;
    let list = document.querySelector(nodeName).children[0].children[0].textContent
    for(let i=0; i<countOfChild; i++){
        result.push(document.querySelector(nodeName).children[i].children[0].textContent)
    }
    console.log(result);
}

//4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). 
changeChildrens('p')

function changeChildrens (nodeName){
    //получаем нужный элемент 
    let list = document.querySelector(nodeName);
    console.log(list);
    countOfChildrens(list)
    }
    function countOfChildrens(list){
    let countOfChildNodes = list.childNodes.length; 
    for(let i =0; i<countOfChildNodes; i++){
        if(list.childNodes[i].nodeType == 3){
            list.childNodes[i].data='-text-';
        }
        //Когда мы видим узел, то рекурсивно вызываем фунцию снова, чтобы зайти в него
        if(list.childNodes[i].nodeType == 1){
            countOfChildrens(list.childNodes[i])
        }
    }
}

//. Найти в коде список ul и добавить класс “list”

addList('ul') 

function addList(nodeName){
    let countOfChild = document.querySelector(nodeName).children.length;
    for(let i=0; i<countOfChild; i++){
        document.querySelector(nodeName).children[i].children[0].classList.add("list")
    }
}
console.log(document.body)

//2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

linkAfterUl ('ul');

function linkAfterUl(someNode){
    //находим ul
    let list = document.body.querySelector(someNode);
    //берем его родителя, чтобы глянкть на все элементы на этом уровне
    list = list.parentNode.children;
    let i=0;
    //находим место ul, чтобы найти следующую ссылку
    for(i; i < list.length; i++){
        if(someNode.toUpperCase() == list[i].nodeName){
            break
        }
    }
    // находим a
    for(i; i < list.length; i++){
        if(list[i].nodeName == "A"){
            list[i].classList.add("link");
            break
        }
    }
    console.log(list);
}


//На li через один (начиная с самого первого) установить класс “item”

addList('ul') 

function addList(nodeName){
    let countOfChild = document.querySelector(nodeName).children.length;
    for(let i=0; i<countOfChild; i++){
        if(i%2==0){
        document.querySelector(nodeName).children[i].children[0].classList.add("item")}
    }
    console.log(document.querySelector(nodeName))
}

//На все ссылки в примере установить класс “custom-link”

addLabelToAllNode('a');

function addLabelToAllNode(someNode){
    let list = document.querySelectorAll(someNode);
    for(let i=0; i<list.length; i++){
        list[i].classList.add("custom-link")
    }
    console.log(list)
}

//Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
//Передаем желаемое количество вставок
addNewLi(3)

function addNewLi(number){
    let list = document.querySelector('ul');
    console.log(list)
    for(let i=0; i<number;i++){
        list.insertAdjacentHTML('beforeend',"<li class=”new-item”>item "+(i+number+2)+ "</li>");
    }
}


//В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). 

addStrongToA()

function addStrongToA(){
    let list = document.querySelector('ul').querySelectorAll('a');
   // list.insertAdjacentHTML('afterbegin','<strong>')
    for(let i=0; i<list.length;i++){
        list[i].insertAdjacentHTML('afterbegin','<strong>')
    }
    console.log(list)
}


//3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 

addImg()

function addImg(){
    let list = document.body.firstElementChild;
    let picture = document.createElement('img')
    document.body.insertBefore(picture, list);
    list = document.body;
    console.log(list)
    list.firstElementChild.setAttribute('alt',"test");
    list.firstElementChild.setAttribute('src',"../../../../Downloads/test.jpg");
    console.log(document.body)
}

//4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green

changeMark()

function changeMark(){
    let list = document.body.querySelector('mark');
    list.insertAdjacentText('beforeend','green');
    list.classList.add("green")
    console.log(list);
}

//Отсортировать li внутри списка в обратном порядке (по тексту внутри)

sortLi()

function sortLi(){
    let list =document.body.querySelectorAll('li');
    let arrayLi = [];
    for(let i=0; i< list.length;i++){
        arrayLi.push(list[i])
    }
   
    console.log(arrayLi)

    for(let i = 0; i<arrayLi.length-1;i++){
        for(let j=0; j<arrayLi.length-i-1;j++){
            if(arrayLi[j].textContent<arrayLi[j+1].textContent){
                let swap = arrayLi[j].textContent;
                arrayLi[j].textContent = arrayLi[j+1].textContent;
                arrayLi[j+1].textContent = swap;
            }
        }
    }
}
