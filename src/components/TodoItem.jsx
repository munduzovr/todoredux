
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import styles from "../../src/index.module.css"
import { changeTodoStatus,deleteTodo } from '../store/todoSlice';
import { Button, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';




export default function TodoItem({todo}) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    
    <Card sx={{ display: 'flex' , justifyContent:'center',width:"30%",height:"100%"}}>
      <input 
        type="checkbox"
        onChange={()=> dispatch(changeTodoStatus(todo.id))}
      />
      <p className={todo.status ? styles.completed : styles.undone}>
        {todo.body}
      </p>

      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
          image="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem cum, deleniti dolores amet alias asperiores aut totam distinctio. Pariatur culpa placeat voluptate laboriosam autem neque tenetur? Assumenda eveniet sequi amet.
            Cumque repellat laboriosam veritatis molestias ex eaque ipsum aliquam soluta repudiandae iure in, quos, nulla autem ipsa mollitia asperiores rem exercitationem necessitatibus nisi vitae natus inventore reiciendis ad eveniet! Cum.
            Saepe maiores est vero cupiditate iusto mollitia laborum adipisci dolores ratione, inventore sunt libero laudantium tempora nobis, id rerum nisi cumque dicta facere, dolor doloribus animi. Quod, eveniet! Quia, voluptatum?
          </Typography>
          <Button onClick={()=> dispatch(deleteTodo(todo.id))}>Delete</Button>
          <Button onClick={()=> navigate(`/edit/${todo.id}`)}>Edit</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
