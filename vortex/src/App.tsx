import Blog from "./Blog";

function Emote(): JSX.Element {
  return (
    <img
      style={{ width: "28px" }}
      src="https://discord.com/assets/08c0a077780263f3df97613e58e71744.svg"
      alt="👍"
    />
  );
}

function App() {
  const content = `
Everything's supported - a [link](https://example.com), some \`inline\` content, **bold** text, <ins>underlined text</ins>, and even a codeblock with syntax highlighting:

You can specify the language of the codeblock after the backticks (which need to be escaped).
\`\`\`js
console.log("Here's some JavaScript code!");
console.log("it works inside the codeblock!");
\`\`\`

### Images
![image](https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg)

### Tweet Embeds

Below is a tweet embed:
[tweet](https://twitter.com/elonmusk/status/1470157804304572420?s=20)

### GitHub Gist Embeds

Here's a GitHub gist:
[gist](https://gist.github.com/getify/2b53198906d320abe650)

### CodePen Embeds
[codepen embed](https://codepen.io/alvaromontoro/pen/vYexLGV)
`;
  return (
    <div className="w-full h-auto overflow-x-hidden ">
      <div>
        <Blog
        content={content}
        layout="Default"
        />
      </div>
    </div>
  );
}

export default App;
