import { Blog } from "./Blog/Blog";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Blog
        type="Github"
        codeblock={{
          theme: "darcula",
        }}
        content={`
# Hello World

### This is a markdown file
This is a normal paragraph. Here goes something \`inline\`. Now a code block will follow.

\`\`\`js
console.log("Hello World")
console.log("Hello World")
\`\`\`

\`\`\`rust
fn main(){
  println!("{}", "I am fast :sunglasses:")
}
\`\`\`
        `}
        banner={{
          title: " Using ChatOps to help Actions on-call engineers ",
          category: "Engineering",
          date: "December 1, 2021",
          image: {
            src: "https://github.blog/wp-content/uploads/2021/11/engineering-on-call-chatops_social-card.png",
            alt: "ChatOps",
            width: "70%",
            height: "80%",
          },
        }}
        author={{
          avatar:
            "https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/6195825de99503da0bfe6720_daniel_meas-p-500.jpeg",
          name: "Daniel Meas",
        }}
      />
    </div>
  );
}

export default App;
