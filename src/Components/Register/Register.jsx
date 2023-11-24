function Register() {
  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
          "url(../../public/moviePoster2.jpg)",
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
            backgroundImage:
            "url(../../public/moviePoster2.jpg)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0" />
        </div>
        <div className="w-full py-6 z-20 ">
          <h1 className="my-6 text-5xl">Register Now</h1>

          <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="pb-2 pt-4">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="block w-full p-4 text-lg rounded-sm bg-black"
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="block w-full p-4 text-lg rounded-sm bg-black"
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                className="block w-full p-4 text-lg rounded-sm bg-black"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                type="password"
                name="repeatPassword"
                id="repeatPassword"
                placeholder="Confirm Password"
                className="block w-full p-4 text-lg rounded-sm bg-black"
              />
            </div>
            <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
              <a href="/login">Already have an account?</a>
            </div>
            <div className="px-4 pb-2 pt-4">
              <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
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
