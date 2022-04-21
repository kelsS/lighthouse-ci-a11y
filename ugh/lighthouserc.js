module.exports = {
    extends: "lighthouse:default",
    ci: {
        collect: {
            staticDistDir: "./dist",
            url: ["http://localhost:8080"],
            settings: {
                onlyCategories: ["accessibility"],
                //onlyCategories: ["best-practice"],
                //onlyAudits: ["color-contrast"],
                disableStorageReset: false,
                throttlingMethod: "devtools",
            },
            assert: {
                assertions: {
                    "categories:accessibility": ["pessimistic"],
                    "empty-heading": [
                        "error",
                        { aggregationMethod: "median", minScore: 1 },
                    ],
                },
            },
            upload: {
                target: "filesystem",
            },
            //audits: ["color-contrast"],
        },
    },
}
