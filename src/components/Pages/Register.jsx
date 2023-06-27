import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

const {createUser,logOut}=useContext(AuthContext);
const navigate =useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, email, password, photoUrl);
        createUser(email,password)
        .then(res=>{
            const user =res.user;
            updateProfile(user, {
                displayName: name,photoURL: photoUrl
            });
            logOut();
            navigate('/login')
            form.reset();
        })
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div className={`py-56 lg:py-10 bg-[url('https://i.ibb.co/gjVTwyC/banner-1.jpg')]  bg-center bg-cover relative `}>
                <h2 className="text-center font bold text-5xl">Please Register</h2>

            </div>
            <div className="hero  bg-base-200">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="Your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photoUrl" placeholder="Photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-2">
                                    <input className="btn bg-pink-300 border-none" type="submit" value="Register Here" />
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;