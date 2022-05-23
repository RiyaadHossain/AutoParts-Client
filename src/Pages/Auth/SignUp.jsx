import React, { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Authentication/Firebase.init";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [authUser] = useAuthState(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (authUser) {
      navigate(from, { replace: true });
    }
  }, [authUser, from, navigate]);

  if (loading || gLoading) return <p>Loading...</p>;

  let signInError;

  if (error || gError) {
    signInError = (
      <p className="text-red-600 ml-4 mb-2 text-sm">
        {error?.message || gError?.message}
      </p>
    );
  }

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    toast.success("Signed Up");
  };
  return (
    <div class="hero min-h-[82vh]">
      <div class="card w-full max-w-sm shadow-2xl">
        <div class="card-body bg-base-200">
          <h1 className="text-center text-2xl font-bold">Sign Up</h1>
          <div class="form-control">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name Field */}
              <div className="form-control mx-auto w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="input text-black border-black input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

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

              <Link to="/login" className="btn-link mb-6 inline-block text-primary">
                Already Have an Account
              </Link>

              {/* Submit Button */}
              <div className="text-center">
                <input
                  className="btn mx-auto w-full bg-slate-600 text-gray-100 hover:text-white border-slate-600 max-w-xs"
                  type="submit"
                  value="Sign Up"
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

export default SignUp;
