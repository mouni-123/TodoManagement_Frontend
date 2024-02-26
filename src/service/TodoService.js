//const BASE_REST_API_URL = 'http://localhost:8080/api/todo';
const BASE_REST_API_URL ='http://todomanagement-restapi.azurewebsites.net/api/todo';
export const getAlltodos= ()=>
    fetch(BASE_REST_API_URL, {
    method: "GET" 
})
export const savetodo=(todo)=>
    fetch(BASE_REST_API_URL+'/'+'add', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(todo)});
    
export const gettodo=(id)=>
      fetch(BASE_REST_API_URL+'/'+id,{
        method: "GET" 
      })
export const updatetodo=(id,todo)=>
        fetch(BASE_REST_API_URL+'/update/'+id,{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        },
        );
export const deletetodo=(id)=>
        fetch(BASE_REST_API_URL+'/delete/'+id,{
            method:"DELETE"
           
        },
        );
export const completetodo=(id)=>
      fetch(BASE_REST_API_URL+'/'+id+'/complete',{
         method:"PATCH"
      });
export const incompletetodo=(id)=>
fetch(BASE_REST_API_URL+'/'+id+'/incomplete',{
    method:"PATCH"
 });

    
