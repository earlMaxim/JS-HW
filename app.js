// Task manager
// 1. создать задачу
//      а. обработка формы
//          - проверить данные перед добавлением (валидация)
//      б. добавить задачу в массив
//      в. добавить данные в таблицу
//      г. офистить форму
// 2. удалить задачу
//      а. подтверждение
//      б. удаление данных из таблицы
//      в. удаление данных из массива 
// 3. редактировать задачу 
//      а. взять данные из массива
//      б. поместить в форму 
//      в. обработать форму на редактирование
//          - валидация
//      г. обновить данные в массиве
//      д. обновить данные в таблице
//      е. офистить форму

// task = {
//     id: {
//         type: 'String',
//         required: true
//     },
//     title: {
//         type: 'String',
//         required: true
//     },
//     text: {
//         type: 'String',
//         required: true
//     }
// }

;(function () {
    
    let storage = {
        todos: []
    };

    /**
     * 
     */
    function generateId() {
        // const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        // let id = '';

        // for (let char of words) {
        //     let index = Math.floor(Math.random() * words.length);
        //     id += words[index];
        // }
        const id = `f${(~~(Math.random()*1e8)).toString(16)}`;
        return id;
    }

    /**
     * 
     * @param {*} title 
     * @param {*} text 
     */
    function addNewTodoToStorage(title, text) {
        if (!title) return console.log('Введите заголовок задачи');
        if (!text) return console.log('Введите текст задачи');

        const newTask = {
            title,
            text, 
            id: generateId()
        };

        storage.todos.push(newTask);
        
        return storage.todos;
    }

    addNewTodoToStorage('My title 1', 'My text 1');
    addNewTodoToStorage('My title 2', 'My text 2');
    addNewTodoToStorage('My title 3', 'My text 3');
    addNewTodoToStorage('My title 4', 'My text 4');
    console.log(storage)
    /**
     * 
     * @param {*} id 
     */
    function deleteTodoFromStorage(id) {
        if (!id) return console.log('Передайте id задачи');

        const checkId = storage.todos.some(function(task, i) { 
            return task.id === id 
        });
        if (!checkId) return console.log('id несуществуе');

        let removedTask;

        for (let i = 0; i < storage.todos.length; i++) {
            if (storage.todos[i].id === id) {
                removedTask = storage.todos.splice(i, 1);
                break;
            }
        }
        
        return removedTask;
    }

    /**
     * 
     * @param {*} id 
     * @param {*} title 
     * @param {*} text 
     */
    function editTaskStorage(id, title, text) {

        if(!id) console.log('Пердай ID');
        //создаю массив всех Id
        let allId = storage.todos.map(item => item.id);
        let check =false;
        //проверяю наличие такого id
        let check = allId.forEach(function(item){
            if(item == id){
                return true;
            }
        })
        if(check==true){
            //elfkz. cnfhe. pfgbcm
            for (let i = 0; i < storage.todos.length; i++) {
                if (storage.todos[i].id === id) {
                    storage.todos.splice(i, 1);
                    break;
                }
            }
            //создаю новую = редактирую
            const editTask = {
                title,
                text, 
                id 
            };
            //вставлюю ее в общий список
            storage.todos.push(editTask);
        }
        // const allwithout = storage.todos.filter(todos => todos.id=!id)

        // const changetodo = {
        //     title,
        //     text,
        //     id
        // }

        // allwithout.push(changetodo);
        // storage.todos = allwithout;
    }

})();
