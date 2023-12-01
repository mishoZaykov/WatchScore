import { useContext } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import AuthContext from "../../context/authContext";
import * as Yup from "yup";
import toast from "react-hot-toast";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);

  const initialValues = {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  };

  const validationSchema = Yup.object().shape({
    [LoginFormKeys.Email]: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    [LoginFormKeys.Password]: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await loginSubmitHandler(values);

      toast.success("Login successful!");
    } catch (error) {
      toast.error(`Login failed: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage: "url(../../public/moviePoster.jpg)",
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
            backgroundImage: "url(../../public/moviePoster.jpg)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0" />
        </div>
        <div className="w-full py-6 z-20 ">
          <h1 className="my-6 text-5xl">Login Now</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                <div className="pb-2 pt-4">
                  <Field
                    type="email"
                    name={LoginFormKeys.Email}
                    placeholder="Email"
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                  />
                  <ErrorMessage
                    name={LoginFormKeys.Email}
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="pb-2 pt-4">
                  <Field
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    type="password"
                    name={LoginFormKeys.Password}
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name={LoginFormKeys.Password}
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                  <a href="/register">Don't have an account?</a>
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

export default Login;
