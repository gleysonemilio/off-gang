


export default function Footer() {
  return (
    <footer className="w-full h-20 flex items-center justify-center bg-gray-100 dark:bg-neutral-900 shadow-md">
      <div className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Your Company Off-gang. All rights reserved.
      </div>
    </footer>
  );
}