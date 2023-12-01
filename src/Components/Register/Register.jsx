import { useContext } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthContext from "../../context/authContext";
import toast from "react-hot-toast";

const RegisterFormKeys = {
  Username: "username",
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirmPassword",
};

function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);

  const initialValues = {
    [RegisterFormKeys.Username]: "",
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.ConfirmPassword]: "",
  };

  const validationSchema = Yup.object().shape({
    [RegisterFormKeys.Username]: Yup.string().required("Username is required"),
    [RegisterFormKeys.Email]: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    [RegisterFormKeys.Password]: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    [RegisterFormKeys.ConfirmPassword]: Yup.string()
      .oneOf([Yup.ref(RegisterFormKeys.Password), null], "Passwords must match")
      .required("Confirm your password"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await registerSubmitHandler(values);

      toast.success('Registration successful')
    } catch (error) {
      toast.error(`Registration failed: ${error.message}`)
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage: "url(../../public/moviePoster2.jpg)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0" />
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide"></h1>
        </div>
      </div>
      <div
        className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
        style={{ backgroundColor: "#161616" }}
      >
        <div
          className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
          style={{
            backgroundImage: "url(../../public/moviePoster2.jpg)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0" />
        </div>
        <div className="w-full py-6 z-20 ">
          <h1 className="my-6 text-5xl">Register Now</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                <div className="pb-2 pt-4">
                  <Field
                    type="text"
                    name={RegisterFormKeys.Username}
                    placeholder="Username"
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                  />
                  <ErrorMessage
                    name={RegisterFormKeys.Username}
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="pb-2 pt-4">
                  <Field
                    type="email"
                    name={RegisterFormKeys.Email}
                    placeholder="Email"
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                  />
                  <ErrorMessage
                    name={RegisterFormKeys.Email}
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="pb-2 pt-4">
                  <Field
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    type="password"
                    name={RegisterFormKeys.Password}
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name={RegisterFormKeys.Password}
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="pb-2 pt-4">
                  <Field
                    type="password"
                    name={RegisterFormKeys.ConfirmPassword}
                    placeholder="Confirm Password"
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                  />
                  <ErrorMessage
                    name={RegisterFormKeys.ConfirmPassword}
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                  <a href="/login">Already have an account?</a>
                </div>
                <div className="px-4 pb-2 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
                  >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default Register;
