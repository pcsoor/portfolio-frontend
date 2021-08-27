import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    async function login() {
        let cred = {email, password};
        let result = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(cred),
        });

        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        history.go("/");
    }

    return (
        <div>
            <h1 className="text-center text-3xl font-semibold py-10 text-gray-700">Login</h1>
            <div className="w-full max-w-md mx-auto">
            <form className="bg-gray-50 shadow-md rounded-md p-8 mx-3">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-full-name">
                            E-mail
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="email"
                            placeholder="E-mail address.." 
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="inline-password">
                                Password
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-password"
                                type="password"
                                placeholder="Password.." 
                                onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                        <div className="text-center">
                            <div className="">
                                <button
                                    className="shadow bg-purple-500 hover:bg-purple-600 focus:shadow-outline 
                                    focus:outline-none text-white font-semibold py-2 px-4 rounded duration-150"
                                    type="button"
                                    onClick={login}>
                                    Login
                                </button>
                            </div>
                        </div>
            </form>
            </div>
            
        </div>
    )
}

export default Login;