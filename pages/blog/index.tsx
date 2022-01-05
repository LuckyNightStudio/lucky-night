import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {Box, Container, Typography, Card, CardMedia, CardContent, CardActions, Button} from "@mui/material";
import { getDatabase } from "../../lib/notion";
import {flatMap, uniqBy, xor, intersection } from 'lodash'
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {theme} from "../../utils/theme";

const colors = {
    green: theme.palette.green.light,
    purple: theme.palette.purple.main,
    yellow: theme.palette.yellow.main
}

export const getColor = (key: string): string => {
    // @ts-ignore
    return colors[key]
}

export const getTitle = (entry?: any) => {
    return entry?.title?.map(({plain_text}: {plain_text: string}) => plain_text).join('')
}

const Index: NextPage = ({posts}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter()
    const { filter } = router.query
    const [selectedTags, setSelectedTags] = useState<string[]>((filter as string)?.split('&') ?? [])

    const allTags = uniqBy(flatMap(posts, (post: Post) => post.properties.Tags.multi_select), 'name')
    const getOpacity = (name: string): number => {
        return selectedTags.length > 0 ? selectedTags.includes(name) ? 1 : 0.4 : 1
    }

    const handleClick = (name: string) => {
        setSelectedTags(xor(selectedTags, [name]))
    }

    useEffect(() => {
        router.replace({
            pathname: '/blog',
            query: selectedTags.length > 0 ? {filter: selectedTags.join('&')} : undefined
        })
    }, [selectedTags])

    return (
        <Container>
            <Box p={4}>
                <Box mt={4} mx={2} sx={{display: 'flex', flexWrap: 'wrap'}}>
                    <Typography sx={{display: 'inline'}} mr={2} mt={1}>Tags:</Typography>
                    {allTags.map(({name, color}: {name: string, color: string}) => (
                        <Box sx={{
                            background: getColor(color),
                            borderRadius: 8,
                            display:'inline',
                            py: 1,
                            px: 1,
                            mr: 1,
                            mb: 1,
                            transition: 'opacity 0.4s',
                            cursor: 'pointer',
                            opacity: getOpacity(name),
                            whiteSpace: 'nowrap',
                            '&:hover': {
                                opacity: 0.6
                            }
                        }}
                             key={name}
                             onClick={() => handleClick(name)}>
                            <Typography sx={{display: 'inline'}} variant='caption'>{name}</Typography>
                        </Box>
                    ))}
                </Box>
                <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                    {posts.map((post: Post) => (
                        <Card sx={{
                            margin: 2,
                            flex: 1,
                            maxWidth: '50%',
                            minWidth: 300,
                            display: selectedTags.length === 0 || intersection(selectedTags, post.properties.Tags.multi_select.map(({name}) => name)).length > 0 ? 'flex' : 'none',
                            flexDirection: 'column',
                        }} key={post.id}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={post.image}
                                alt={post.properties.entry.title[0]?.plain_text}
                            />
                            <CardContent>
                                <Box sx={{ marginBottom: 2, display: 'flex', flexWrap: 'wrap' }}>
                                    {post?.properties?.Tags?.multi_select.map(({name, color}) => (
                                        <Box sx={{ background: getColor(color) , borderRadius: 8, display:'inline', py: '3px', px: 1, mr: 1, whiteSpace: 'nowrap', mt: 1}} key={name}>
                                            <Typography variant='caption'>{name}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                                <Typography gutterBottom variant="h5" mb={0}>
                                    {getTitle(post.properties.entry)}
                                </Typography>
                                <Typography gutterBottom variant="caption">
                                    {new Date(post.last_edited_time).toDateString()}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mt={2}>
                                    {post.properties.summary.rich_text[0]?.plain_text}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ marginTop: 'auto'}}>
                                <Link href={`/blog/${post.properties.slug.rich_text[0]?.plain_text}`} passHref>
                                    <Button size="small" variant='contained' sx={{
                                        marginLeft: 'auto',
                                        maxWidth: '80%',
                                    }}>
                                        <Typography sx={{
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            textTransform: 'none'
                                        }}>
                                        Read {getTitle(post.properties.entry)}
                                        </Typography>
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Container>
    )
}

interface Post {
    properties: {
        Tags: {
            multi_select: {
                name: string
                color: string
            }[]
        },
        slug: {
            rich_text: {
                plain_text: string
            }[]
        },
        // image: {
        //     files: {
        //         file: {
        //             url: string
        //         }
        //     }[]
        // }
        summary: {
            rich_text: {
                plain_text: string
            }[]
        },
        status: {
            select: {
                name: 'published' | 'draft'
            }
        },
        entry: {
            title: {
                plain_text: string
            }[]
        }
    },
    image: string,
    last_edited_time: Date,
    id: string
}

export const generateGoogleImg = (url: string) => {
    const id = url.replace('https://drive.google.com/file/d/', '').split('/')[0]
    return `https://drive.google.com/uc?export=view&id=${id}`
}

export const databaseId = process.env.NOTION_DATABASE_ID
export const getStaticProps: GetStaticProps = async () => {
    const database = await getDatabase(databaseId);

    const posts = database.map((post: any) => (
        {
            ...post,
            image: generateGoogleImg(post?.properties?.image.files[0].name)
        }
    )).filter((post: any) => post?.properties.status.select.name === 'published')

    return {
        props: {
            posts,
        }
    };
};



export default Index
