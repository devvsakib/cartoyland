import { FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import PrimaryButton from '../components/Common/PrimaryButton'
import toast from 'react-hot-toast'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const Login = () => {
    const { signIn, setUser, auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoding] = useState(false)
    const location = useLocation();
    const prevRoute = location.state?.from?.pathname || '/'

    const handleSingin = e => {
        e.preventDefault();
        const data = new FormData(e.target)
        const email = data.get("email")
        const password = data.get("password")

        // Email validation
        if (!email) {
            toast.error('Email is required')
            return
        }
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            toast.error("Invalid email");
            return;
        }

        if (!password) {
            toast.error('Password is required')
            return
        }

        if (email && password) {
            setLoding(true)
            signIn(email, password)
                .then(res => {
                    const loggedUser = res.user;
                    setUser(loggedUser)
                    toast.success('Sign in successful')
                    navigate(prevRoute, { replace: true })
                })
                .catch(err => {
                    setLoding(true)
                    if (err.code === 'auth/wrong-password') {
                        toast.error('Wrong password')
                        setLoding(false)
                    }
                    if (err.code === 'auth/user-not-found') {
                        toast.error('User not found')
                        setLoding(false)
                    }
                })
        }
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, new GoogleAuthProvider())
            .then(result => {
                setUser(result.user)
                toast.success("Singin Succcess!")
                navigate(prevRoute, { replace: true })
            })
            .catch(err => {
                if (err.code === 'auth/account-exists-with-different-credential') {
                    toast.error('Email already exists')
                }
                if (err.code === 'auth/popup-closed-by-user') {
                    toast.error('Google popup closed')
                }
                if (err.code === 'auth/cancelled-popup-request') {
                    toast.error('Google popup cancelled')
                }
                if (err.code === 'auth/user-disabled') {
                    toast.error('Account disabled. Contact admin')
                }
            })


    }
    return (
        <div className="my-24 px-5 md:px-10 grid gap-10">
            <div className='max-w-[700px] shadow-lg mx-auto relative z-40 loginBG rounded-lg'>
                <div className='p-10 rounded-lg min-w-full'>
                    <h2 className='text-3xl font-semibold text-center'>Login</h2>
                    <form onSubmit={handleSingin} className='md:p-20 pb-10 mx-auto pt-5' >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='email' placeholder="Your email" className="input rounded-lg shadow-lg w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='password' placeholder="Your Password" className="input rounded-lg shadow-lg w-full" />
                            </label>
                        </div>
                        <div className='form-control mt-5'>
                            {
                                loading ?
                                    <button disabled>
                                        <PrimaryButton fWidth={true} text='Loading...' />
                                    </button>
                                    :
                                    <PrimaryButton fWidth={true} text='Login' />
                            }
                        </div>
                    </form>
                    <div className='text-center'>
                        <p>Or</p>
                        <div className='flex items-center justify-center mt-5 mb-10 gap-5'>
                            <button onClick={signInWithGoogle}>
                                <PrimaryButton fWidth={true} icon={<FaGoogle />} text={"Login With Google"} />
                            </button>
                        </div>
                        <div className='flex items-center gap-5 justify-center'>
                            <p>No Account?</p>
                            <Link className='font-semibold text-accent' to='/register'>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login