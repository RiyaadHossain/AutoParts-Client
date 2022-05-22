import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div class="hero min-h-[82vh]">
      <div class="card w-full max-w-sm shadow-2xl">
        <div class="card-body bg-base-200">
          <h1 className="text-center text-2xl font-bold">Log In</h1>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              class="input input-bordered"
            />
            <label class="label flex items-center justify-between">
              <a href="/" class="label-text-alt link link-hover text-[14px]">
                Forgot password?
              </a>
              <Link to="/" class="label-text-alt link link-hover text-info text-[14px]">
                Create New Account
              </Link>
            </label>
          </div>
          <div class="form-control mt-6">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
          <div class="divider">OR</div>
          <div class="form-control mt-6">
            <button class="btn btn-accent">Continue with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
