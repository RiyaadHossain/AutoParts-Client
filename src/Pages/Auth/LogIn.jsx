import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import auth from "../../Authentication/Firebase.init";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import fetcher from "../../API/api";

const LogIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [authUser] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  // Get the User whenever the user is logged In and Redirected to the desired page
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (authUser) {
      navigate(from, { replace: true });
    }
  }, [authUser, from, navigate]);

  // Loading Spinner
  if (loading || gLoading || sending) return <p>Loading...</p>;

  // Display Error Message
  let signInError;

  if (error || gError || resetError) {
    signInError = (
      <p className="text-red-600 ml-4 mb-2 text-sm">
        {error?.message || gError?.message || resetError?.message}
      </p>
    );
  }

  // On Form Submit
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    toast.success("Logged In", { id: "test1" });
  };

  // On Reset Password
  const handleReset = async (data) => {
    const email = getValues("email");
    console.log(email);
    await sendPasswordResetEmail(email);
    if (email) {
      
    }
    email ? toast.success("Reset Password mail sent", { id: "test2" }) : toast.error("Please Type Your email", { id: "test2" })
  };
  return (
    <div class="hero min-h-[82vh]">
      <div class="card w-full max-w-sm shadow-2xl">
        <div class="card-body bg-base-200">
          <h1 className="text-center text-2xl font-bold">Log In</h1>
          <div class="form-control">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email Field */}
              <div className="form-control mx-auto w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>

                <input
                  type="email"
                  placeholder="Your Email"
                  className="input text-black border-black input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                      message: "Provide Valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              {/* Password Field */}
              <div className="form-control mx-auto w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>

                <input
                  type="password"
                  placeholder="Password"
                  className="input text-black border-black input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 5,
                      message: "Must be 6 Characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              {signInError}

              <div className="mb-5 flex items-center justify-between">
                <input
                  onClick={handleReset}
                  className="btn-link text-primary"
                  type="button"
                  value="Forget Password?"
                />
                <Link to="/signup" className="btn-link text-primary">
                  Create New Account
                </Link>
              </div>
              {/* Submit Button */}
              <div className="text-center">
                <input
                  className="btn mx-auto w-full bg-slate-600 text-gray-100 hover:text-white border-slate-600 max-w-xs"
                  type="submit"
                  value="Log In"
                />
              </div>
            </form>
          </div>
          <div class="divider">OR</div>
          <div class="form-control mt-2">
            <button onClick={() => signInWithGoogle()} class="btn btn-accent">
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
