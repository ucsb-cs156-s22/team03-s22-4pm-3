
    // "dateNeeded": "2022-05-18T09:21:58.686Z",
    // "dateRequested": "2022-05-18T09:21:58.686Z",
    // "done": true,
    // "explanation": "string",
    // "id": 0,
    // "professorEmail": "string",
    // "requesterEmail": "string"
const recommendationFixtures = {
    oneRecommendation: {
        "dateNeeded": "2022-05-18T09:21:58",
        "dateRequested": "2022-05-18T09:21:58",
        "done": true,
        "explanation": "string",
        "id": 0,
        "professorEmail": "string",
        "requesterEmail": "string"
    },
    threeRecommendations: [
        {
            "dateNeeded": "2022-05-18T09:21:58",
            "dateRequested": "2022-05-18T09:21:58",
            "done": true,
            "explanation": "string1",
            "id": 0,
            "professorEmail": "string12",
            "requesterEmail": "string123"
        },
        {
            "dateNeeded": "2022-07-11T09:21:58",
            "dateRequested": "2022-05-11T09:21:58",
            "done": true,
            "explanation": "string4",
            "id": 1,
            "professorEmail": "string45",
            "requesterEmail": "string456"
        },
        {
            "dateNeeded": "2022-06-18T09:21:58",
            "dateRequested": "2022-05-19T09:21:58",
            "done": true,
            "explanation": "string7",
            "id": 2,
            "professorEmail": "string78",
            "requesterEmail": "string789"
        } 
    ]
};


export { recommendationFixtures };