import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { TrophySpin } from "react-loading-indicators";

export default function Todos() {
  const [number, setnumber] = useState(0);
  const { data, error, isLoading, isError, isFetching, refetch, status } =
    useQuery({
      queryKey: ["todos"],
      queryFn: async () => {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=100",
        );
        console.log("data");
        
        if (!res.status === 200) throw new Error("Failed to fetch todos");
        return res.data;
      },
    });
  if (isLoading)
    return <TrophySpin color="#32cd32" size="medium" text="" textColor="" />;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <section>
        <button onClick={() => setnumber(number + 1)}>+</button>
        <p>{number}</p>
        <button onClick={() => setnumber(number - 1)}>-</button>

      </section>
      <h2>Todo List</h2>
      <button onClick={() => refetch()}>Refetch Todos</button>
      {isFetching && <p>Updating todos...</p>}
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "ok" : "no"}
          </li>
        ))}
      </ul>

      <p>Status: {status}</p>
    </div>
  );
}
