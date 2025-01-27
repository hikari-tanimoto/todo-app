import Link from "next/link";

export const CreateTodo = () => {
  return (
    <div className="w-96 m-auto mt-3">
      <h1 className="text-lg">Create Todo</h1>
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="title">Title</label>
            <input id="title" placeholder="Title of your Todo" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="description">Description</label>
            <textarea placeholder="Description of your Todo" />
          </div>
        </div>
      </form>
      <div>
        <button>Create</button>
        <Link href="/">
          <button>Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateTodo;