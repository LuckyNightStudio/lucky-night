export default {
    cms_manual_init: true,
    backend: {
        name: 'github',
        repo: 'LuckyNightStudio/lucky-night',
        branch: 'main',
    },
    media_folder: 'public/img',
    public_folder: 'img',
    collections: [
        {
            name: 'posts',
            label: 'Posts',
            create: true,
            folder: 'content',
            fields: [
                {
                    label: 'Hero Title',
                    name: 'hero_title',
                    widget: 'string',
                },
                {
                    label: 'Hero Description',
                    name: 'hero_description',
                    widget: 'markdown',
                },
            ],
        },
    ],
};
