import { Link } from "react-router";

import "../style/dashboard.scss";

const features = [
  [
    "Role analysis",
    "Turn a job description into the skills and priorities that matter.",
  ],
  [
    "Interview questions",
    "Practice focused technical and behavioral questions with model answers.",
  ],
  [
    "Preparation plan",
    "Get a practical roadmap and identify the gaps to close before interview day.",
  ],
];

function Dashboard() {
  return (
    <main className="dashboard">
      <nav className="dashboard__nav">
        <Link className="dashboard__brand" to="/">
          Interview<span>AI</span>
        </Link>

        <div className="dashboard__actions">
          <Link className="dashboard__login" to="/login">
            Log in
          </Link>

          <Link className="dashboard__signup" to="/register">
            Get started
          </Link>
        </div>
      </nav>

      <section className="dashboard__hero">
        <p className="dashboard__badge">AI-POWERED INTERVIEW PREPARATION</p>
        <p className="dashboard__eyebrow">YOUR INTERVIEW COMMAND CENTER</p>

        <h1>
          Walk into every interview <span>ready.</span>
        </h1>

        <p className="dashboard__intro">
          Upload your resume and target role. InterviewAI builds a tailored
          strategy, practice questions, and a preparation plan in one place.
        </p>

        <div className="dashboard__cta">
          <Link className="dashboard__primary" to="/register">
            Build my interview plan <span aria-hidden="true">→</span>
          </Link>

          <Link className="dashboard__secondary" to="/login">
            I already have an account
          </Link>
        </div>
      </section>

      <section className="dashboard__preview" aria-label="Dashboard preview">
        <div className="dashboard__preview-header">
          <span>Today's preparation</span>
          <span className="dashboard__status">Plan ready</span>
        </div>

        <div className="dashboard__metrics">
          <div>
            <strong>82%</strong>
            <span>Role match</span>
          </div>

          <div>
            <strong>16</strong>
            <span>Practice questions</span>
          </div>

          <div>
            <strong>5 days</strong>
            <span>Preparation plan</span>
          </div>
        </div>

        <div className="dashboard__progress">
          <span>Interview readiness</span>

          <div>
            <i />
          </div>

          <b>68%</b>
        </div>
      </section>

      <section
        className="dashboard__capabilities"
        aria-label="InterviewAI capabilities"
      >
        <p>Resume Analysis</p>
        <p>AI Interview Questions</p>
        <p>Skill Gap Analysis</p>
        <p>ATS Resume Analysis</p>
      </section>

      <section className="dashboard__features">
        {features.map(([title, description], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Dashboard;
