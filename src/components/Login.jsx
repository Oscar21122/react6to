import { Box, Button, TextField } from '@mui/material'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Login = ({ login }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Los campos no deben de estar vacios");
      return;
    }
    const isLogin = login({username, password});
    console.log(isLogin)
    if (isLogin) {
      setUsername("");
      setPassword("");
      navigate("/welcome")
    } else {
      alert("Usuario incorrecto")
    }
  }

  return (
    <div>
      <form onSubmit={onsubmit}>
        <Box
          margin={"auto"}
          flexDirection={"column"}
          display={"flex"}
          width={400}
          marginTop={"200px"}
        >
          <TextField 
            label={"Username"} 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}/>

          <TextField 
            type={"password"} 
            label={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>

          <Button type={"submit"} variant="contained">
            Login
          </Button>
        </Box>
      </form>
    </div>
  )
}

export default Login