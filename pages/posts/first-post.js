import Link from "next/link";

export default function FirstPost() {
  return (
    <div>
        <h1>First Post</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2>
            <Link href={'/'}
                style={{color: 'blueviolet'}}
            >
                Back to Home
            </Link>
        </h2>
        <h3>
          <Link
            href={'/posts/second-post'}
            style={{color: 'blueviolet'}}
          >
            Move to Second Post
          </Link>
        </h3>
    </div>
  )
}
