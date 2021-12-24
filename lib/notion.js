import {Client} from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId) => {
    const response = await notion.databases.query({
        database_id: databaseId,
    });
    return response.results?.filter((post) => post?.properties.status.select.name !== 'unfinished');
};

export const getPage = async (slug) => {
    return await notion.pages.retrieve({page_id: slug});
};

export const getId = async (databaseId, slug) => {
    const response = await notion.databases.query({
        database_id: databaseId,
    });
    return response.results.find(page => page.properties.slug.rich_text[0].plain_text === slug).id
};

export const getBlocks = async (blockId) => {
    const response = await notion.blocks.children.list({
        block_id: blockId,
        page_size: 50,
    });
    return response.results;
};
