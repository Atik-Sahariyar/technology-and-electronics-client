import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    //    new user create function
    const handleRegistration = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        if (password.length < 6 || !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
            return;
        }
        else {

            createUser(email, password)
                .then(result => {
                    console.log(result)
                    Swal.fire('Registration successfull!');
                    navigate(location?.state ? location.state : '/');
                })
                .catch(error => console.log(error))
        }


    }

    const handleGoogleRegister = () => {
        googleSignIn()
        .then(result => {
            console.log(result);
            Swal.fire('Registration successfull!')
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => console.log(error));
    }
    return (
        <div className="text-center">
            <h3 className="text-3xl my-8">Please registration</h3>
            <form onSubmit={handleRegistration} className=" mx-auto w-1/2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover ">Forgot password?</a>
                    </label>
                </div>
                <div>
                    <button className="py-2 rounded-lg btn-primary w-full">Registration</button>
                </div>
            </form>
            <div>
                <p>---------- Or -----------</p>
                <button type="button" onClick={() => handleGoogleRegister()} className=" text-blue-600 underline border px-3 py-1 rounded-md hover:bg-gray-400">Google</button>
            </div>
            <p className=" mt-2">Already have an account <Link to="/login"><span className=" text-blue-700 underline">Lgoin</span></Link></p>
        </div>
    );
};

export default Register;