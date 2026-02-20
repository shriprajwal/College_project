// ApprovalCenter.js
import React, { useState } from "react";
import "./approval.css";

/*
Recreates the Approval Management Center UI with 3 tab states:
- pending (default)
- approved
- rejected

Drop this file into src/pages/ and the CSS alongside it.
Import in App.js like:
import ApprovalCenter from "./pages/ApprovalCenter";
import "./pages/approval-center.css";
*/

function StatusTag({ level }) {
  if (!level) return null;
  const cls = level === "HIGH" ? "tag-high" : level === "MEDIUM" ? "tag-medium" : "tag-low";
  return <span className={`status-tag ${cls}`}>{level}</span>;
}

function DocBadge({ name }) {
  return (
    <span className="doc-badge">
      <svg className="doc-svg" viewBox="0 0 24 24" width="12" height="12" aria-hidden>
        <path fill="#6b7280" d="M6 2h7l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"></path>
      </svg>
      <span className="doc-name">{name}</span>
    </span>
  );
}

function ActionButtons({ onApprove, onReject }) {
  return (
    <div className="card-actions">
      <button className="approve-btn" onClick={onApprove}>Approve</button>
      <button className="reject-btn" onClick={onReject}>Reject</button>
    </div>
  );
}

/* Reusable approval card */
function ApprovalCard({ item, onApprove, onReject, viewMode }) {
  /* viewMode: "pending" | "approved" | "rejected" for slight visual adjustments */
  return (
    <div className={`approval-card ${viewMode === "approved" ? "approved-card" : ""} ${viewMode === "rejected" ? "rejected-card" : ""}`}>
      <div className="card-left">
        <div className="card-icon" style={{ background: item.iconGradient }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden>
            <path d="M12 2c.6 0 1 .4 1 1v2h2a1 1 0 0 1 1 1v2H8V6a1 1 0 0 1 1-1h2V3c0-.6.4-1 1-1zM4 9h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9z"></path>
          </svg>
        </div>

        <div className="card-main">
          <div className="title-row">
            <div className="card-title">{item.title}</div>
            <StatusTag level={item.priority} />
          </div>

          <div className="card-sub">{item.subtitle}</div>

          <div className="meta-row">
            <span className="meta-person">{item.requester}</span>
            <span className="meta-dept"> • {item.department}</span>
            <span className="meta-date"> • {item.date}</span>
          </div>

          <div className="docs-row">
            <div className="docs-label">Documents:</div>
            <div className="docs-list">
              {item.documents.map((d,i) => <DocBadge key={i} name={d} />)}
            </div>
          </div>

          <div className="controls-row">
            <button className="review-details">🔍 Review Details</button>
            <div className="comment-wrap">
              <input className="comment-input" placeholder="Comment" />
            </div>
          </div>
        </div>
      </div>

      <div className="card-right">
        <div className="amount">{item.amount}</div>
        <div className="amount-label">{item.amountLabel}</div>

        <div className="right-row">
          {viewMode === "pending" ? (
            <ActionButtons onApprove={() => onApprove(item.id)} onReject={() => onReject(item.id)} />
          ) : (
            <div className="status-pill">{viewMode === "approved" ? "Approved" : "Rejected"}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ApprovalCenter() {
  // initial dataset matches the 3 screenshots (pending/approved/rejected entries)
  const initialItems = [
    // Pending (matches first screenshot)
    {
      id: 1,
      title: "Computer Lab Equipment Purchase",
      subtitle: "Purchase of 30 new computers and lab accessories for BCA department",
      requester: "Dr. Rajesh Kumar (HOD - BCA)",
      department: "BCA",
      date: "1/15/2024",
      documents: ["quotation.pdf","technical_specs.pdf"],
      amount: "₹2,50,000",
      amountLabel: "Budget Approval",
      priority: "HIGH",
      status: "pending",
      iconGradient: "linear-gradient(90deg,#ff7a4a,#ffb39a)",
    },
    {
      id: 2,
      title: "Merit-based Scholarship Program",
      subtitle: "Scholarship program for economically disadvantaged students",
      requester: "Student Welfare Committee",
      department: "Administration",
      date: "1/8/2024",
      documents: ["eligibility_criteria.pdf","selection_process.pdf"],
      amount: "₹10,00,000",
      amountLabel: "Scholarship Approval",
      priority: "MEDIUM",
      status: "pending",
      iconGradient: "linear-gradient(90deg,#ff6f3a,#ffd9b5)",
    },

    // Approved (matches second screenshot)
    {
      id: 3,
      title: "Faculty Training Program",
      subtitle: "HR Department",
      requester: "HR Department",
      department: "HR",
      date: "1/5/2024",
      documents: [],
      amount: "₹1,50,000",
      amountLabel: "Approved",
      priority: "LOW",
      status: "approved",
      iconGradient: "linear-gradient(90deg,#8ef0c8,#c7ffe8)",
    },
    {
      id: 4,
      title: "Inter-college Sports Meet",
      subtitle: "Sports Committee",
      requester: "Sports Committee",
      department: "Sports",
      date: "1/2/2024",
      documents: [],
      amount: "₹2,25,000",
      amountLabel: "Approved",
      priority: "LOW",
      status: "approved",
      iconGradient: "linear-gradient(90deg,#9ef0d8,#d8fff0)",
    },

    // Rejected (matches third screenshot)
    {
      id: 5,
      title: "Unnecessary Equipment Purchase",
      subtitle: "Various Department",
      requester: "Multiple",
      department: "Various",
      date: "1/4/2024",
      documents: [],
      amount: "₹75,000",
      amountLabel: "Rejected",
      priority: "HIGH",
      status: "rejected",
      iconGradient: "linear-gradient(90deg,#ffd6d6,#ffeaea)",
    }
  ];

  const [items, setItems] = useState(initialItems);
  const [tab, setTab] = useState("pending"); // pending by default
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Categories");

  const changeTab = (k) => setTab(k);

  const onApprove = (id) => {
    setItems(prev => prev.map(p => p.id === id ? { ...p, status: "approved" } : p));
  };
  const onReject = (id) => {
    setItems(prev => prev.map(p => p.id === id ? { ...p, status: "rejected" } : p));
  };

  // filtered list for current tab
  const viewList = items.filter(i => {
    const matchesTab = i.status === tab;
    const matchesCat = category === "All Categories" || i.amountLabel === category || i.department === category;
    const q = query.trim().toLowerCase();
    const matchesQ = !q || i.title.toLowerCase().includes(q) || i.subtitle.toLowerCase().includes(q) || i.requester.toLowerCase().includes(q);
    return matchesTab && matchesCat && matchesQ;
  });

  // counts for tabs / footer
  const counts = {
    pending: items.filter(i => i.status === "pending").length,
    approved: items.filter(i => i.status === "approved").length,
    rejected: items.filter(i => i.status === "rejected").length,
    high: items.filter(i => i.priority === "HIGH").length
  };

  return (
    <div className="approval-root">
      {/* top breadcrumb & mini title (left) + pending count (right similar to screenshot) */}
      <header className="top-header">
        <div className="left-head">
          <div className="back-arrow">← Approval Center</div>
          <div className="small-desc">Manage budget approvals and policy decisions</div>
        </div>
        <div className="right-head">{counts.pending} Pending</div>
      </header>

      {/* centered hero */}
      <section className="hero-box">
        <div className="hero-icon">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M12 2c.6 0 1 .4 1 1v2h2a1 1 0 0 1 1 1v2H8V6a1 1 0 0 1 1-1h2V3c0-.6.4-1 1-1zM4 9h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9z"></path></svg>
        </div>
        <div className="hero-text">
          <div className="hero-title">Approval Management Center</div>
          <div className="hero-sub">Review and process institutional approvals, budget requests, and policy decisions</div>
        </div>
      </section>

      {/* tabs row */}
      <nav className="tabs-row">
        <div className="tabs-bar">
          <button className={`tab-btn ${tab === "pending" ? "active" : ""}`} onClick={() => changeTab("pending")}>
            ⦿ Pending ({counts.pending})
          </button>
          <button className={`tab-btn ${tab === "approved" ? "active" : ""}`} onClick={() => changeTab("approved")}>
            ⦿ Approved ({counts.approved})
          </button>
          <button className={`tab-btn ${tab === "rejected" ? "active" : ""}`} onClick={() => changeTab("rejected")}>
            ⦿ Rejected ({counts.rejected})
          </button>
        </div>
      </nav>

      {/* search & filters */}
      <div className="search-filter">
        <input className="search" placeholder="Search approvals by title, requester, or department..." value={query} onChange={(e)=>setQuery(e.target.value)} />
        <div className="filters-right">
          <select value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option>All Categories</option>
            <option>Budget Approval</option>
            <option>Scholarship Approval</option>
            <option>Academic Approval</option>
            <option>BCA</option>
            <option>Administration</option>
          </select>
          <button className="filter-btn">Filter</button>
        </div>
      </div>

      {/* cards list */}
      <main className="cards-list">
        {viewList.map(i => (
          <ApprovalCard key={i.id} item={i} onApprove={onApprove} onReject={onReject} viewMode={tab} />
        ))}

        {/* fallback to show nothing if list empty (keeps layout identical) */}
      </main>

      {/* stats footer (exact layout) */}
      <footer className="stats-footer">
        <div className="stat">
          <div className="stat-num orange">{counts.pending}</div>
          <div className="stat-label">Pending</div>
        </div>
        <div className="stat">
          <div className="stat-num green">{counts.approved}</div>
          <div className="stat-label">Approved</div>
        </div>
        <div className="stat">
          <div className="stat-num red">{counts.rejected}</div>
          <div className="stat-label">Rejected</div>
        </div>
        <div className="stat">
          <div className="stat-num blue">{counts.high}</div>
          <div className="stat-label">High Priority</div>
        </div>
      </footer>

      <div className="chat-floating">💬</div>
    </div>
  );
}
