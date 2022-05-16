const reviewsFixtures = {
    oneReview: {
        "id": 4,
        "itemId": 4,
        "reviewerEmail": "test1@gmail.com",
        "stars": 5,
        "dateReviewed": "2022-05-16T02:22:22",
        "comments": "Best Pizza Ever"
    },
    threeReviews: [
        {
            "id": 5,
            "itemId": 5,
            "reviewerEmail": "test2@gmail.com",
            "stars": 2,
            "dateReviewed": "2022-05-16T02:22:33",
            "comments": "Ok food nothing special"
        },
        {
            "id": 6,
            "itemId": 6,
            "reviewerEmail": "test3@gmail.com",
            "stars": 3,
            "dateReviewed": "2022-05-16T02:22:44",
            "comments": "Average food"
        },
        {
            "id": 7,
            "itemId": 7,
            "reviewerEmail": "test4@gmail.com",
            "stars": 4,
            "dateReviewed": "2022-05-16T02:22:44",
            "comments": "Pretty Good, Definitely would go again"
        } 
    ]
};


export { reviewsFixtures };