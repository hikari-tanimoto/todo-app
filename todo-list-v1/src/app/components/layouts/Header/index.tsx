import Link from 'next/link';

export const Header = () => {
  return (
    <header className='flex justify-between p-2'>
      <h1 className="font-bold text-xl">
        <Link href="/">Todo List app</Link>
      </h1>
      <button><Link href="create/">New Task</Link></button>
    </header>
  )
}