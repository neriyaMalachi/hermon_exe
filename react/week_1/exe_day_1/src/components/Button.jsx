const TYPE_CLASS = {
  Friend: "btn btn--friend",
  Teacher: "btn btn--teacher",
  Student: "btn btn--student",
};

export default function Button({ type = "Friend", children = "View Profile", onClick }) {
  const className = TYPE_CLASS[type] ?? TYPE_CLASS.Friend;

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}
