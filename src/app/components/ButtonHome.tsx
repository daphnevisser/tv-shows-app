import Link from "next/link";

export default function ButtonHome() {
  return (
    <Link
      href="/"
      className="p-1 text-sm font-medium text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg
        className="h-8 w-8"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <polyline points="5 12 3 12 12 3 21 12 19 12" />{" "}
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />{" "}
        <rect x="10" y="12" width="4" height="4" />
      </svg>
      <span className="sr-only">Home</span>
    </Link>
  );
}
