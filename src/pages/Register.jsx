import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PrimaryButton from '../components/Common/PrimaryButton'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import toast from 'react-hot-toast'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
const Register = () => {
    const { setUser, auth } = useContext(AuthContext);
    const navigate = useNavigate()
    const [loading, setLoding] = useState(false)
    const { user } = useContext(AuthContext);
    const initialValues = {
        photoURL: '',
        name: '',
        email: '',
        password: ''
    };

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);

        const userData = {
            ...formValues
        };
        if (!userData.photoURL) {
            toast.error('Photo URL is required');
            return;
        }

        if (!userData.name) {
            toast.error('Name is required');
            return;
        }

        if (!userData.email) {
            toast.error('Email is required');
            return;
        }

        if (!userData.password) {
            toast.error('Password is required');
            return;
        }

        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(userData.email)) {
            toast.error('Invalid email format');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(userData.password)) {
            toast(
                '▶️Password must be at least 6 characters \n ▶️One uppercase letter \n ▶️One lowercase letter \n ▶️One number \n ▶️One special character.'
            );
            return;
        }

        setLoding(true)
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: userData.name,
                    photoURL: userData.photoURL
                })
                    .then(() => {
                        setUser(user);
                        toast.success(`Register success!`);
                        navigate('/')
                    })
                    .catch((error) => {
                        toast.success(error.message);
                    })
                    .finally(() => setLoding(false))

            })
            .catch((error) => {
                error.code === 'auth/email-already-in-use' ? toast.error('Email already in use.') : toast.error(error.message)
            })
            .finally(() => setLoding(false))
    }

    return (
        <div className="my-24 px-5 md:px-10 grid gap-10">
            <div className='max-w-[700px] shadow-lg mx-auto relative z-40 registerBG rounded-lg'>
                <div className='p-10 rounded-lg min-w-full'>
                    <h2 className='text-3xl font-semibold text-center'>Register</h2>
                    <form onSubmit={handleSubmit} className='md:p-20 pb-10 mx-auto pt-5' >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='name' placeholder="Your name" className="input rounded-lg shadow-lg w-full" />
                            </label>
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='photoURL' placeholder="Profile Picture" className="input rounded-lg shadow-lg w-full" />
                            </label>
                        </div>
                        <div className='form-control mt-5'>
                            {
                                loading ?
                                    <button disabled>
                                        <PrimaryButton fWidth={true} text='Loading...' />
                                    </button>
                                    :
                                    <PrimaryButton fWidth={true} text='Register' />
                            }
                        </div>
                    </form>
                    <div className='flex items-center gap-5 justify-center'>
                        <p>Have an Account?</p>
                        <Link className='font-semibold text-accent' to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register