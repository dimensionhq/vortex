import { Blog } from "./Blog/Blog";

function App() {
  return (
    <div style={{ width: "100vw", height: "auto" }}>
      <Blog
        type="Dev.to"
        theme={{
          bgColor: "black",
          primary: "blue",
          text: "#fff",
        }}
        codeblock={{
          theme: "gruvboxDark",
        }}
        content={`
# Demoji

A lightweight and snappy crate to remove emojis from a string.

# Overview

This crate allows for removal of emojis given a string, and that's it!

This crate aims to be:

- Fast
- Lightweight
- Easy To Use

## Examples

\`\`\`rust
// Remove all emojis from this string
let demojified_string = demoji("⚡hel✅🙂lo🙂")
assert_eq!(demojified_string, String::from("hello"));
\`\`\`

\`\`\`json
{
  "$id": " ",
  "$schema": " ",
  "title": "PresenceUI",
  "type": "design_system",
  "properties": {
    "Typography": {
      "h1": "800",
      "h2": "700"
    },
    "Colors": {
      "Primary": "#000000",
      "Secondary": "#FFFFFF"
    },

  }
}
\`\`\`

### What does the name mean?

Well, you could interpret it as \`demolish-emoji\` or \`de-emoji\` 😁.
`}
        author={{
          avatar: "https://avatars.githubusercontent.com/u/81620813?s=200&v=4",
          name: "Tejas",
        }}
        banner={{
          marginBottom: "20px",
          category: "Engineering",
          date: "Dec 9, 2021",
          image: {
            src: "https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/616876e96507aa5597503b2f_Merch%20Blog%20Header-p-1600.png",
            rounded: "5px",
            shadow: "-1px 1px 18px 0px rgba(0,0,0,0.75)",
          },
          title: "How to build a website",
        }}
      />
    </div>
  );
}
export default App;
