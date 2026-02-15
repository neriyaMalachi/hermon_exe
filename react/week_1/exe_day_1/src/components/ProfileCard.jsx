
export default function ProfileCard({ avatarUrl, name, description, type }) {
  return (
    <article className="card">
      <img className="avatar" src={avatarUrl} alt={`${name} avatar`} />

      <h2 className="name">{name}</h2>
      <p className="desc">{description}</p>

      <div className="actions">
        <Button type={type}>{type}</Button>
      </div>
    </article>
  );
}
