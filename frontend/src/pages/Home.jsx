import React from "react";
import {
  faUsers,
  faUserPlus,
  faClipboardList,
  faChartLine,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="flex flex-col gap-8 w-[90%] md:w-[80%] mx-auto py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-sky-600 text-white p-6 md:p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Employee Management System
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Streamline your workforce management with our comprehensive EMS
          solution
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-lg hover:bg-blue-100 transition-colors">
            Get Started
          </button>
          <button className="border-2 border-white px-6 py-2 rounded-lg hover:bg-[#0ea5e9] transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <QuickAccessCard
          icon={faUsers}
          title="Employee Roster"
          description="View and manage your complete employee directory"
          link="/EmployeeRoster"
          color="bg-blue-700"
        />
        <QuickAccessCard
          icon={faUserPlus}
          title="Add Employee"
          description="Register new employees into the system"
          link="/"
          color="bg-green-600"
        />
        <QuickAccessCard
          icon={faClipboardList}
          title="Lookup System"
          description="Search and find employee details quickly"
          link="/LookUpSystem"
          color="bg-purple-600"
        />
        <QuickAccessCard
          icon={faChartLine}
          title="Performance Metrics"
          description="Track and analyze employee performance"
          link="/"
          color="bg-red-600"
        />
        <QuickAccessCard
          icon={faCalendarAlt}
          title="Schedule Management"
          description="Organize and view employee schedules"
          link="/"
          color="bg-amber-600"
        />
        <div className="flex flex-col p-6 rounded-xl bg-gray-100 shadow-md justify-center items-center text-center h-full">
          <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
          <p className="mb-4">Access documentation and support resources</p>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            Support Center
          </button>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          System Overview
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="124" label="Total Employees" />
          <StatCard value="8" label="Departments" />
          <StatCard value="12" label="New Hires" />
          <StatCard value="95%" label="Retention Rate" />
        </div>
      </section>
    </div>
  );
};

// Component for quick access cards
const QuickAccessCard = ({ icon, title, description, link, color }) => {
  return (
    <a
      href={link}
      className="flex flex-col p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow border-t-4 border-l-4 border-t-gray-200 border-l-gray-200"
    >
      <div
        className={`${color} text-white p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4`}
      >
        <FontAwesomeIcon icon={icon} className="text-xl" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
};

// Component for stat cards
const StatCard = ({ value, label }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <p className="text-2xl md:text-3xl font-bold text-blue-900">{value}</p>
      <p className="text-gray-600 text-sm">{label}</p>
    </div>
  );
};

export default Home;
