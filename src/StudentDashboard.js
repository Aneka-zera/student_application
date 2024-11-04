import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "./StudentDashboard.css";

// Register the chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StudentDashboard = () => {
  const studentInfo = {
    name: "John Doe",
    class: "12th Grade",
    rollNumber: "23",
  };

  const subjects = [
    { name: "Math", marks: 95 },
    { name: "Science", marks: 88 },
    { name: "English", marks: 90 },
    { name: "History", marks: 85 },
    { name: "Physical Education", marks: 80 },
  ];

  const graphData = {
    labels: subjects.map(subject => subject.name),
    datasets: [
      {
        label: "Marks",
        data: subjects.map(subject => subject.marks),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.1,
        fill: true,
      },
    ],
  };

  const graphOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Academic Performance",
      },
    },
  };

  return (
    <div className="student-dashboard">
      <h1>Welcome, {studentInfo.name}!</h1>
      <div className="student-profile">
        <h2>Student Profile</h2>
        <p><strong>Name:</strong> {studentInfo.name}</p>
        <p><strong>Class:</strong> {studentInfo.class}</p>
        <p><strong>Roll Number:</strong> {studentInfo.rollNumber}</p>
      </div>

      <div className="student-results">
        <h2>Results</h2>
        <ul>
          {subjects.map((subject, index) => (
            <li key={index}>
              <strong>{subject.name}:</strong> {subject.marks}
            </li>
          ))}
        </ul>
      </div>

      <div className="academic-graph">
        <h2>Academic Performance</h2>
        <Line data={graphData} options={graphOptions} />
      </div>
    </div>
  );
};

export default StudentDashboard;
