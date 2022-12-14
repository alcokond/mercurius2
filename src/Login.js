import {useRef, useState, useEffect} from 'react'


const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd,  setPwd]= useState('');
    const [errMsg,  setErrMsg]= useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    },[])

    useEffect(() => {
        setErrMsg('');
    },[user, pwd])

    const handleSubmit= async (e) => {
        e.preventDefault();
        console.log(user,pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }


  return (
    <section>
        <p ref= {errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Usuario:</label>
            <input 
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
            />
            <label htmlFor="password">Contraseña:</label>
            <input 
                type="password"
                id="password"
                autoComplete="off"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
            />
            <button>Entrar</button>
        </form>
    </section>
  )
}

export default Login