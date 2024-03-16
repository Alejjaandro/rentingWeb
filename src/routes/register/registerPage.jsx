import { useNavigate } from 'react-router-dom';
import './register.scss'

function RegisterPage() {
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
  
      console.log(user)
    }
  
    return (
        <div className='registerPage'>

            <div className='registerContainer'>
                <h1>Register</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Email' />
                    <input type='text' placeholder='Username' />
                    <input type='password' placeholder='Password' />
                    <button>Sign Up</button>
                </form>
            </div>

            <div className='registerImage'>
                <img src='bg.png' alt='' />
            </div>

        </div>
    )
}

export default RegisterPage