import "./AppLoader.scss";

function AppLoader({ title = "Preparing your workspace", description = "Just a moment while we get things ready." }) {
  return (
    <main className="app-loader" aria-live="polite" aria-busy="true">
      <div className="app-loader__mark" aria-hidden="true">AI</div>
      <div className="app-loader__spinner" aria-hidden="true" />
      <h1>{title}</h1>
      <p>{description}</p>
    </main>
  );
}

export default AppLoader;
