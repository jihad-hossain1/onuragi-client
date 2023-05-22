import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGofore } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { loginEmail, loginWithGoogle } = useContext(AuthContext);
  const [logged, setLogged] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginEmail(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setLogged(loggedUser);
        navigate(from, { replace: true });
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error);
      });
  };

  const handleloginGoogle = () => {
    loginWithGoogle().then((result) => {
      const isLogin = result.user;
      console.log(isLogin);
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 text-sm">
            Welcome back! Please enter your Email and password to login.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="mt-3">
                Are You new there ? Please{" "}
                <Link
                  className="text-primary hover:underline hover:font-semibold "
                  to="/register"
                >
                  SignUp
                </Link>
              </div>

              <div className="text-center hover:form-control mx-1 my-3">
                <button
                  onClick={handleloginGoogle}
                  className="btn btn-primary btn-outline "
                >
                  <FaGofore className="text-xl"></FaGofore>
                  <span className="text-xl ml-3">Login</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
