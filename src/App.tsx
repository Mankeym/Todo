import React, {useEffect, useState} from 'react';
import './App.css';
import Checklist from "./components/ckecklist";

function App() {

  const [information, setInformation] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          json.filter((el) => el.userId === 1);
          setInformation(json.filter((el) => el.userId === 1));
        })
        .catch((err) => console.log("Ошибка загрузки начальных данных - " + err))

  }, []);
    function clickCheckBox(){
        const checkBoxAll = document.getElementsByTagName('input');
        for(let i = 0; i<checkBoxAll.length; i++){
            checkBoxAll[i].checked = true
        }
    }
    function deleteCheckBox(){
        const checkBoxAll = document.querySelectorAll('.checklist__checkbox');
        const inform = [];
        for(let i = 0; i<=checkBoxAll.length-1; i++){
            if(checkBoxAll[i].className == 'checklist__checkbox' && checkBoxAll[i].className){
                // @ts-ignore
                if(checkBoxAll[i].checked != true && information[i] != undefined){
                    inform.push(information[i]);
                }
            }

        }
        if(inform.length > 0){
            setInformation(inform)
        }
        else{
            setInformation([])
        }

        for(let i = 0; i<checkBoxAll.length; i++){
            // @ts-ignore
            checkBoxAll[i].checked = false
        }
    }
    function addToDo() {
        const toDoInput = document.querySelector('.input')
        interface arr {
            id:number,
            title:string
        }
        interface arr extends Array<arr>{
            title: string
            id: number
        }
        const arr = [{
            // @ts-ignore
            title:toDoInput.value,
            id: information.length
        }]
        // @ts-ignore
        setInformation(information.concat(arr))
    }
    return (
    <div className="App">
        <div className="button__container">
            <button type='button' onClick={deleteCheckBox}>Удалить</button>
            <button type='button' onClick={clickCheckBox}>Выбрать все</button>
        </div>
        <input className="input" id='adTodo'/>
        <button type='button' onClick={addToDo}>Добавить</button>

        {
            information.map((info)=>(

                <Checklist info={info}  />
            ))
        }

    </div>
  );
};

export default App;
