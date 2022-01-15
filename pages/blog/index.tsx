import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {Box, Container, Typography, Card, CardMedia, CardContent, CardActions, Button} from "@mui/material";
import { xor, intersection } from 'lodash'
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {NextSeo} from "next-seo";
import * as React from "react";
import path from "path";
import * as fs from "fs";
import * as yaml from 'js-yaml'

import matter from 'gray-matter'

export const getTitle = (entry?: any) => {
    return entry?.title?.map(({plain_text}: {plain_text: string}) => plain_text).join('')
}

export interface PostProps {
    date: string
    id: string
    summary: string
    summaryImage: string
    tagsList: {tags: string}[]
    title: string
}

const Index: NextPage = ({posts, tags: allTags}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter()
    const { filter } = router.query
    const [selectedTags, setSelectedTags] = useState<string[]>((filter as string)?.split('&') ?? [])

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
            <NextSeo
                title="Blog - Lucky Night Studio"
            />
            <Box p={4}>
                <Box mt={4} mx={2} sx={{display: 'flex', flexWrap: 'wrap'}}>
                    <Typography sx={{display: 'inline'}} mr={2} mt={1}>Tags:</Typography>
                    {allTags.map(({name, colour}: {name: string, colour: string}) => (
                        <Box sx={{
                            backgroundColor: colour,
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
                    {posts.map((post: PostProps) => (
                        <Card sx={{
                            margin: 2,
                            flex: 1,
                            maxWidth: '50%',
                            minWidth: 300,
                            display:  selectedTags.length === 0 || intersection(selectedTags, post.tagsList.map(({tags}) => tags)).length > 0 ? 'flex' : 'none',
                            flexDirection: 'column',
                        }} key={post.id}>
                            <CardMedia
                                src='image'
                                component="img"
                                height="200"
                                image={post.summaryImage}
                                alt={post.title}
                            />
                            <CardContent>
                                <Box sx={{ marginBottom: 2, display: 'flex', flexWrap: 'wrap' }}>
                                    {post?.tagsList?.map(({tags}) => (
                                        <Box sx={{ background: allTags.find(({name}: {name: string}) => name === tags)?.colour ?? '' , borderRadius: 8, display:'inline', py: '3px', px: 1, mr: 1, whiteSpace: 'nowrap', mt: 1}} key={tags}>
                                            <Typography variant='caption'>{tags}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                                <Typography gutterBottom variant="h5" mb={0}>
                                    {post.title}
                                </Typography>
                                <Typography gutterBottom variant="caption">
                                    {post.date}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mt={2}>
                                    {post.summary}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ marginTop: 'auto'}}>
                                <Link href={`/blog/${post.id}`} passHref>
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
                                            Read {getTitle(post.title)}
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

export const postsDirectory = path.join(process.cwd(), 'content')
const tagsFile = path.join(process.cwd(), 'meta/tags.yml')

export const getStaticProps: GetStaticProps = async () => {
    const fileNames = fs.readdirSync(postsDirectory)
    const posts = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })

    // @ts-ignore
    const tags = yaml.load(fs.readFileSync(tagsFile, 'utf8'))?.tags

    return {
        props: {
            posts,
            tags
        }
    };
};



export default Index
