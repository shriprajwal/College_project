import { useState } from "react";
import { useNavigate } from "react-router-dom";

const timetableData = {
  "1st Year": {
    "1st Semester": {
      timeSlots: ["8:00-9:00","9:00-10:00","10:00-10:30","10:30-11:30","11:30-12:30","12:30-13:30","13:30-14:30"],
      days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      dates: ["Sep 22","Sep 23","Sep 24","Sep 25","Sep 26","Sep 27"],
      schedule: {
        "8:00-9:00": [
          { subject: "Programming in C", room: "103", teacher: "Malhotra" },
          { subject: "Computer Fundamentals", room: "104", teacher: "Nair" },
          { subject: "Mathematics-I", room: "105", teacher: "Singh" },
          { subject: "English Language", room: "Lab-1", teacher: "Patel" },
          { subject: "Environmental Studies", room: "Lab-2", teacher: "Kumar" },
          { subject: "Physical Education", room: "201", teacher: "Malhotra" },
        ],
        "9:00-10:00": [
          { subject: "Computer Fundamentals", room: "104", teacher: "Nair" },
          { subject: "Mathematics-I", room: "105", teacher: "Singh" },
          { subject: "English Language", room: "Lab-1", teacher: "Patel" },
          { subject: "Environmental Studies", room: "Lab-2", teacher: "Kumar" },
          { subject: "Physical Education", room: "201", teacher: "Malhotra" },
          { subject: "Programming in C", room: "202", teacher: "Nair" },
        ],
        "10:00-10:30": "BREAK",
        "10:30-11:30": [
          { subject: "English Language", room: "Lab-1", teacher: "Patel" },
          { subject: "Environmental Studies", room: "Lab-2", teacher: "Kumar" },
          { subject: "Physical Education", room: "201", teacher: "Malhotra" },
          { subject: "Programming in C", room: "202", teacher: "Nair" },
          { subject: "Computer Fundamentals", room: "Auditorium", teacher: "Singh" },
          { subject: "Mathematics-I", room: "101", teacher: "Patel" },
        ],
        "11:30-12:30": [
          { subject: "Environmental Studies", room: "Lab-2", teacher: "Kumar" },
          { subject: "Physical Education", room: "201", teacher: "Malhotra" },
          { subject: "Programming in C", room: "202", teacher: "Nair" },
          { subject: "Computer Fundamentals", room: "Auditorium", teacher: "Singh" },
          { subject: "Mathematics-I", room: "101", teacher: "Patel" },
          { subject: "English Language", room: "102", teacher: "Kumar" },
        ],
        "12:30-13:30": [
          { subject: "Physical Education", room: "201", teacher: "Malhotra" },
          { subject: "Programming in C", room: "202", teacher: "Nair" },
          { subject: "Computer Fundamentals", room: "Auditorium", teacher: "Singh" },
          { subject: "Mathematics-I", room: "101", teacher: "Patel" },
          { subject: "English Language", room: "102", teacher: "Kumar" },
          null,
        ],
        "13:30-14:30": [
          { subject: "Programming in C", room: "202", teacher: "Nair" },
          { subject: "Computer Fundamentals", room: "Auditorium", teacher: "Singh" },
          { subject: "Mathematics-I", room: "101", teacher: "Patel" },
          { subject: "English Language", room: "102", teacher: "Kumar" },
          { subject: "Environmental Studies", room: "102", teacher: "Malhotra" },
          null,
        ],
      },
    },
    "2nd Semester": {
      timeSlots: ["8:00-9:00","9:00-10:00","10:00-10:30","10:30-11:30","11:30-12:30","12:30-13:30","13:30-14:30"],
      days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      dates: ["Jan 13","Jan 14","Jan 15","Jan 16","Jan 17","Jan 18"],
      schedule: {
        "8:00-9:00": [
          { subject: "Data Structures", room: "103", teacher: "Sharma" },
          { subject: "DBMS", room: "104", teacher: "Gupta" },
          { subject: "Mathematics-II", room: "105", teacher: "Singh" },
          { subject: "Digital Electronics", room: "Lab-1", teacher: "Patel" },
          { subject: "Communication Skills", room: "Lab-2", teacher: "Kumar" },
          { subject: "Physical Education", room: "201", teacher: "Malhotra" },
        ],
        "9:00-10:00": [
          { subject: "DBMS", room: "104", teacher: "Gupta" },
          { subject: "Mathematics-II", room: "105", teacher: "Singh" },
          { subject: "Digital Electronics", room: "Lab-1", teacher: "Patel" },
          { subject: "Communication Skills", room: "Lab-2", teacher: "Kumar" },
          { subject: "Physical Education", room: "201", teacher: "Malhotra" },
          { subject: "Data Structures", room: "202", teacher: "Sharma" },
        ],
        "10:00-10:30": "BREAK",
        "10:30-11:30": [
          { subject: "Digital Electronics", room: "Lab-1", teacher: "Patel" },
          { subject: "Communication Skills", room: "Lab-2", teacher: "Kumar" },
          { subject: "Physical Education", room: "201", teacher: "Malhotra" },
          { subject: "Data Structures", room: "202", teacher: "Sharma" },
          { subject: "DBMS", room: "Auditorium", teacher: "Gupta" },
          { subject: "Mathematics-II", room: "101", teacher: "Patel" },
        ],
        "11:30-12:30": [
          { subject: "Communication Skills", room: "Lab-2", teacher: "Kumar" },
          { subject: "Physical Education", room: "201", teacher: "Malhotra" },
          { subject: "Data Structures", room: "202", teacher: "Sharma" },
          { subject: "DBMS", room: "Auditorium", teacher: "Gupta" },
          { subject: "Mathematics-II", room: "101", teacher: "Patel" },
          { subject: "Digital Electronics", room: "102", teacher: "Kumar" },
        ],
        "12:30-13:30": [
          { subject: "Physical Education", room: "201", teacher: "Malhotra" },
          { subject: "Data Structures", room: "202", teacher: "Sharma" },
          { subject: "DBMS", room: "Auditorium", teacher: "Gupta" },
          { subject: "Mathematics-II", room: "101", teacher: "Patel" },
          { subject: "Digital Electronics", room: "102", teacher: "Kumar" },
          null,
        ],
        "13:30-14:30": [
          { subject: "Data Structures", room: "202", teacher: "Sharma" },
          { subject: "DBMS", room: "Auditorium", teacher: "Gupta" },
          { subject: "Mathematics-II", room: "101", teacher: "Patel" },
          { subject: "Digital Electronics", room: "102", teacher: "Kumar" },
          { subject: "Communication Skills", room: "102", teacher: "Malhotra" },
          null,
        ],
      },
    },
  },
};

const subjectColors = {
  "Programming in C":      { bg: "#eff6ff", border: "#60a5fa" },
  "Computer Fundamentals": { bg: "#f5f3ff", border: "#a78bfa" },
  "Mathematics-I":         { bg: "#f0fdf4", border: "#34d399" },
  "English Language":      { bg: "#fffbeb", border: "#fbbf24" },
  "Environmental Studies": { bg: "#f0fdfa", border: "#2dd4bf" },
  "Physical Education":    { bg: "#fff1f2", border: "#fb7185" },
  "Data Structures":       { bg: "#eff6ff", border: "#60a5fa" },
  "DBMS":                  { bg: "#f5f3ff", border: "#a78bfa" },
  "Mathematics-II":        { bg: "#f0fdf4", border: "#34d399" },
  "Digital Electronics":   { bg: "#fffbeb", border: "#fbbf24" },
  "Communication Skills":  { bg: "#f0fdfa", border: "#2dd4bf" },
};
const getColor = (s) => subjectColors[s] || { bg: "#f9fafb", border: "#9ca3af" };

// ── Icons (all inline style, no Tailwind) ────────────────────────
const IconClock = ({ size = 14, color = "#9ca3af" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconPin = ({ size = 11, color = "#9ca3af" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconUser = ({ size = 11, color = "#9ca3af" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconChevron = ({ open }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ flexShrink: 0, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const IconExport = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const IconPrint = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);

const IconBack = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);

const IconMonitor = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

// ── Main Component ────────────────────────────────────────────────
export default function BCATimeTable() {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear]         = useState("1st Year");
  const [selectedSemester, setSelectedSemester] = useState("1st Semester");
  const [semOpen, setSemOpen]                   = useState(false);
  const [yearOpen, setYearOpen]                 = useState(false);

  const years     = Object.keys(timetableData);
  const semesters = Object.keys(timetableData[selectedYear]);
  const data      = timetableData[selectedYear][selectedSemester];

  const handleYearChange = (y) => { setSelectedYear(y); setSelectedSemester(Object.keys(timetableData[y])[0]); setYearOpen(false); };
  const handleSemChange  = (s) => { setSelectedSemester(s); setSemOpen(false); };
  const closeAll         = ()  => { setSemOpen(false); setYearOpen(false); };

  const S = {
    page:      { minHeight:"100vh", background:"#f7f8fc", fontFamily:"'Segoe UI',sans-serif" },
    nav:       { background:"white", borderBottom:"1px solid #e5e7eb", padding:"10px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", position:"sticky", top:0, zIndex:20 },
    navLeft:   { display:"flex", alignItems:"center", gap:"14px" },
    backBtn:   { display:"flex", alignItems:"center", justifyContent:"center", width:"32px", height:"32px", borderRadius:"8px", border:"1px solid #e5e7eb", background:"white", cursor:"pointer", color:"#374151" },
    navIcon:   { width:"36px", height:"36px", borderRadius:"10px", background:"linear-gradient(135deg,#a855f7,#7c3aed)", display:"flex", alignItems:"center", justifyContent:"center" },
    navTitle:  { fontWeight:700, fontSize:"14px", color:"#1f2937", margin:0 },
    navSub:    { fontSize:"11px", color:"#9ca3af", margin:0 },
    navBtns:   { display:"flex", gap:"8px" },
    actionBtn: { display:"flex", alignItems:"center", gap:"6px", fontSize:"12px", color:"#6b7280", border:"1px solid #e5e7eb", borderRadius:"8px", padding:"6px 12px", background:"white", cursor:"pointer", fontFamily:"inherit" },
    banner:    { background:"linear-gradient(135deg,#38bdf8,#0ea5e9,#0891b2)", position:"relative", overflow:"hidden" },
    bannerInner: { position:"relative", padding:"28px 24px", display:"flex", alignItems:"center", gap:"20px" },
    bannerIcon: { width:"52px", height:"52px", borderRadius:"16px", background:"rgba(255,255,255,0.2)", border:"1px solid rgba(255,255,255,0.3)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 },
    bannerH1:  { color:"white", fontWeight:700, fontSize:"17px", margin:"0 0 4px" },
    bannerP:   { color:"rgba(255,255,255,0.8)", fontSize:"13px", margin:"0 0 12px" },
    pill:      { background:"rgba(255,255,255,0.2)", border:"1px solid rgba(255,255,255,0.25)", color:"white", fontSize:"11px", padding:"4px 12px", borderRadius:"20px", fontWeight:500 },
    filters:   { background:"white", borderBottom:"1px solid #e5e7eb", padding:"10px 24px", display:"flex", alignItems:"center", gap:"24px" },
    filterLbl: { fontSize:"13px", color:"#6b7280" },
    yearBtn:   { display:"flex", alignItems:"center", gap:"8px", fontSize:"13px", fontWeight:500, color:"#374151", border:"1px solid #d1d5db", borderRadius:"8px", padding:"6px 12px", background:"white", cursor:"pointer", minWidth:"110px", fontFamily:"inherit" },
    semBtn:    { display:"flex", alignItems:"center", gap:"8px", fontSize:"13px", fontWeight:600, color:"#0284c7", border:"1px solid #7dd3fc", borderRadius:"8px", padding:"6px 12px", background:"white", cursor:"pointer", minWidth:"140px", fontFamily:"inherit" },
    dropdown:  { position:"absolute", top:"calc(100% + 6px)", left:0, background:"white", border:"1px solid #e5e7eb", borderRadius:"12px", boxShadow:"0 8px 24px rgba(0,0,0,0.1)", zIndex:50, minWidth:"155px", overflow:"hidden" },
    schedLabel:{ padding:"20px 24px 12px", display:"flex", alignItems:"center", gap:"8px" },
    schedTxt:  { fontSize:"13px", fontWeight:700, color:"#1f2937" },
    grid:      { padding:"0 24px 24px", overflowX:"auto" },
    timeCol:   { display:"flex", alignItems:"start", gap:"4px", padding:"8px 8px 8px 0" },
    timeTxt:   { fontSize:"11px", color:"#6b7280", lineHeight:1.4 },
    dayName:   { fontSize:"13px", fontWeight:700, color:"#1f2937" },
    dayDate:   { fontSize:"11px", color:"#9ca3af", marginTop:"2px" },
    hdrLbl:    { fontSize:"11px", fontWeight:700, color:"#9ca3af", textTransform:"uppercase", letterSpacing:"0.05em" },
    divider:   { height:"1px", background:"#e5e7eb", marginBottom:"4px" },
    rowDiv:    { height:"1px", background:"#f3f4f6" },
    breakCell: { background:"#fffbeb", border:"1px solid #fde68a", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center", gap:"6px", padding:"8px 0" },
    breakTxt:  { fontSize:"10px", fontWeight:700, color:"#d97706", letterSpacing:"0.08em" },
    subjName:  { fontSize:"11px", fontWeight:600, color:"#1f2937", lineHeight:1.3, marginBottom:"6px" },
    metaRow:   { display:"flex", alignItems:"center", gap:"4px", marginBottom:"3px" },
    metaTxt:   { fontSize:"10.5px", color:"#6b7280" },
    // info panels
    panelWrap: { padding:"0 24px 32px", display:"flex", flexDirection:"column", gap:"16px" },
    panel:     { background:"white", border:"1px solid #e5e7eb", borderRadius:"14px", padding:"20px" },
    panelH:    { fontWeight:700, fontSize:"13px", color:"#1f2937", margin:"0 0 14px" },
    infoRow:   { display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"10px" },
    infoLbl:   { fontSize:"12px", color:"#6b7280" },
    infoVal:   { fontSize:"12px", fontWeight:600, color:"#374151" },
  };

  return (
    <div style={S.page} onClick={closeAll}>

      {/* ── Nav ── */}
      <div style={S.nav}>
        <div style={S.navLeft}>
          <button style={S.backBtn} onClick={() => navigate("/department/bca")}><IconBack /></button>
          <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
            <div style={S.navIcon}><IconMonitor /></div>
            <div>
              <p style={S.navTitle}>BCA Timetable</p>
              <p style={S.navSub}>{selectedYear} · {selectedSemester}</p>
            </div>
          </div>
        </div>
        <div style={S.navBtns}>
          <button style={S.actionBtn}><IconExport /> Export</button>
          <button style={S.actionBtn}><IconPrint /> Print</button>
        </div>
      </div>

      {/* Gradient line */}
      <div style={{ height:"3px", background:"linear-gradient(90deg,#a855f7,#6366f1,#3b82f6)" }} />

      {/* ── Banner ── */}
      <div style={S.banner}>
        <div style={{ position:"absolute", top:0, right:0, width:"280px", height:"280px", borderRadius:"50%", background:"rgba(255,255,255,0.08)", transform:"translate(80px,-80px)" }} />
        <div style={{ position:"absolute", bottom:0, left:"50%", width:"220px", height:"220px", borderRadius:"50%", background:"rgba(255,255,255,0.06)", transform:"translate(0,60px)" }} />
        <div style={S.bannerInner}>
          <div style={S.bannerIcon}><IconMonitor /></div>
          <div>
            <h1 style={S.bannerH1}>Bachelor in Computer Applications</h1>
            <p style={S.bannerP}>Academic Year 2024-25</p>
            <div style={{ display:"flex", gap:"8px" }}>
              <span style={S.pill}>📅 {selectedYear}</span>
              <span style={S.pill}>📘 {selectedSemester}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Filters ── */}
      <div style={S.filters} onClick={e => e.stopPropagation()}>
        {/* Year */}
        <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
          <span style={S.filterLbl}>Year:</span>
          <div style={{ position:"relative" }}>
            <button style={S.yearBtn} onClick={e => { e.stopPropagation(); setYearOpen(!yearOpen); setSemOpen(false); }}>
              <span style={{ flex:1, textAlign:"left" }}>{selectedYear}</span>
              <IconChevron open={yearOpen} />
            </button>
            {yearOpen && (
              <div style={S.dropdown}>
                {years.map(y => (
                  <button key={y} onClick={() => handleYearChange(y)}
                    style={{ width:"100%", textAlign:"left", padding:"10px 16px", fontSize:"13px", background: y === selectedYear ? "#eff6ff" : "white", color: y === selectedYear ? "#2563eb" : "#374151", fontWeight: y === selectedYear ? 600 : 400, border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                    {y}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Semester */}
        <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
          <span style={S.filterLbl}>Semester:</span>
          <div style={{ position:"relative" }}>
            <button style={S.semBtn} onClick={e => { e.stopPropagation(); setSemOpen(!semOpen); setYearOpen(false); }}>
              <span style={{ flex:1, textAlign:"left" }}>{selectedSemester}</span>
              <IconChevron open={semOpen} />
            </button>
            {semOpen && (
              <div style={S.dropdown}>
                {semesters.map(s => (
                  <button key={s} onClick={() => handleSemChange(s)}
                    style={{ width:"100%", textAlign:"left", padding:"10px 16px", fontSize:"13px", background: s === selectedSemester ? "#f0f9ff" : "white", color: s === selectedSemester ? "#0284c7" : "#374151", fontWeight: s === selectedSemester ? 600 : 400, border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Weekly Schedule label ── */}
      <div style={S.schedLabel}>
        <IconClock size={16} color="#0ea5e9" />
        <span style={S.schedTxt}>Weekly Schedule</span>
      </div>

      {/* ── Timetable Grid ── */}
      <div style={S.grid}>
        <div style={{ minWidth:"900px" }}>
          {/* Day header */}
          <div style={{ display:"grid", gridTemplateColumns:"82px repeat(6,1fr)", gap:"0 4px", paddingBottom:"8px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"4px" }}>
              <IconClock size={13} color="#9ca3af" />
              <span style={S.hdrLbl}>Time</span>
            </div>
            {data.days.map((day, i) => (
              <div key={day} style={{ padding:"0 4px" }}>
                <div style={S.dayName}>{day}</div>
                <div style={S.dayDate}>{data.dates[i]}</div>
              </div>
            ))}
          </div>
          <div style={S.divider} />

          {data.timeSlots.map(slot => {
            const slotData = data.schedule[slot];
            const isBreak  = slotData === "BREAK";
            return (
              <div key={slot}>
                <div style={{ display:"grid", gridTemplateColumns:"82px repeat(6,1fr)", gap:"0 4px", alignItems:"start" }}>
                  {/* Time */}
                  <div style={S.timeCol}>
                    <IconClock size={11} color="#d1d5db" />
                    <span style={S.timeTxt}>{slot}</span>
                  </div>

                  {isBreak
                    ? [...Array(6)].map((_, i) => (
                        <div key={i} style={{ padding:"4px 2px" }}>
                          <div style={S.breakCell}>
                            <IconClock size={11} color="#f59e0b" />
                            <span style={S.breakTxt}>BREAK</span>
                          </div>
                        </div>
                      ))
                    : slotData.map((cell, i) => {
                        if (!cell) return <div key={i} style={{ padding:"4px 2px" }} />;
                        const c = getColor(cell.subject);
                        return (
                          <div key={i} style={{ padding:"4px 2px" }}>
                            <div style={{ background: c.bg, borderLeft:`3px solid ${c.border}`, borderRadius:"8px", padding:"8px", cursor:"default", transition:"box-shadow .15s" }}
                              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.1)"}
                              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
                              <div style={S.subjName}>{cell.subject}</div>
                              <div style={S.metaRow}>
                                <IconPin size={11} color="#9ca3af" />
                                <span style={S.metaTxt}>{cell.room}</span>
                              </div>
                              <div style={S.metaRow}>
                                <IconUser size={11} color="#9ca3af" />
                                <span style={S.metaTxt}>{cell.teacher}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })
                  }
                </div>
                <div style={S.rowDiv} />
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ height:"8px", background:"#f3f4f6", borderTop:"1px solid #e5e7eb", borderBottom:"1px solid #e5e7eb" }} />

      {/* ── INFO PANELS ── */}
      <div style={S.panelWrap}>

        {/* Row 1 */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"16px" }}>
          {[
            { title:"Class Timings", rows:[
              ["Morning Session:","9:00 AM - 12:50 PM"],
              ["Lunch Break:","12:50 PM - 2:00 PM"],
              ["Afternoon Session:","2:00 PM - 4:50 PM"],
              ["Saturday Classes:","9:00 AM - 12:00 PM"],
            ]},
            { title:"Room Codes", rows:[
              ["101-105:","Lecture Halls"],
              ["101-105, 201-202:","Lecture Halls"],
              ["Lab-1, Lab-2:","Computer Labs"],
              ["Auditorium:","Main Hall"],
            ]},
            { title:"Academic Info", rows:[
              ["Total Subjects:","6"],
              ["Faculty Count:","3"],
              ["Working Days:","6 days/week"],
              ["Class Duration:","50 minutes"],
            ]},
          ].map(({ title, rows }) => (
            <div key={title} style={S.panel}>
              <p style={S.panelH}>{title}</p>
              {rows.map(([lbl, val]) => (
                <div key={lbl} style={S.infoRow}>
                  <span style={S.infoLbl}>{lbl}</span>
                  <span style={S.infoVal}>{val}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Semester Details */}
        <div style={S.panel}>
          <p style={S.panelH}>Semester Details — {selectedYear} {selectedSemester}</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0 80px" }}>
            {[
              [["Core Subjects:","3"],["Language Subjects:","1"],["General Subjects:","2"]],
              [["Theory Classes:","30 hours/week"],["Practical Classes:","6 hours/week"],["Total Contact Hours:","36 hours/week"]],
            ].map((col, ci) => (
              <div key={ci}>
                {col.map(([lbl, val]) => (
                  <div key={lbl} style={S.infoRow}>
                    <span style={S.infoLbl}>{lbl}</span>
                    <span style={S.infoVal}>{val}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Allocation */}
        <div style={S.panel}>
          <p style={S.panelH}>Faculty Allocation Summary</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"12px" }}>
            {[
              { value:"3", label:"Dept Faculty", color:"#0ea5e9", bg:"#f0f9ff", border:"#bae6fd" },
              { value:"3", label:"Lang Faculty", color:"#10b981", bg:"#f0fdf4", border:"#a7f3d0" },
              { value:"2", label:"Gen Faculty",  color:"#8b5cf6", bg:"#f5f3ff", border:"#ddd6fe" },
              { value:"0", label:"Conflicts",    color:"#f97316", bg:"#fff7ed", border:"#fed7aa" },
            ].map(({ value, label, color, bg, border }) => (
              <div key={label} style={{ background:bg, border:`1px solid ${border}`, borderRadius:"12px", display:"flex", flexDirection:"column", alignItems:"center", padding:"20px 12px", gap:"6px" }}>
                <span style={{ fontSize:"24px", fontWeight:800, color }}>{value}</span>
                <span style={{ fontSize:"11.5px", color:"#6b7280" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div style={S.panel}>
          <p style={S.panelH}>Legend</p>
          <div style={{ display:"flex", alignItems:"center", gap:"28px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
              <IconPin size={14} color="#6b7280" />
              <span style={{ fontSize:"12px", color:"#374151" }}>Room Number</span>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
              <IconUser size={14} color="#6b7280" />
              <span style={{ fontSize:"12px", color:"#374151" }}>Faculty Name</span>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
              <div style={{ width:"16px", height:"16px", borderRadius:"4px", background:"#fef3c7", border:"1px solid #fde68a" }} />
              <span style={{ fontSize:"12px", color:"#374151" }}>Break Time</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}