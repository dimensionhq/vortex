import Blog from './Blog';

function App() {
  return (
    <div>
      <Blog
        author={{
          avatar:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--4-9u8W50--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/568800/a405cd0a-06d3-4a06-afca-44a59e3ad47f.png',
          name: 'Ankit Kumar'
        }}
        layout={'Default'}
        reactions={{
          onClick: (v, e) => {
            console.log(v, e);
          },
          reactions: [
            {
              emote: '👍',
              name: 'ad',
              upvotes: 4,
              upvoted: true
            },

            {
              emote: '👍',
              name: 'isdasd',
              upvotes: 4,
              upvoted: true
            },
            {
              emote: '👍',
              name: 'isd',
              upvotes: 4,
              upvoted: true
            }
          ]
        }}
        content={`

[This is a link](https://github.com)

AI used to be a buzzword, Just as Crypto or Blockchain is today. It was thrown around inflationary until everyone knew the term but did not really know what it was all about. But mentioning AI made everything new, shiny, modern, and sounded really successful. Products were meant to have AI as a marketing stunt while not really including the AI they overpromised.

I remember talking to someone years ago who launched an AI system that would automatically recognize Creditcard numbers being held into a Webcam. But the system wasn't working on the launch day and so they cheaply hired people who would sit there and type in the credit card numbers manually. They were afterward praised for their flawlessly working text recognition.

So not all AI we see is really AI or does change our world massively the way it does. Mainly because of the promises that were made before launch and the disappointment afterward when those promised were not kept.

## But then there was GitHub Copilot

GitHub Copilot did something that had hardly been done before. Not only did it undersell its potential and was basically thrown into the testing phase in an almost humble matter, but it also managed to impress programmers themselves who do have a clue about machine learning and AI and who know about the potential of the technology.

## Is Copilot bad for learners?

To undersell it myself, I would say it's an advanced autocompletion. And in a way it actually is. But in my eyes, the strength of Copilot lies in the ability to create own code from only comments in the code. I have been intensively playing around with Copilot and I was warned not to because I am just a beginner and Copilot would only make me lazy and not want to code anything myself anymore. But I feel different about it.

But what is it really? It's how they call it, your AI pair programmer. Pair programming is when two people work on code together and constantly review and explain it to each other and bounce off ideas. It's a really popular way of developing code and even learning how to code.

But not everyone has the privilege to have someone doing pair programming with them. Many new learners look for fitting mentors for months to then just give up disappointed without help and direction. I am in the lucky position to have someone mentoring me, but I can't claim that person's time 100%, so being able to jump into VSCode and write down my ideas I have at 3 am and have Copilot suggesting me ways how to do it and also helping me structuring my code more, is such a good thing.

Not only that. While I sometimes had some great ideas and already struggled with putting them down into code. I now can just write down my ideas in comments and let Copilot give me hints on how to tackle them. Getting me then to learning the methods of problem-solving for the future. It's like the mentor you can ask the same questions over and over again without him getting annoyed, but you learn at your own speed.

## Give me a graph

A few days ago, I imported my YouTube Statistics into a Python program to play around with them. With the help of Copilot, I made some code snippets that would take the Data and calculate averages, future predictions, etc. At some point, I thought, how nice it would be if I could visualize the information I had. From my previous experiments with data visualization, I know this is usually an evening-filling activity for me.

I did write two lines of comments at the bottom of the code I previously wrote, so Copilot had something to refer to.

![My Input](https://cdn.hashnode.com/res/hashnode/image/upload/v1638904760180/U13bD3Hmw.png?auto=compress,format&format=webp)

**And this is what Copilot came up with:**

\`\`\`py
with open("data.html", "w") as file:
    file.write("\n<html>\n")
    file.write("<head>\n")
    file.write(
        "<script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script>\\n")
    file.write("<script type=\"text/javascript\">\\n")
    file.write("google.charts.load('current', {'packages':['bar']});\\n")
    file.write("google.charts.setOnLoadCallback(drawChart);\\n")
    file.write("function drawChart() {\\n")
    file.write("var data = google.visualization.arrayToDataTable([\\n")
    file.write("['Month', 'Subscriber'],\\n")
    for key, value in subscriber.items():
        file.write("['{}', {}],\\n".format(key, value))
    file.write("]);\\n")
    file.write("var options = {\\n")
    file.write("chart: {title: 'Subscriber count by month'},\\n")
    file.write("bars: 'vertical'\\n")
    file.write("};\\n")
    file.write(
        "var chart = new google.charts.Bar(document.getElementById('chart_div'));\\n")
    file.write("chart.draw(data, options);\\n")
    file.write("}\\n")
    file.write("</script>\\n")
    file.write("</head>\\n")
    file.write("<body>\\n")
    file.write(
        "<div id=\"chart_div\" style=\"width: 900px; height: 500px;\"></div>\\n")
    file.write("</body>\\n")
    file.write("</html>\\n")
\`\`\`

Which presented me this:

![My Output](https://cdn.hashnode.com/res/hashnode/image/upload/v1638905722920/3iDiiKhwp.png?auto=compress,format&format=webp)

I have seen people being dismissive about how "simple" the solution really is and that this doesn't take a lot of time. But in reality - I gave Copilot effectively 2 lines of comment. And it did not only create the file, wrote the implementation in JavaScript while starting the whole process in Python, but also understood exactly what I wanted and chose Google Charts as the most efficient way to implement my wish. If you ask me, this is huge.

I did learn about the existence of Google Charts and looked into it to further adjust my needs to the code provided. I learned that you can easily create JavaScript Code within Python to make an HTML-File. It was almost as if Copilot hinted me towards the possibility and gave me this solution to proceed with and learn from.

And while it seems cheaty to some. It's nothing else than a mentor, teacher, friend, or even StackOverflow presenting you a solution to work with. It's just inside your IDE.

## It's impressing even people from the field

I did tweet about my experience cause I was mind blown about the solution and that tweet won a lot of traction within the tech twitter community. Some mentioned they fear being replaced by AI at some point but others see the possibility for a more efficient workflow. It feels uncanny but also exciting. And I think that's the main feeling AI - well-made AI - leaves behind.

[ehh](https://twitter.com/TiiaAurora/status/1467698228963463178?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1467698228963463178%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fblog.tiia.rocks%2Fgithub-copilot-is-here-to-stay)

## Github embeds

[lmao](https://gist.github.com/DiscordBlog/c332ab20f5b721a0828759d70a52b986#file-discord.ex)

## Codepen embeds
[lol](https://codepen.io/alvaromontoro/pen/vYexLGV)

I am excited about how it will help me learn and progress. **But I also want to formally apologize to Copilot for making it depressed after feeding it a whole file full of Squidward Q. Tentacles quotes. The autocompletion made me feel like a terrible person.**

![lol](https://cdn.hashnode.com/res/hashnode/image/upload/v1638906382303/jj3dEbbYC.png?auto=compress,format&format=webp)
      `}
        date="12-12-2021"
        header={{
          subtitle: 'Hello World',
          category: {
            title: 'Category',
            url: 'https://dev.to/category/category'
          },
          image: {
            src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--NyxC0W9N--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jrevafh3he8x2p0p47jn.png',
            borderRadius: '5px'
          },
          title: 'Setup ESLINT and PRETTIER in React app'
        }}
      />
    </div>
  );
}

export default App;
