import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getOneTodo,saveChanges } from '../store/todoSlice';

const EditTodo = () => {

    const { oneTodo } = useSelector(state => state.todos);

    const [ todo, setTodo ]  = useState("");

    const dispatch = useDispatch();

    const {id} = useParams();//dispatch

    const navigate =useNavigate();

    useEffect(()=>{
        dispatch(getOneTodo(id));
    },[])

    console.log(oneTodo)

    useEffect(()=>{
        if(oneTodo){
            setTodo(oneTodo)
        }
    }, [oneTodo])

    return (
        <>
            {
        oneTodo ?(
            <div>
                <h3>edit</h3>
                <input type="text" onChange={e => setTodo({...todo, body: e.target.value })} value={todo.body} />
                <button onClick={()=> {
                    dispatch(saveChanges(todo));
                    navigate("/");
                }}>saveChanges</button>
           </div>
        ): (
            <h5>dasdas</h5>
        
            )}
        </>


    );
};

export default EditTodo;