import React, { useState } from 'react';

// Welcome Page Component
const WelcomePage = ({ onLogin }) => {
  const [activeNav, setActiveNav] = useState('home');

  return (
    <div 
      className="flex flex-col min-h-screen w-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:  "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Navigation Bar */}
      <nav className="bg-blue-800 text-white p-4 shadow-md relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">School Management System</div>
          <div className="flex space-x-6">
            {['home', 'about', 'contact'].map((item) => (
              <button
                key={item}
                className={`capitalize ${
                  activeNav === item ? 'font-bold underline' : 'hover:text-blue-200'
                }`}
                onClick={() => setActiveNav(item)}
              >
                {item === 'home' ? 'Home' : item === 'about' ? 'About' : 'Contact Us'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center relative z-10 p-4">
        <div
          className="p-8 rounded-lg shadow-xl max-w-2xl mx-4"
          style={{ background: "rgba(255,255,255,0.7)" }}
        >
          <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center">
            Welcome to School Management System
          </h1>
          <p className="text-gray-700 text-lg mb-8 text-center">
            Efficiently manage students, teachers, classes, and academic records with our comprehensive school management solution.
          </p>
          
          <div className="text-center">
            <button
              onClick={onLogin}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 bg-opacity-90 text-white p-6 text-center relative z-10">
        <p>© 2025 School Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Dummy data for students
const dummyStudents = [
  { id: 1, name: 'John Smith', class: '10A', age: 16, gender: 'Male', status: 'Active' },
  { id: 2, name: 'Emily Johnson', class: '9B', age: 15, gender: 'Female', status: 'Active' },
  { id: 3, name: 'Michael Brown', class: '11C', age: 17, gender: 'Male', status: 'Inactive' },
  { id: 4, name: 'Sarah Davis', class: '10B', age: 16, gender: 'Female', status: 'Active' },
  { id: 5, name: 'David Wilson', class: '12A', age: 18, gender: 'Male', status: 'Active' },
];

// Dummy data for stats
const dummyStats = {
  totalStudents: 1245,
  totalTeachers: 85,
  totalClasses: 42,
};

// Sidebar Component
const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = ['Students', 'Teachers', 'Classes', 'Subjects', 'Attendance', 'Results'];
  
  return (
    <div className="w-64 bg-blue-800 text-white h-full flex-shrink-0">
      <div className="p-5 text-2xl font-bold border-b border-blue-700">
        School Admin
      </div>
      <nav className="p-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item} className="mb-2">
              <button
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  activeTab === item ? 'bg-blue-900 text-white' : 'hover:bg-blue-700'
                }`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

// Header Component
const Header = ({ onLogout }) => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      <button
        onClick={onLogout}
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors"
      >
        Logout
      </button>
    </header>
  );
};

// Stats Card Component
const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <div className="mr-4 p-3 bg-blue-100 rounded-full text-blue-600">
        {icon}
      </div>
      <div>
        <p className="text-gray-600 text-sm">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

// Students Table Component
const StudentsTable = ({ students, onAddNew }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Students</h2>
        <button
          onClick={onAddNew}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Add New Student
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.class}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.age}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    student.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('Students');
  const [students, setStudents] = useState(dummyStudents);
  
  // Function to handle adding a new student
  const handleAddNewStudent = () => {
    // In a real application, this would open a modal or form
    alert('Add New Student functionality would open a form here');
  };

  // If not logged in, show the welcome page
  if (!isLoggedIn) {
    return <WelcomePage onLogin={() => setIsLoggedIn(true)} />;
  }
  
  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header onLogout={() => setIsLoggedIn(false)} />
        
        {/* Main Content */}
        <main className="p-6 flex-1 overflow-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <StatsCard 
              title="Total Students" 
              value={dummyStats.totalStudents} 
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} 
            />
            <StatsCard 
              title="Total Teachers" 
              value={dummyStats.totalTeachers} 
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>} 
            />
            <StatsCard 
              title="Total Classes" 
              value={dummyStats.totalClasses} 
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>} 
            />
          </div>
          
          {/* Students Table (only shown when Students tab is active) */}
          {activeTab === 'Students' && (
            <StudentsTable students={students} onAddNew={handleAddNewStudent} />
          )}
          
          {/* Placeholder for other tabs */}
          {activeTab !== 'Students' && (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{activeTab} Management</h2>
              <p className="text-gray-600">This section would show {activeTab.toLowerCase()} management interface.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;