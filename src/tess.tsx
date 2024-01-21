const { Client } = require("@notionhq/client");

const notion = new Client({
    auth:
        process.env.REACT_APP_NOTION_TOKEN ||
        "secret_LsGwT2896LkF3MWCauA2tOc2SIEuDa6Hl3piIIYdb3N",
});

(async () => {
    const databaseId = "8d3c0d57981e45b09a0f2fa0e17dc3e4";
    const response = await notion.databases.query({
        database_id: databaseId,
    });
    console.log(response);
})();
