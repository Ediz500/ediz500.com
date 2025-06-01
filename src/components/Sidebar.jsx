import { Link } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

function Sidebar({ isExpanded, toggleSidebar }) {
  return (
    <div
      className={`h-screen bg-white shadow-lg p-4 flex flex-col transition-all duration-300
        ${isExpanded ? "w-64" : "w-16"} fixed top-0 left-0 z-50`}
    >
      {/* ☰ Toggle Button */}
      <div className="mb-6 flex justify-center  ">
        <button
          onClick={toggleSidebar}
          className="p-2 flex items-center justify-center bg-white text-blue-600 border border-gray-300 hover:bg-blue-100 rounded shadow transition fill-white"
          title="Toggle Sidebar"
        >
          <FaBars className="w-5 h-5" />
        </button>
      </div>

      {/* Logo */}
      <div className="flex items-center  mb-6 h-12">
        <span
          className={`text-xl text-blue-600 font-bold transition-opacity duration-300 ${
            isExpanded ? "opacity-100" : "opacity-0"
          }`}
        >
          Ediz500
        </span>
      </div>

      {/* Menü */}
      <nav className="flex flex-col space-y-4">
        <SidebarLink
          to="/"
          icon={<FaHome />}
          label="Home"
          isExpanded={isExpanded}
        />
        <SidebarLink
          to="/about"
          icon={<FaInfoCircle />}
          label="About"
          isExpanded={isExpanded}
        />
        <SidebarLink
          to="/projects"
          icon={<FaProjectDiagram />}
          label="Projects"
          isExpanded={isExpanded}
        />
        <SidebarLink
          to="/contact"
          icon={<FaEnvelope />}
          label="Contact"
          isExpanded={isExpanded}
        />
      </nav>
    </div>
  );
}

function SidebarLink({ to, icon, label, isExpanded }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 hover:bg-blue-100 p-2 rounded transition-all duration-200"
    >
      <div className="text-xl text-blue-600">{icon}</div>
      <span
        className={`text-sm font-medium transition-all duration-300 ease-in-out ${
          isExpanded ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}

export default Sidebar;
