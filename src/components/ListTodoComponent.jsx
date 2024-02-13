import React,{useEffect, useState} from "react"
//import { Button } from 'react-native-elements';
import { getAlltodos,deletetodo, completetodo, incompletetodo } from "../service/TodoService";
import {useNavigate} from "react-router-dom"
export default function ListTodoComponent()
{
    
    const [todos, settodo] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        getAlltodos().then((response)=>response.json()).then((data)=>{
            settodo(data);
        }).catch(error=>{
            console.error(error)
        })
    },[])
    
    /*function listTodos(){
        getAlltodos().then((response)=>response.json()).then((data)=>{
            settodo(data);
        }).catch(error=>{
            console.error(error)
        })
    }*/
    function addnewTodo(){
      navigate("/add-todo")
    }
    function updateTodo(id)
    {
        navigate(`/update-todo/${id}`)
    }
    function deleteTodo(id)
    {
        deletetodo(id).then((response)=>{
            getAlltodos().then((response)=>response.json()).then((data)=>{
                settodo(data);
            }).catch(error=>{
                console.error(error)
            })
        }).catch(error=>{
            console.error(error)
        })
    }
    function completeTodo(id)
    {
        completetodo(id).then((response)=>{
            getAlltodos().then((response)=>response.json()).then((data)=>{
                settodo(data);
            }).catch(error=>{
                console.error(error)
            })
        }).catch(error=>{
            console.error(error)
        })
    }
    function incompleteTodo(id)
    {
      incompletetodo(id).then((response)=>{
            getAlltodos().then((response)=>response.json()).then((data)=>{
                settodo(data);
            }).catch(error=>{
                console.error(error)
            })
        }).catch(error=>{
            console.error(error)
        })
    }
    return (<div className="container">
        <h1 className="text-center">Todo List</h1>
        <table className="table table-bordered table-stripped">
            <thead>
                <tr>
                <th>title</th>
                <th>description</th>
                <th>completed</th>
                <th>action</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(todo=>
                        <tr key={todo.id}>
                         <td>{todo.title}</td>
                         <td>{todo.description}</td>
                         <td>{todo.completed?'Yes':'No'}</td>
                         <td>
                            <button className="btn btn-info" onClick={()=>updateTodo(todo.id)}>Update</button>
                            <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={()=>deleteTodo(todo.id)}>Delete</button>
                            <button className="btn btn-success" style={{marginLeft:"10px"}} onClick={()=>completeTodo(todo.id)}>Complete</button>
                            <button className="btn btn-info" style={{marginLeft:"10px"}} onClick={()=>incompleteTodo(todo.id)}>InComplete</button>
                         </td>
                        </tr>
                    )
                }
               
            </tbody>
           
        </table>
        <button onClick={addnewTodo}>Todo</button>
    </div>)
}