import React, {useState} from 'react'
import logo from '../assets/img/logo.png'
function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name:"", email:"",password:""});

    const submitHandler = e => {
        e.preventDefault();
        
        Login(details);
    }
  return (
    <div className='Login'>
      <img id="logo-desktop" src={logo} alt="logo" ></img>
    
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>Ingresar</h2>
            {(error !="") ? ( <div className="error">{error}</div> ): ""}
            
            <div className='form-group'>
                <label htmlFor="name">Nombre:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Usuario:</label>
                <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="Iniciar" />
        </div>
    </form>
    </div>
  )
}

export default LoginForm