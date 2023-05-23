import { useEffect, useState } from 'react'
import { checkId, login } from "../service/apiService"
import {setCookie} from "../util/cookie"

function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogin = async () => {
    const result = await login(id, password);
    if(result){
      setCookie('accessToken', result.access_token);
      setCookie('refreshToken', result.refresh_token);
    }else{
      alert("아이디나 비밀번호를 확인해주세요");
    }
  }


  return (
    <>
      <h1>Login</h1>
      <div>
        <form>
          <input type='text' placeholder='ID' value={id} onChange={(e) => setId(e.target.value) }></input><br/>
          <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value) }></input><br/>
          <button type='button' onClick={ onClickLogin }>submit</button>
        </form>
      </div>
    </>
  )
}

export default LoginForm
