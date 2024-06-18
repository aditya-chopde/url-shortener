import { useForm } from "react-hook-form";
import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Login = () => {
 
  const {logInUser} = useContext(StoreContext)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <>
      <div className="mx-5 mt-10">
        <h1 className="text-3xl font-bold my-3">Log in</h1>
        <p className="mb-8 mt-3">
          Don't have a account?&nbsp;
          <a href="#" className="text-blue-500 underline">
            Sign Up
          </a>
        </p>
        <form onSubmit={handleSubmit(logInUser)}>
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
            value="Login"
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
            By logging in to your account you are agree to the Vitly's &nbsp;
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
    </>
  );
};

export default Login;
