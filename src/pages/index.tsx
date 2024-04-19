import { useGetTodosQuery } from "@/features/todo/todoApi";
import { Todo } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FC } from "react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface TodosProps {
  todos: Todo[];
}

export const getServerSideProps = (async () => {
  // Fetch data from external API
  // const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  // const todos: Todo[] = await res.json();

  const { data: todos, isSuccess } = useGetTodosQuery();
  if (isSuccess && Array.isArray(todos)) {
    return { props: { todos } };
  }
  return { props: { todos: [] as Todo[] } };
  // Pass data to the page via props
}) satisfies GetServerSideProps<TodosProps>;

// const Home: FC<TodosProps> = ({ todos }) => {
//   console.log(`🚀 ~ todos::\n`, todos);

//   const { data, isLoading, error } = useGetTodosQuery();

//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <main className={`${inter.className}`}>
//       <h1>Todo List</h1>
//       <ul>
//         {data?.map((todo: Todo) => (
//           <li key={todo.id}>
//             {todo.title} ({todo.completed ? "Completed" : "Pending"})
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// };
const Home: FC<TodosProps> = ({ todos }) => {
  console.log(`🚀 ~ todos::\n`, todos);

  // const { data, isLoading, error } = useGetTodosQuery();

  // if (isLoading) return <div>Loading...</div>;

  return (
    <main className={`${inter.className}`}>
      <h1>Todo List</h1>
      <ul>
        {todos?.map((todo: Todo) => (
          <li key={todo.id}>
            {todo.title} ({todo.completed ? "Completed" : "Pending"})
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
