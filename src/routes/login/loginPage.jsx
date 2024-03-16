import { useNavigate } from 'react-router-dom'
import './login.scss'

function LoginPage(){

  const navigate = useNavigate();
  let user

  const handleSubmit = (e) => {
    e.preventDefault()

    // Create user object
    user = {
      username: e.target[0].value,
      password: e.target[1].value
    }
    // Save user in local storage
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/');
    window.location.reload();

    console.log(user)
  }

  return (
    <div className='loginPage'>

      <div className='loginContainer'>
        <h1>Login</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type='text' placeholder='Username'/>
          <input type='password' placeholder='Password'/>
          <button>Sign in</button>
        </form>
      </div>

      <div className='loginImage'>
        <img src='bg.png' alt=''/>
      </div>

    </div>
  )
}

export default LoginPage