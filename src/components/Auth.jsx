import React, { useState } from 'react'

const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const [users, setUsers] = useState([])

    const handleAuthentication = ()=>{
        if(isRegistered){
            // login
          if(isRegistered){
            const user = users.find((u)=>u.email === email && u.password === password)
            if(user){
                setIsLogin(true)
            }
            else{
                alert("login faild please check your credential")
            }
          }  
        }
        else{
            // register
            const newUser = {email,password}
            setUsers([...users,newUser])
            localStorage.setItem('users', JSON.stringify([...users, newUser]))
            setIsLogin(true)
         
        }
    }

    const handleLogout =()=>{
        setIsLogin(false)
        setEmail('')
        setPassword('')
    }


    // console.log(email)
    // console.log(password)


    return (
        <>
            {
                isLogin ? (
                    <div>
                        <h2>Welcome : {email}!</h2>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        {
                            isRegistered ? "Login" :"Register"
                        }
                        <form style={{ padding: "10px", margin: "10px" }} >
                            <input type="email" placeholder='email...' onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder='password...' onChange={(e) => setPassword(e.target.value)} />
                            <button onClick={handleAuthentication}>{isRegistered ? 'Login' : 'Register'}</button>
                        </form>
                        <p>
                            {
                                isRegistered ? "dont have an account registered now" : "already have an account login !"
                            }
                        </p>
                        <button onClick={() => setIsRegistered(!isRegistered)}>
                            {
                                isRegistered ? 'Register' : 'Login'
                            }
                        </button>
                    </div>
                )
            }
        </>
    )
}

export default Auth