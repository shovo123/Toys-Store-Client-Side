import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";



const Login = () => {
    useTitle('Login')
    const {signIn,loginWithGoogle}=useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [error,setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from,{replace:true});
        })
        .catch(error=>setError(error));
        
    }


    const handleLoginGoogle = () => {
        loginWithGoogle()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(err => setError(err));
    };
    return (
        <div>
            <div className={`py-56 lg:py-10 bg-[url('https://i.ibb.co/gjVTwyC/banner-1.jpg')]  bg-center bg-cover relative `}>
                <h2 className="text-center font bold text-5xl">Please Login</h2>
            </div>
            <div className="hero  bg-base-200" data-aos="fade-down"
            data-aos-duration="1000">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password"  placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-2" data-aos="fade-right" data-aos-duration="1000">
                                    <button className="btn bg-pink-300 border-none">Login</button>
                                </div>
                                <div className="form-control" data-aos="fade-left" data-aos-duration="1000">
                                    <button className="btn" onClick={handleLoginGoogle}> Sign In With Google</button>
                                </div>
                                <div>
                                    <p>{error.message}</p>
                                </div>
                                <div className="form-control">
                                    <p><small>New User? <Link to={'/register'} className="btn btn-link">Register Here</Link></small></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;