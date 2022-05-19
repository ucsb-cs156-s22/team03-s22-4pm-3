const articlesFixtures = {
  oneArticle: {
    id: 1,
    title: "Test Article 1",
    url: "http://localhost:8080",
    explanation: "Article created for testing purposes",
    email: "cwdougher@ucsb.edu",
    dateAdded: "2022-05-17T16:20:00",
  },
  threeArticles: [
    {
      id: 1,
      title: "Test Article 1",
      url: "http://localhost:8080",
      explanation: "Article 1 created for testing purposes",
      email: "cwdougher@ucsb.edu",
      dateAdded: "2022-05-17T16:20:00",
    },
    {
      id: 2,
      title: "Test Article 2",
      url: "http://localhost:3000",
      explanation: "Article 2 created for testing purposes",
      email: "doughercalvin@gmail.com",
      dateAdded: "2022-05-17T04:20:00",
    },
    {
      id: 3,
      title: "Test Article 3",
      url: "https://s22-4pm-3-team02.herokuapp.com/",
      explanation: "Article 3 created for testing purposes",
      email: "dougher@gmail.com",
      dateAdded: "2022-05-17T12:00:00",
    },
  ],
};

export { articlesFixtures };
