import Blog from './Blog';

function App() {
  return (
    <div>
      <Blog
        author={{ avatar: "https://res.cloudinary.com/practicaldev/image/fetch/s--4-9u8W50--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/568800/a405cd0a-06d3-4a06-afca-44a59e3ad47f.png", name: "Ankit Kumar" }}
        layout={'Default'}
        reactions={{
          onClick: (v, e) => {
            console.log(v, e)
          },
          reactions: [
            {
              emote: "👍",
              name: "ad",
              upvotes: 4,
              upvoted: true
            },

            {
              emote: "👍",
              name: "isdasd",
              upvotes: 4,
              upvoted: true
            },
            {
              emote: "👍",
              name: "isd",
              upvotes: 4,
              upvoted: true
            }
          ]
        }}
        content={`
# Hello World 

\`yo\`

\`\`\`js
const a = 1;
console.log(a)
\`\`\`

[a](https://twitter.com/memesiwish/status/1482272137948057611)
      `}
        date='12-12-2021'
        header={{
          subtitle: "Hello World",
          category: {
            title: "Category",
            url: "https://dev.to/category/category"
          },
          image: { src: "https://res.cloudinary.com/practicaldev/image/fetch/s--NyxC0W9N--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jrevafh3he8x2p0p47jn.png", borderRadius: "5px" }, title: "Setup ESLINT and PRETTIER in React app"
        }} />
    </div>
  );
}

export default App;
