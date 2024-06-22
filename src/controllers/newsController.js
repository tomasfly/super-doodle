// newsController.js

// Function to handle the getNews endpoint
exports.getNews = (req, res) => {
  // Your code to fetch news data from a source
  // For example:
  const newsData = [
    { title: 'News 1', content: 'Lorem ipsum dolor sit amet.' },
    { title: 'News 2', content: 'Consectetur adipiscing elit.' },
    { title: 'News 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ];

  // Send the news data as a response
  res.json(newsData);
};