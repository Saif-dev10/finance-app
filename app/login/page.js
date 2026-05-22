import { RiTwitterXFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa6";

export default function Login() {
  return (
    <main className="min-h-screen flex justify-center px-20 py-10">
      <div className="w-full md:w-100 md:flex md:flex-col md:gap-3">
        <h1 className="font-bold text-gray-700 md:text-2xl md:text-gray-700 md:font-bold md:text-center">Welcome to Finance App</h1>

        <p className="text-center">Finance Management App</p>

        <div className="mt-3 flex flex-col gap-3">
          <form>
            <button className="w-full h-11 rounded-full shadow-md bg-gray-600 flex items-center justify-center gap-2 mt-5 cursor-pointer">
              <RiTwitterXFill className="text-white text-2xl" />
              <span className="text-white text-xl">Twitter</span>
            </button>
          </form>

          <p className="mt-5 text-gray-700 text-center">Or signup with</p>

          <form>
            <button className="w-full h-11 rounded-full shadow-md bg-red-300 flex items-center justify-center gap-2 mt-5 cursor-pointer">
              <FaGoogle className="text-white text-2xl" />
              <span className="text-white text-xl">Google</span>
            </button>
          </form>
        </div>

        <p className="mt-4 text-sm text-center">By registering, you agree to our <span className="text-blue-500 cursor-pointer">Terms of use</span> and <span className="text-blue-500 cursor-pointer">Privacy Policy</span>.</p>

      </div>
    </main>
  )
}