const organizationsFixtures = {
    oneOrg: {
        "orgCode": "111",
        "orgTranslationShort": "CC",
        "orgTranslation":"Chess Club",
        "inactive": false,
    },
    threeOrgs: [
        {
            "orgCode": "111",
            "orgTranslationShort": "CC",
            "orgTranslation":"Chess Club",
            "inactive": false,
        },
        {
            "orgCode": "201",
            "orgTranslationShort": "XYZ",
            "orgTranslation":"Alphabet Committee",
            "inactive": true,
        },
        {
            "orgCode": "1",
            "orgTranslationShort": "Hand",
            "orgTranslation":"Chancellor's Office",
            "inactive": false,
        } 
    ]
};


export { organizationsFixtures };