import React,{useEffect, useState} from "react"
import { useNavigate,useParams } from "react-router-dom";
import { gettodo, savetodo, updatetodo } from "../service/TodoService"
export default function TodoComponent(){
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [completed, setcompleted] = useState(false);
    const navigate = useNavigate()
    const {id}= useParams()
    useEffect(()=>{
        if(id)
        {
            gettodo(id).then((response)=>response.json()).then((json)=>{
                settitle(json.title)
                setdescription(json.description)
                setcompleted(json.completed)
            }).catch(error=>{
                console.error(error)
            })
        }
    },[id]
    )
    function saveorUpdateTodo(e)
    {
         e.preventDefault();
         const todo={title,description,completed}
         console.log(todo);
        if(id)
        {
           updatetodo(id,todo).then((response)=>response.json()).then((json)=>{
                console.log(json)
                navigate('/todo')
            }).catch(error=>{
                console.error(error)
            })
        }
        else{
         savetodo(todo).then((response)=>response.json()).then((json)=>{
            console.log(json)
            navigate('/todo')
        }).catch(error=>{
            console.error(error)
        })
       }
    }
    function pageTitle()
    {
          if(id)
          {
            return (
                <h2 className="text-center">Update Todo</h2>
            )

          }
          else{
            return (
                <h2 className="text-center">Add Todo</h2>
            )
          }
    }
    return(
    <div className="container"><br></br>
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                {pageTitle()}
            <div className='card-body'>
        <form>
            <div className="form-group mb-2">
            <label>Title <input type="text" id="title" name="title" value={title}  onChange={(e)=>settitle(e.target.value)} ></input></label>
            </div>
            <div className="form-group mb-2">
            <label>Description <input type="text" id="Description" name="description" value={description}  onChange={(e)=>setdescription(e.target.value)}></input></label>
            </div><div className="form-group mb-2">
            <label>Completed <input type="checkbox" id="Completed" name="Completed" checked={completed} onChange={(e)=>setcompleted(!completed)}></input></label>
            </div>
            <button className="btn btn-success" onClick={(e=>saveorUpdateTodo(e))}>Submit</button>           
        </form>
        </div>
        </div>
        </div>
    </div>
    )
}