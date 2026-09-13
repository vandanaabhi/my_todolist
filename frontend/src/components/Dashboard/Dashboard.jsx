import React from "react";
import "./Dashboard.css";

function Dashboard() {

  return (
    <div className="dashboard">

      {/* Page Header */}

      <div className="dashboard-header">

        <div>
          <h1>Dashboard</h1>

          <p>
            Welcome back, Admin. Here's what's happening today.
          </p>
        </div>

        <button className="dashboard-action">
          + Add New
        </button>

      </div>


      {/* Stats */}

      <div className="stats-grid">

        <StatCard
          title="Total Users"
          value="2,847"
          change="+12.5%"
          icon="👥"
        />

        <StatCard
          title="Projects"
          value="128"
          change="+8.2%"
          icon="📁"
        />

        <StatCard
          title="Revenue"
          value="₹8.4L"
          change="+18.7%"
          icon="₹"
        />

        <StatCard
          title="Conversion"
          value="18.7%"
          change="+4.5%"
          icon="%"
        />

      </div>


      {/* Main Dashboard Grid */}

      <div className="dashboard-grid">

        {/* Activity */}

        <div className="dashboard-card activity-card">

          <div className="card-header">

            <div>
              <h2>Recent Activity</h2>
              <p>Latest system activity</p>
            </div>

            <button>
              View All
            </button>

          </div>


          <div className="activity-list">

            <Activity
              avatar="A"
              title="New user registered"
              time="5 minutes ago"
            />

            <Activity
              avatar="P"
              title="Project updated"
              time="25 minutes ago"
            />

            <Activity
              avatar="R"
              title="New report generated"
              time="1 hour ago"
            />

            <Activity
              avatar="S"
              title="Settings updated"
              time="2 hours ago"
            />

          </div>

        </div>


        {/* Overview */}

        <div className="dashboard-card overview-card">

          <div className="card-header">

            <div>
              <h2>Performance</h2>
              <p>Monthly overview</p>
            </div>

            <select>
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>This year</option>
            </select>

          </div>

          <div className="chart-placeholder">

            <div className="chart-bars">

              <span style={{ height: "35%" }}></span>
              <span style={{ height: "55%" }}></span>
              <span style={{ height: "42%" }}></span>
              <span style={{ height: "70%" }}></span>
              <span style={{ height: "62%" }}></span>
              <span style={{ height: "85%" }}></span>
              <span style={{ height: "75%" }}></span>
              <span style={{ height: "92%" }}></span>

            </div>

          </div>

        </div>

      </div>


      {/* Table */}

      <div className="dashboard-card table-card">

        <div className="card-header">

          <div>
            <h2>Recent Projects</h2>
            <p>Recently updated projects</p>
          </div>

          <button>
            View All
          </button>

        </div>


        <div className="table-wrapper">

          <table>

            <thead>

              <tr>
                <th>Project</th>
                <th>Client</th>
                <th>Status</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>AI CRM Platform</td>
                <td>ABC Technologies</td>
                <td>
                  <span className="status-badge completed">
                    Completed
                  </span>
                </td>
                <td>12 Sep 2026</td>
                <td>₹2,40,000</td>
              </tr>

              <tr>
                <td>E-Commerce Platform</td>
                <td>XYZ Retail</td>
                <td>
                  <span className="status-badge progress">
                    In Progress
                  </span>
                </td>
                <td>10 Sep 2026</td>
                <td>₹1,80,000</td>
              </tr>

              <tr>
                <td>Automation System</td>
                <td>Global Solutions</td>
                <td>
                  <span className="status-badge pending">
                    Pending
                  </span>
                </td>
                <td>08 Sep 2026</td>
                <td>₹95,000</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}


/* Stat Card */

function StatCard({
  title,
  value,
  change,
  icon
}) {

  return (
    <div className="stat-card">

      <div className="stat-top">

        <div className="stat-icon">
          {icon}
        </div>

        <span className="stat-change">
          {change}
        </span>

      </div>

      <span className="stat-title">
        {title}
      </span>

      <strong className="stat-value">
        {value}
      </strong>

    </div>
  );
}


/* Activity */

function Activity({
  avatar,
  title,
  time
}) {

  return (
    <div className="activity-item">

      <div className="activity-avatar">
        {avatar}
      </div>

      <div className="activity-info">

        <strong>
          {title}
        </strong>

        <span>
          {time}
        </span>

      </div>

    </div>
  );
}

export default Dashboard;