import { Header } from "@/app/components/layouts/Header";
import { Todo } from "@/app/components/layouts/Todo";
export default function Home() {
  return (
    <>
      <Header />
      <div className="flex-1 overflow-auto py-4 lg:py-6">
				<Todo title={"buy eggs"} description={"Need to get eggs, milk, and bread"} />
			</div>
    </>
  );
}
