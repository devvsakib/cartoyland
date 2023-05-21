import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import PrimaryButton from '../Common/PrimaryButton'

const LoginForm = (
  handleSingin,
  googleSignin
) => {
  return (
    <div className='max-w-[700px] shadow-lg mx-auto relative z-40 loginBG rounded-lg'>
      <div className='p-10 rounded-lg min-w-full'>
        <h2 className='text-3xl font-semibold text-center'>Login</h2>
        <form onSubmit={handleSingin} className='p-20 pb-10 mx-auto pt-5' >
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
            <PrimaryButton text='Login' />
          </div>
        </form>
        <div className='text-center'>
          <p>Or</p>
          <div className='flex items-center justify-center mt-5 mb-10 gap-5 text-2xl' onClick={googleSignin}>
            <PrimaryButton fWidth={true} icon={<FaGoogle />} text={"Login With Google"} />
          </div>
          <div className='flex items-center gap-5 justify-center'>
            <p>No Account?</p>
            <Link className='font-semibold text-accent' to='/signup'>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm