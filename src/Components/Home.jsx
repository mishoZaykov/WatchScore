import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1505775561242-727b7fba20f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex h-auto lg:items-center lg:px-8">
        <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Watch Score
            <strong className="block font-extrabold text-indigo-700">
              Your Movie Blog
            </strong>
          </h1>

          <p className=" mt-4 max-w-lg sm:text-xl/relaxed text-white">
          Share your thoughts, rate your favorite films, and discover new cinematic gems. Start exploring and sharing your movie experiences today!
          </p>

          <div className="mt-8 flex flex-wrap text-center justify-center">
            <Link
              to="/catalog"
              className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
            >
              Browse
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
