import { useEffect, useState } from 'react'
import { checkId, login } from "../service/apiService"

function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogin = async () => {
    const isLogin = await login(id, password);
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
