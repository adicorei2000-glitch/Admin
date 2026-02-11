import React from "react";

const AdminDashboard = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "220px",
        backgroundColor: "#111827",
        color: "white",
        padding: "20px"
      }}>
        <h2>Admin</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "15px 0", cursor: "pointer" }}>Dashboard</li>
          <li style={{ margin: "15px 0", cursor: "pointer" }}>Users</li>
          <li style={{ margin: "15px 0", cursor: "pointer" }}>Orders</li>
          <li style={{ margin: "15px 0", cursor: "pointer" }}>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px", backgroundColor: "#f3f4f6" }}>
        <h1>Dashboard Overview</h1>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}>
          
          <div style={cardStyle}>
            <h3>Total Users</h3>
            <p>1,245</p>
          </div>

          <div style={cardStyle}>
            <h3>Total Orders</h3>
            <p>532</p>
          </div>

          <div style={cardStyle}>
            <h3>Revenue</h3>
            <p>$12,430</p>
          </div>

          <div style={cardStyle}>
            <h3>Active Now</h3>
            <p>87</p>
          </div>

        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};

export default AdminDashboard;