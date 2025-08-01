import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router";

function LogIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleGoogleLogin = () => {
    console.log("Google login clicked" + Math.random());
    // Handle Google login here
  };

  return (
    <div className="px-8 sm:px-28 mt-24 sm:mt-0 mb-16 flex flex-col sm:flex-row gap-8">
      <div className="sm:w-[50%] my-auto">
        <img src="/assets/images/signup.png" alt="" className="w-lvw" />
      </div>
      <div className="sm:w-[40%] ">
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...formik.getFieldProps("password")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
              placeholder="Enter your password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          {/* Forgot Password Link
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-500 hover:text-blue-600"
            >
              Forgot Password?
            </Link>
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#397ED1] text-white py-3 px-4 rounded-lg hover:bg-[#2c6bbf] transition-colors font-medium text-lg mt-2 cursor-pointer"
          >
            Log In
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-4 text-gray-500 text-sm font-medium">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors bg-white cursor-pointer"
        >
          <img src="/assets/images/googleLogo.svg" className="h-5 w-5 " />
          <span className="text-gray-700 font-medium">
            Continue with Google
          </span>
        </button>

        <p className="mt-6 text-sm text-gray-600 text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Sign Up Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
