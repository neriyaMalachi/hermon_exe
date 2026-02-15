// src/components/PageLayout/PageLayout.jsx
import "../css/PageLayout.css";

export default function PageLayout({ title, children }) {
  return (
    <section className="page">
      <header className="page__header">
        <h1 className="page__title">{title}</h1>
      </header>

      <main className="page__content">{children}</main>
    </section>
  );
}
