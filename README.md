This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Link Component

https://nextjs.org/learn/basics/navigate-between-pages/link-component


**pages/index.js**

```jsx
export default function Home() {
  return (
    <div className={styles.container}>
        <h1 className='title'>
          Read <Link 
            href='/posts/first-post'
            style={{color: 'blueviolet'}}
            >Next.js</Link>
        </h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
    </div>
  )
}
```

**pages/posts/first-post.js**

```jsx

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
```

**pages/posts/second-post.js**
```jsx
export default function SecondPost() {
  return (
    <div>
        <h1>Second Post</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>
            <Link href={'/posts/first-post'}
                style={{color: 'blue'}}>
                    Back to First Post
            </Link>     
        </h3>
    </div>
  )
}
```