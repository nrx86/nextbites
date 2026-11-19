
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>404 - Recipe Not Found</h1>

      <p>
        Sorry! The recipe you are looking for does not exist.
      </p>

      <Link href="/">
        Back to Home
      </Link>
    </main>
  );
}
