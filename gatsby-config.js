module.exports = {
  siteMetadata: {
    emails: [
      {
        id: 1,
        from: "def@gmail.com",
        to: "abc@gmail.com",
        subject: "Meeting",
        body: "hi"
      },
      {
        id: 2,
        from: "abc@gmail.com",
        to: "defo@gmail.com",
        subject: "News Digest",
        body: "<h1>Intro to React</h1> <img src='https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png' width=300/)>"
      },
      {
        id: 3,
        from: "nigerian.prince@gmail.com",
        to: "abc@gmail.com",
        subject: "Obivous 419 scam",
        body: "You've won the prize!!!1!1!!!"
      }
]
  },
  plugins: [`gatsby-plugin-react-helmet`],
}
