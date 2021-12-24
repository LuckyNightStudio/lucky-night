import { NextPage} from "next";
import Link from 'next/link'
import {getBlocks, getDatabase, getId, getPage} from "../../lib/notion";
import {Container, Typography, Box} from "@mui/material";
import { Text } from "../../components/notionComponents/text";

const renderBlock = (block: any) => {
    const { type, id } = block;
    const value = block[type];

    switch (type) {
        case "paragraph":
            return (
                <Text text={value.text} />
            );
        case "heading_1":
            return (
                <Text text={value.text} variant='h2'/>
            );
        case "heading_2":
            return (
                <Text text={value.text} variant='h3'/>
            );
        case "heading_3":
            return (
                <Text text={value.text} variant='h4'/>
            );
        case "bulleted_list_item":
        case "numbered_list_item":
            return (
                <li>
                    <Text text={value.text} />
                </li>
            );
        case "to_do":
            return (
                <div>
                    <label htmlFor={id}>
                        <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
                        <Text text={value.text} />
                    </label>
                </div>
            );
        case "toggle":
            return (
                <details>
                    <summary>
                        <Text text={value.text} />
                    </summary>
                    {value.children?.map((block: any) => (
                        <div key={block.id}>{renderBlock(block)}</div>
                    ))}
                </details>
            );
        case "child_page":
            return <Text text={value.title} variant='h1'/>
        case "image":
            const src =
                value.type === "external" ? value.external.url : value.file.url;
            const caption = value.caption?.[0]?.plain_text ?? "";
            return (
                <Box sx={{maxWidth: '80%', margin: '40px auto'}}>
                    <figure>
                        <img src={src} alt={caption} style={{ maxWidth: '100%' }}/>
                        {caption && <figcaption>{caption}</figcaption>}
                    </figure>
                </Box>
            );
        case 'quote':
            return (
                <Box sx={{px:4, py: 2, bgcolor: 'greenLight.light', borderLeft: 'solid 8px #9ED8BF', my: 4 }}>
                    <Text text={value.text}/>
                </Box>
            )
        case 'divider':
            return (
                <Box sx={{height: 5, bgcolor: 'primary.main', my: 8, borderRadius: 8 }} />
            )
        case 'callout':
            return (
                <Box sx={{display: 'flex', bgcolor: 'primary.main', p: 4, color: 'white', my: 4, justifyContent: 'center', alignItems: 'center'}}>
                    <Box sx={{mr: 2, fontSize: 25 }}>
                        {value.icon.emoji}
                    </Box>
                    <Text text={value.text} />
                </Box>
            )
        default:
            return `❌ Unsupported block (${
                type === "unsupported" ? "unsupported by Notion API" : type
            })`;
    }
};


const Page: NextPage = ({page, blocks}: any) => {
    const title = page?.properties?.entry?.title[0].plain_text;
    const tags = page?.properties?.Tags?.multi_select;
    const date = page?.last_edited_time && new Date(page.last_edited_time).toDateString();
    return (
        <Container maxWidth='md'>
            <Box component='article' px={4} py={8}>
                <Box mb={4}>
                    <Typography variant='h2' component='h1'>
                        {title}
                    </Typography>
                    {date && <Typography variant='caption'>{date}</Typography>}
                    {tags && (
                        <Box sx={{display: 'flex', mt: 2}}>
                            {
                                tags.map(({name, color}: {name: string, color: string}) => (
                                    <Link href={`/blog?filter=${name}`} passHref key={name}>
                                        <Box sx={{ background: color, borderRadius: 8, display:'inline', py: '3px', px: 1, mr: 1, cursor: 'pointer'}}>
                                            <Typography variant='caption'>{name}</Typography>
                                        </Box>
                                    </Link>
                                ))
                            }
                        </Box>
                    )}
                </Box>
                {blocks?.map((block: any) => (
                    <div key={block.id}>{renderBlock(block)}</div>
                ))}
            </Box>
        </Container>
    )
}


export const databaseId = process.env.NOTION_DATABASE_ID
export const getStaticPaths = async () => {
    const database = await getDatabase(databaseId);
    return {
        // @ts-ignore
        paths: database.map((page) => ({ params: { slug: page.properties.slug.rich_text[0].plain_text } })),
        fallback: true,
    };
};

export const getStaticProps = async (context: { params: { slug: string; }; }) => {
    const { slug } = context.params;
    const id = await getId(databaseId, slug);
    const page = await getPage(id);
    const blocks = await getBlocks(id);

    // Retrieve block children for nested blocks (one level deep), for example toggle blocks
    // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
    const childBlocks = await Promise.all(
        blocks
            // @ts-ignore
            .filter((block) => block.has_children)
            .map(async (block) => {
                return {
                    id: block.id,
                    children: await getBlocks(block.id),
                };
            })
    );
    const blocksWithChildren = blocks.map((block) => {
        // Add child blocks if the block should contain children but none exists
        // @ts-ignore
        if (block?.has_children && !block[block.type].children) {
            // @ts-ignore
            block[block.type]["children"] = childBlocks.find(
                (x) => x.id === block.id
            )?.children;
        }
        return block;
    });

    return {
        props: {
            page,
            blocks: blocksWithChildren
        },
        revalidate: 1,
    };
};


export default Page

