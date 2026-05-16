import { useState } from "react"
import { createUser, getUsers } from "../services/userService"
import { useNavigate, Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook, FaLinkedin } from "react-icons/fa"
import NavBar from "../components/NavBar"
import "../styles/Login.css"

export default function Register() {
    const navigate = useNavigate()
    const [name,  setName]  = useState("")
    const [email, setEmail] = useState("")
    const [pass,  setPass]  = useState("")

    async function handleRegister(event) {
        event.preventDefault()
        try {
            const users = await getUsers()
            const existingUser = users.find(u => u.email === email)
            if (existingUser) { alert("This Email already exists"); return }
            await createUser({ name, email, pass })
            alert("Registration successful")
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <NavBar />
            <div className="auth-container">
                <div className="auth-card">
                    <h1 className="auth-title">Create account</h1>
                    <p className="auth-switch mb-8">Join Play Panda and start shopping today</p>

                    <form className="auth-form" onSubmit={handleRegister}>
                        <input className="form-input" type="text" placeholder="Full name" value={name}
                            onChange={(e) => setName(e.target.value)} required/>
                        <input className="form-input" type="email" placeholder="Email address" value={email}
                            onChange={(e) => setEmail(e.target.value)} required/>
                        <input className="form-input" type="password" placeholder="Password" value={pass}
                            onChange={(e) => setPass(e.target.value)} required/>
                        <button className="btn-auth-submit" type="submit">
                            Get Started
                        </button>
                    </form>

                    <div className="my-6 flex items-center gap-3.5 text-[13px] text-[#bbbbbb]">
                        <span className="h-px flex-1 bg-[#e8e8e8]" />
                        Or sign up with
                        <span className="h-px flex-1 bg-[#e8e8e8]" />
                    </div>

                    <div className="flex justify-center gap-4">
                        <button className="flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-[14px] bg-[#f4f4f4] transition-all hover:-translate-y-0.5 hover:bg-[#e8e8e8]" aria-label="Sign up with Google">
                            <FcGoogle size={22} />
                        </button>
                        <button className="flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-[14px] bg-[#f4f4f4] transition-all hover:-translate-y-0.5 hover:bg-[#e8e8e8]" aria-label="Sign up with Facebook">
                            <FaFacebook size={22} color="#1877F2" />
                        </button>
                        <button className="flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-[14px] bg-[#f4f4f4] transition-all hover:-translate-y-0.5 hover:bg-[#e8e8e8]" aria-label="Sign up with LinkedIn">
                            <FaLinkedin size={22} color="#0A66C2" />
                        </button>
                    </div>

                    <p className="auth-switch mt-7">
                        Already have an account?{" "}
                        <Link to="/login" className="auth-link">Sign in</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
