import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createUser } from "../redux/Features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { toast } from "react-toastify";
interface SignupFormInputs {
  email: string;
  password: string;
}

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();
  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const onSubmit = (data: SignupFormInputs) => {
    console.log(data);
    dispatch(createUser({ email: data.email, password: data.password }));
    toast.success("Registration Successful", {
      position: "top-right",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (user.email && !isLoading) {
      navigate("/");
    }
  }, [user.email, isLoading]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 grid grid-cols-6 gap-6"
      >
        <div className="col-span-6">
          <label
            htmlFor="Email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>

          <input
            type="email"
            id="Email"
            // name="email"
            {...register("email", { required: "Email is required" })}
            className={`mt-1 py-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="col-span-6 ">
          <label
            htmlFor="Password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>

          <input
            type="password"
            id="Password"
            // name="password"
            {...register("password", { required: "Password is required" })}
            className={`mt-1 py-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
            Create an account
          </button>
          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            Already have an account?
            <Link to="/login" className="text-gray-700 underline">
              Log in
            </Link>
            .
          </p>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
