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
          image:
            "https://github.blog/wp-content/uploads/2021/11/engineering-on-call-chatops_social-card.png?w=1200",
        }}
        author={{
          avatar: "https://avatars.githubusercontent.com/u/12280011?v=4&s=35",
          name: "Yaswanth Anantharaju",
        }}
      />
    </div>
  );
}

export default App;
