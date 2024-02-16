

const Login = () =>{
    return <div >
        <h1 className="text-primary-main">Login Page</h1>
        <div className="w-500">
            <form className="p-3 rounded shadow-sm bg-secondary-light">
                <div className="mb-3 justify-between">
                    <label className="block" >Email</label>
                    <input type="email"  />
                </div>
                <div className="mb-3">
                    <label className="block" >password</label>
                    <input type="password"  />
                </div>
                <div className="mb-3">
                    <button type="submit" className="bg-primary-main text-white p-1">Login</button>
                </div>
            </form>
        </div>
    </div>
}

export default Login;