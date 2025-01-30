import { Header } from "@/app/components/layouts/Header";
import { Todo } from "@/app/components/layouts/Todo";
import { TodoType } from "@/app/types/todo";
import { createClient } from '@/app/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Home() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todo } = await supabase.from('todo').select()

  return (
    <>
      <Header />
      <ul className="flex-1 overflow-auto py-4 lg:py-6">
        {todo?.map((todo: TodoType) => {
          return (
            <li key={todo.id}>
              <Todo
                id={todo.id}
                title={todo.title}
                description={todo.description}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
