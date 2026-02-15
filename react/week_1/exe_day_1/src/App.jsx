import "./App.css";

function Header() {
  return <h1 className="title">My Profile Page</h1>;
}

function Button({ type, children }) {
  const className = `btn ${type.toLowerCase()}`;
  return <button className={className}>{children}</button>;
}

function ProfileCard({ name, desc, img, type }) {
  return (
    <div className="card">
      <img className="avatar" src={img} alt={name} />
      <div className="name">{name}</div>
      <div className="desc">{desc}</div>
      <Button type={type}>{type}</Button>
    </div>
  );
}

function Footer() {
  return <div className="footer">© 2025 My App</div>;
}

export default function App() {
  return (
    <div className="page">
      <Header />

      <div className="grid">
        <ProfileCard
          name="Noa"
          desc="Loves clean UI."
          img="https://2.a7.org/files/pictures/781x439/968383.jpg"
          type="Friend"
        />
        <ProfileCard
          name="David"
          desc="Explains React simply."
          img="https://2.a7.org/files/pictures/781x439/968383.jpg"
          type="Teacher"
        />
        <ProfileCard
          name="Maya"
          desc="Learning components."
          img="https://2.a7.org/files/pictures/781x439/968383.jpg"
          type="Student"
        />
        <ProfileCard
          name="Maya"
          desc="Learning components."
          img="https://2.a7.org/files/pictures/781x439/968383.jpg"
          type="Student"
        />{" "}
        <ProfileCard
          name="Maya"
          desc="Learning components."
          img="https://2.a7.org/files/pictures/781x439/968383.jpg"
          type="Student"
        />{" "}
        <ProfileCard
          name="Maya"
          desc="Learning components."
          img="https://2.a7.org/files/pictures/781x439/968383.jpg"
          type="Student"
        />{" "}
     
      </div>

      <Footer />
    </div>
  );
}
