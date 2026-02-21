import React, { useState } from "react";
import "./faculty.css";

// FacultyManagement.js
// ----------------------------------
// NOTE: This file expects a companion stylesheet named `faculty.css` in the same folder.
// Copy the CSS provided in the comment below into `faculty.css` before running.

const FACULTY = [
  {
    name: "Dr. Sunita Mehta",
    designation: "Principal",
    dept: "Administration",
    rating: 4.9,
    status: "active",
    qualification: "Ph.D. in Educational Administration",
    experience: 25,
    subjectsCount: 2,
    subjects: ["Educational Leadership", "Academic Administration"],
    phone: "+91 98765 43210",
    email: "principal@college.edu",
    joined: "7/15/1998",
    specialization: "Educational Management",
    color: "#2F80ED",
  },
  {
    name: "Dr. Rajesh Kumar",
    designation: "Professor & HOD",
    dept: "BCA",
    rating: 4.8,
    status: "active",
    qualification: "Ph.D. in Computer Science",
    experience: 18,
    subjectsCount: 3,
    subjects: ["Database Management", "Data Structures", "Algorithms"],
    phone: "+91 98765 43211",
    email: "rajesh.kumar@college.edu",
    joined: "8/20/2006",
    specialization: "Database Systems",
    color: "#2979FF",
  },
  {
    name: "Dr. Priya Sharma",
    designation: "Associate Professor & HOD",
    dept: "BCOM",
    rating: 4.7,
    status: "active",
    qualification: "Ph.D. in Commerce, CA",
    experience: 15,
    subjectsCount: 3,
    subjects: ["Financial Accounting", "Cost Accounting", "Taxation"],
    phone: "+91 98765 43212",
    email: "priya.sharma@college.edu",
    joined: "6/10/2009",
    specialization: "Financial Management",
    color: "#27AE60",
  },
  {
    name: "Dr. Sunita Gupta",
    designation: "Associate Professor",
    dept: "Hindi",
    rating: 4.6,
    status: "active",
    qualification: "Ph.D. in Hindi Linguistics",
    experience: 14,
    subjectsCount: 3,
    subjects: ["Hindi Grammar", "Hindi Prose", "Hindi Poetry"],
    phone: "+91 98765 43213",
    email: "sunita.gupta@college.edu",
    joined: "5/22/2010",
    specialization: "Hindi Linguistics",
    color: "#FF4D6D",
  },
  {
    name: "Dr. Vidya Shankar Mishra",
    designation: "Professor & HOD",
    dept: "Sanskrit",
    rating: 4.9,
    status: "active",
    qualification: "Ph.D. in Sanskrit Literature",
    experience: 22,
    subjectsCount: 3,
    subjects: ["Vedic Literature", "Sanskrit Grammar", "Classical Texts"],
    phone: "+91 98765 43214",
    email: "vidya.mishra@college.edu",
    joined: "7/12/2002",
    specialization: "Vedic Studies",
    color: "#7B3FFB",
  },
  {
    name: "Prof. Ananda Kumar",
    designation: "Assistant Professor",
    dept: "Sanskrit",
    rating: 4.3,
    status: "active",
    qualification: "M.A. Sanskrit, Shastri",
    experience: 9,
    subjectsCount: 3,
    subjects: ["Classical Sanskrit Poetry", "Ayurveda Texts", "Grammar"],
    phone: "+91 98765 43215",
    email: "ananda.kumar@college.edu",
    joined: "8/12/2015",
    specialization: "Classical Literature",
    color: "#9C27B0",
  },
];

export default function FacultyManagement() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All Departments");

  const departments = [
    "All Departments",
    "Administration",
    "BCA",
    "BCOM",
    "BBA",
    "Kannada",
    "Hindi",
    "Sanskrit",
    "Physical Education",
  ];

  const filtered = FACULTY.filter((f) => {
    const inDept = department === "All Departments" || f.dept === department;
    const q = query.trim().toLowerCase();
    if (!q) return inDept;
    const match =
      f.name.toLowerCase().includes(q) ||
      f.designation.toLowerCase().includes(q) ||
      f.dept.toLowerCase().includes(q) ||
      f.subjects.join(" ").toLowerCase().includes(q);
    return inDept && match;
  });

  return (
    <div className="faculty-page">
      <header className="fm-header">
        <div className="fm-title">
          <h1>Faculty Management</h1>
          <p>Manage all teaching staff details and information</p>
        </div>

        <div className="fm-controls">
          <input
            className="fm-search"
            placeholder="Search faculty by name, designation, department, or subjects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select
            className="fm-select"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>

          <button className="fm-filter">Filter</button>
        </div>
      </header>

      <main className="fm-main">
        <div className="fm-grid">
          {filtered.map((f, idx) => (
            <article className="fm-card" key={idx}>
              <div
                className="fm-top-border"
                style={{ backgroundColor: f.color }}
              />

              <div className="fm-card-head">
                <div className="fm-profile">
                  <img
                    src={`https://i.pravatar.cc/100?img=${idx + 10}`}
                    alt={f.name}
                  />
                  <div className="fm-meta">
                    <div className="fm-name">{f.name}</div>
                    <div className="fm-designation">{f.designation}</div>
                    <div className="fm-dept">{f.dept}</div>
                  </div>
                </div>

                <div className="fm-right">
                  <div className="fm-rating">⭐ {f.rating}</div>
                  <div className={`fm-status ${f.status}`}>{f.status}</div>
                </div>
              </div>

              <section className="fm-qualification">
                <div className="fm-label">Qualification</div>
                <div className="fm-qual-text">{f.qualification}</div>
              </section>

              <section className="fm-quick-stats">
                <div className="fm-pill light-green">
                  <div className="big">{f.experience} years</div>
                  <div className="small">Experience</div>
                </div>

                <div className="fm-pill light-purple">
                  <div className="big">{f.subjectsCount}</div>
                  <div className="small">Subjects</div>
                </div>
              </section>

              <section className="fm-subjects">
                <div className="fm-label">Subjects</div>
                <div className="fm-tags">
                  {f.subjects.map((s, i) => (
                    <span className="fm-tag" key={i}>
                      {s}
                    </span>
                  ))}
                </div>

                <div className="fm-contact">
                  <div>📞 {f.phone}</div>
                  <div>✉️ {f.email}</div>
                  <div>📅 Joined: {f.joined}</div>
                </div>

                <div className="fm-label">Specialization</div>
                <div className="fm-spec">{f.specialization}</div>
              </section>
            </article>
          ))}
        </div>

        <div className="fm-stats">
          <div className="stat-box">
            <div className="stat-num">18</div>
            <div className="stat-text">Total Faculty</div>
          </div>

          <div className="stat-box">
            <div className="stat-num">16</div>
            <div className="stat-text">Professors</div>
          </div>

          <div className="stat-box">
            <div className="stat-num">7</div>
            <div className="stat-text">HODs</div>
          </div>

          <div className="stat-box">
            <div className="stat-num">4.6</div>
            <div className="stat-text">Avg Rating</div>
          </div>
        </div>
      </main>
    </div>
  );
}

