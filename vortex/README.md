## Vortex

A hyper-extensible library to build blogs crazy fast.

![badge](https://img.shields.io/github/license/dimensionhq/vortex?color=pink) ![badge](https://img.shields.io/tokei/lines/github/dimensionhq/vortex?color=white&label=lines%20of%20code) ![badge](https://img.shields.io/github/languages/top/dimensionhq/vortex?color=%230xfffff)

🌟 Don't forget to give us a star if you'd like to support us ❤️

Vortex is an open-source library that allows you to build themeable, modular and responsive blogs with just a few lines of code!

<br>

# Installation

Run either of these commands to install Vortex:

```
npm i @dimensionhq/vortex
# or
yarn add @dimensionhq/vortex
# or
pnpm i @dimensionhq/vortex
```

# Usage

Let's build our first blog. This walkthrough will take you through Vortex's api and its features.

### Step 1: Initializing Our Blog Component

```jsx
import "@dimensionhq/vortex/dist/style.css";
import Blog from "@dimensionhq/vortex";

function App() {
  return (
    <div>
      <Blog />
    </div>
  );
}

export default App;
```

From now onwards, we'll be focusing primarily on the `Blog` component for readability purposes.

### Step 2: Choose a layout

The first step to building your blog is to choose a layout. There are 3 in-built layouts bundled-in with Vortex.

To understand more about each layout, check out the [layout guide](/docs/layout/configuration).

For now, we'll be choosing the [default](/docs/layout/default) layout.

```jsx
<Blog
    {/* You can also use Hashnode or DevTO instead  */}
    layout = "Default"
/>
```

### Step 3: Add some content

It's time to add some content to our blog!

Vortex supports markdown content, so let's give it some to display!

```jsx
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
```

Now that we've written up some content - let's pass it into the blog!

```jsx
<Blog layout="Default" content={content} />
```

### Step 4: Add headers

It's time to spice up our blog with a banner, a title, a subtitle, and maybe even a category!

```jsx
<Blog
  layout="Default"
  content={content}
  header={{
    title: "Here is my title",
    subtitle: "Here's a subtitle",
    image: {
      src: "https://images.pexels.com/photos/10437856/pexels-photo-10437856.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.53&h=500&sharp=20&w=1400",
      borderRadius: "20px",
    },
    category: {
      title: "Development & Testing",
    },
  }}
/>
```

### Step 5: Insert metadata

Let's insert some metadata into our article, like the `author`, and the `date` when it was published!

```jsx
<Blog
    layout = "Default"
    content = {content}
    header = {{...}}
    author = {{
            name: 'Look! It\'s me!',
            avatar: 'https://avatars.githubusercontent.com/u/63039748?v=4'
    }}
    date = '12 December, 2021'
/>
```

### Step 6: Add reactions

For more details on this step, check out our [reactions guide](/customization/reactions).

```jsx
<Blog
    layout = "Default"
    content = {content}
    header = {{...}}
    author = {{
            name: 'Look! It\'s me!',
            avatar: 'https://avatars.githubusercontent.com/u/63039748?v=4'
    }}
    date = '12 December, 2021'
    reactions = {{
        onClick: () => {},
        reactions: [
            {
                name: 'Heart',
                emote: '❤',
                upvotes: 2
            },
            {
                name: 'Thumbs Up',
                emote: '👍',
                upvotes: 10
            }
        ]
    }}
/>
```

### Step 7: Make it your own

To finish up, let's customize your blog! Follow the [customization and themes documentation](https://vortex.dimension.dev/vortex/customization/themes) for more information.

## Credits

Our website and documentation is a direct fork of the incredible [NextUI](https://nextui.org/) library. Do check out their incredible work!
