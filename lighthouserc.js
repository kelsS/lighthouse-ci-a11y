module.exports = {
    extends: "lighthouse:recommended",
    ci: {
        collect: {
            staticDistDir: "./dist",
            url: ["http://localhost:8080"],
            settings: {
                //set which categories you want to run here.
                //exlude the accessibility audit since it will be handled by axe-core directly
                onlyCategories: ["performance", "seo", "best-practices"],
                disableStorageReset: false,
                throttlingMethod: "devtools",
            },
            assert: {
                //...
            },
            upload: {
                target: "filesystem",
            },
        },
    },
}
