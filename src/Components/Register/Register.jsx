  import { useContext } from "react";
  import {} from 'formik';
  import * as Yup from 'yup';
  import AuthContext from "../../context/authContext";
  import useForm from "../../hooks/useForm";

  const RegisterFormKeys = {
    Username: "username",
    Email: "email",
    Password: "password",
    ConfirmPassword: "confirmPassword",
  };

  function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const [errors, setErrors] = useState({});
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
      [RegisterFormKeys.Username]: "",
      [RegisterFormKeys.Email]: "",
      [RegisterFormKeys.Password]: "",
      [RegisterFormKeys.ConfirmPassword]: "",
    });

    const validateForm = () => {
      const { username, email, password, confirmPassword } = values;
      const errors = {};

      if (!username || !email || !password || !confirmPassword) {
        errors.requiredFields = "All fields are required!";
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errors.email = "Invalid email";
      }

      if (password.length < 6) {
        errors.password = "Password must be at least 6 characters long ";
      }

      if(password !== confirmPassword){
        errors.matchPassword= 'Passwords should match'
      }

      return errors;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const formErrors = validateForm();

      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
      }else{
        setErrors({})
        onSubmit(e);
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

            <form
              className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="pb-2 pt-4">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  onChange={onChange}
                  values={values[RegisterFormKeys.Username]}
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={onChange}
                  values={values[RegisterFormKeys.Email]}
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                />
                {errors.requiredFields && (
                  <p className="text-red-500">{errors.email}</p>
                )}
              </div>
              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  type="password"
                  name="password"
                  id="password"
                  onChange={onChange}
                  values={values[RegisterFormKeys.Password]}
                  placeholder="Password"
                />
                              {errors.requiredFields && (
                  <p className="text-red-500">{errors.password}</p>
                )}
              </div>
              <div className="pb-2 pt-4">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={onChange}
                  values={values[RegisterFormKeys.ConfirmPassword]}
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                />
                {errors.requiredFields && (
                  <p className="text-red-500">{errors.matchPassword}</p>
                )}
                {errors.requiredFields && (
                  <p className="text-red-500 mt-2">{errors.requiredFields}</p>
                )}
              </div>
              <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                <a href="/login">Already have an account?</a>
              </div>
              <div className="px-4 pb-2 pt-4">
                <button type="submit" className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                  sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  export default Register;
