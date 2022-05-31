import {Container, Box, Typography} from "@mui/material";
import path from "path";
import fs from "fs";
import {PostProps, postsDirectory} from "./index";
import matter from "gray-matter";
import ReactMarkdown from 'markdown-to-jsx';
import Link from "next/link";
import * as yaml from "js-yaml";
import {theme} from "../../utils/theme";
import {ArticleJsonLd, NextSeo} from "next-seo";
import * as React from "react";

interface Props {
    data: PostProps,
    content: string
    allTags: {
        name: string
        color: string
    }[]
    slug: string
}

function MarkdownListItem(props: any) {
    return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
}

const ImageComponent = ({src, alt}: {src: string, alt: string})  => {
    return (
        <Box sx={{width: '80%', mx: 'auto', my: 4 }}>
            <img src={`/${src}`} alt={alt} style={{maxWidth: '100%'}} />
        </Box>
    )
}

const QuoteComponent = ({children}: any) => {
    return (
        <Box sx={{
            px: 4,
            py: 4,
            my: 5,
            background: theme.palette.greenLight.light,
            borderLeft: `solid 8px ${theme.palette.green.main}`,
            '& a': {
                textDecoration: 'underline'
            }
        }}>
            {children[0]?.props?.children?.map((text: string | object, i: number) => (
                <Typography key={i} sx={{ display: 'inline'}}>
                    {text}
                </Typography>
            ))}
        </Box>
    )
}

const AsideComponent = ({children}: any) => {
    return (
        <Box sx={{p: 6, background: theme.palette.purple.main }}>
            {children[0]?.props?.children?.map((text: string, i: number) => (
                <Typography key={i} textAlign='center'>
                    {text}
                </Typography>
            ))}
        </Box>
    )
}

const PWrapper = ({ children, ...props }: any) => {
    const ParaComponent = children[0]?.type?.name === 'ImageComponent' ? 'div' : Typography
    return <ParaComponent sx={{ mb: 4}} >{children}</ParaComponent>
}

const options = {
    overrides: {
        h1: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: 'h1',
            },
        },
        h2: {
            component: Typography,
            props: { gutterBottom: true, variant: 'h2' },
        },
        h3: {
            component: Typography,
            props: { gutterBottom: true, variant: 'h3' },
        },
        h4: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: 'h4',
            },
        },
        h5: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: 'h5',
            },
        },
        h6: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: 'h6',
            },
        },
        p: {
            component: PWrapper
        },
        li: {
            component: MarkdownListItem,
        },
        img: {
            component: ImageComponent
        },
        blockquote: {
            component: QuoteComponent
        },
        aside: {
            component: AsideComponent
        }
    },
};

const Page: ({data, content, slug}: Props) => JSX.Element = ({data, content, allTags = [], slug}: Props) => {
    if(!data) {
        return <></>
    }
    const {title, date, tagsList, summaryImage, summary} = data
    const tags: any[] = tagsList.map(({tags}) => (allTags.find(({name}) => name === tags)))

    return (
        <Container maxWidth='md'>
            <NextSeo
                title={`${title} - Lucky Night Studio`}
                description={summary}
                openGraph={{
                    images: [{
                        url: `https://www.luckynightstudio.co.uk/${summaryImage}`,
                        width: 330,
                        height: 200,
                        alt: title,
                        type: 'image/jpg',
                    }]
                }}
            />
            <ArticleJsonLd
                publisherLogo={'https://www.luckynightstudio.co.uk/img/logo.jpg'}
                publisherName='Lucky Night Studio'
                url={`https://www.luckynightstudio.co.uk/blog/${slug}`}
                title={title}
                images={[
                    `https://www.luckynightstudio.co.uk/${summaryImage}`
                ]}
                datePublished={date}
                authorName="Lucky Night Studio"
                description={summary}
            />
            <Box component='article' px={4} py={8}>
                <Box mb={4}>
                    <Typography variant='h2' component='h1'>
                        {title}
                    </Typography>
                    {date && <Typography variant='caption'>{date}</Typography>}
                    {tags && (
                        <Box sx={{display: 'flex', mt: 2, flexWrap: 'wrap'}}>
                            {
                                tags.map(({name, colour}) => (
                                    <Link href={`/blog?filter=${name}`} passHref key={name}>
                                        <Box sx={{ background: colour, borderRadius: 8, display:'inline', py: '3px', px: 1, mr: 1, mt: 1, cursor: 'pointer'}}>
                                            <Typography variant='caption'>{name}</Typography>
                                        </Box>
                                    </Link>
                                ))
                            }
                        </Box>
                    )}
                </Box>
                {/* eslint-disable-next-line react/no-children-prop */}
                <ReactMarkdown options={options} children={content}/>
            </Box>
        </Container>
    )
}

export const getStaticPaths = async () =>
{
    const fileNames = fs.readdirSync(postsDirectory)
    const paths = fileNames.map((fileName) => `/blog/${fileName.replace('.md', '')}`)
    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps = async (context: { params: { slug: string; }; }) => {
    const fullPath = path.join(postsDirectory, `${context.params.slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const {data, content} = matter(fileContents)
    const tagsFile = path.join(process.cwd(), 'meta/tags.yml')
    // @ts-ignore
    const allTags = yaml.load(fs.readFileSync(tagsFile, 'utf8'))?.tags

    return {
        props: {
            slug: context.params.slug,
            data,
            content,
            allTags
        }
    };
};


export default Page

