const organizationsFixtures = {
    oneOrg: {
        "orgcode": "111",
        "orgTranslationShort": "CC",
        "orgTranslation":"Chess Club",
        "inactive": false,
    },
    threeOrgs: [
        {
            "orgcode": "111",
            "orgTranslationShort": "CC",
            "orgTranslation":"Chess Club",
            "inactive": false,
        },
        {
            "orgcode": "201",
            "orgTranslationShort": "XYZ",
            "orgTranslation":"Alphabet Committee",
            "inactive": true,
        },
        {
            "orgcode": "1",
            "orgTranslationShort": "Hand",
            "orgTranslation":"Chancellor's Office",
            "inactive": false,
        } 
    ]
};


export { organizationsFixtures };