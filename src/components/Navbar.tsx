import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();

  // Check if the current location matches the "/register" path
  const isRegisterPage = location.pathname === "/register";
  return (
    <nav className="flex justify-between sticky top-0 w-full max-h-16 p-4 px-16 pr-2 border-b border-black shadow-lg">
      <Link to={"/"} className="font-extrabold text-2xl ">
        Quiz
      </Link>

      <ul>
        <li>
          {!isRegisterPage && (
            <Link
              to={"register"}
              className="p-2 px-3 hover:shadow-xl bg-gray-900 text-white rounded-lg text-lg"
            >
              Get started
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
