//Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

dest('a' , 'b', 'c')

function dest(){
    const [first, ...rest] = arguments;
    let a ={
        first,
        rest
    }
    console.log(a);
}


//2. Организовать функцию getInfo, которая принимает объект вида{ name: ...,  info: { employees: [...], partners: [ … ]  } }и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
    
    const organisation = {  
    name,   
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   } 
  };

  getInfo(organisation); 

  function getInfo(organisation){
      const {name, info:{employees,partners:[partner1,partner2]}} = organisation;
      let information = {
        name,
        partner1,partner2
      }
      if(information.name.length == 0){
          information.name = "Unknown"
      }
      console.log("Name: "+ information.name +"\nPartners: "+information.partner1+" "+information.partner2);
  }