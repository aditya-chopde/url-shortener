import { useForm } from "react-hook-form";
import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate()
  const {url, setToken} = useContext(StoreContext)
  
  async function createUser(data) {
    const res = await fetch(url+"user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    
    if(result.success){
      setToken(result.token)
      localStorage.setItem("user_id", result.createUser._id)
      localStorage.setItem("token", result.token)
      navigate("/links")
    }else{
      alert("Unable to Create Account")
    }
  }
  
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <>
      <div>
        <div className="mx-5 mt-20">
        <h1 className="text-3xl font-bold my-3">Create New Account</h1>
        <p className="mb-8 mt-3">
          Already have a account?&nbsp;
          <NavLink to="/login" className="text-blue-500 underline">
            Login
          </NavLink>
        </p>
        <form onSubmit={handleSubmit(createUser)}>
          <h3 className="font-bold">Name</h3>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Required",
              },
              minLength: {
                value: 3,
                message: "Name must be more than 3 characters",
              },
            })}
            type="text"
            className="px-2 py-3 w-full border-2 outline-[#00ED64] rounded-sm my-2"
            placeholder="Enter Name: "
          />
          {errors.name && (
            <div className="text-red-600">{errors.name.message}</div>
          )}

          <h3 className="font-bold">Email</h3>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Required",
              },
            })}
            type="text"
            className="px-2 py-3 w-full border-2 outline-[#00ED64] rounded-sm my-2"
            placeholder="Enter Email: "
          />

          <h3 className="font-bold">Password</h3>
          <input
            {...register("password", {
              required: {
                value: true,
                message: "Required",
              },
              minLength: {
                value: 3,
                message: "Password must be more than 3 characters",
              },
              maxLength: {
                value: 8,
                message: "Password must be less than 8 characters",
              },
            })}
            type="password"
            className="px-2 py-3 w-full border-2 outline-[#00ED64] rounded-sm my-2"
            placeholder="Enter Password: "
          />
          {errors.password && (
            <div className="text-red-600">{errors.password.message}</div>
          )}

          <input
            disabled={isSubmitting}
            type="submit"
            value="Sign Up"
            className="my-2 w-full py-2 bg-[#00ED64] rounded-sm text-white"
          />
          {errors.myForm && (
            <div className="text-red-600">{errors.myForm.message}</div>
          )}
          {errors.blocked && (
            <div className="text-red-600">{errors.blocked.message}</div>
          )}
        </form>

        <div>
          <p className="text-sm">
            By creating an account you are agree to the Vitly's &nbsp;
            <a href="#" className="text-blue-500 underline">
              Terms and Conditions, Privacy Policy
            </a>
            &nbsp; and&nbsp;
            <a href="#" className="text-blue-500 underline">
              Acceptable Use Policy
            </a>
          </p>
        </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
