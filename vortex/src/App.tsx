import Blog from "./Blog/Blog";

function App() {
  return (
    <div className="w-screen h-auto overflow-x-hidden">
      <Blog
        metadata={{
          date: "December 3, 2021",
        }}
        type="DevTO"
        font="Inter, sans-serif"
        banner={{
          title: "Why You Should Keep a Programming Journal",
          category: {
            title: "Engineering & Design",
            url: "/category/engineering",
          },
          image: {
            rounded: "5px",
            src: "https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61aa7642a72a1b627d695f49_Discord-Elixir-Blog-Header.png",
          },
        }}
        content={`
Discord’s Realtime Infrastructure Team is responsible for delivering all the events that power Discord’s text chat.  These systems are largely built in Elixir, a dynamic, functional language for building scalable and maintainable applications.  These services are improved and deployed every day.  Tests allow us to develop and deploy these services with confidence.

So let’s talk about testing Elixir code.

Elixir comes with ExUnit and that’s what we use to test our code. ExUnit has all the normal features you would expect from a testing library, with one notable exception, mocking.  Mocking is something Elixir developers have to figure out for themselves, and that’s what this post is all about.        

# Step 1: Make Discord

To test some code we need to have some code to test.
`}
        author={{
          avatar:
            "https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/6123ea7d0b7a0f510c6a652a_2_bh30nAPwl22sEmgATsF4RQ.jpg",
          name: "Matt Nowack",
        }}
      />
    </div>
  );
}

export default App;
