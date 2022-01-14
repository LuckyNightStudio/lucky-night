export default {
    cms_manual_init: true,
    backend: {
        name: 'github',
        repo: 'LuckyNightStudio/lucky-night',
        branch: 'main',
    },
    publish_mode: 'editorial_workflow',
    media_folder: 'public/img',
    public_folder: 'img',
    site_url: 'https://www.luckynightstudio.co.uk/',
    collections: [
        {
            name: 'tags',
            label: 'Tags',
            files: [
                {
                    label: 'Tags',
                    file: 'meta/tags.yml',
                    name: 'Tags',
                    description: 'List of tags',
                    identifier_field: 'tags',
                    summary: 'All tags',
                    fields: [
                        {
                            name: 'tags',
                            label: 'Tags',
                            label_singular: 'Tag',
                            widget: 'list',
                            summary: '{{fields.name}}',
                            fields: [
                                {
                                    name: 'name',
                                    label: 'Display Name',
                                    widget: 'string'
                                },
                                {
                                    name: 'colour',
                                    label: 'Colour',
                                    widget: 'color'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'posts',
            label: 'Posts',
            create: true,
            folder: 'content',
            slug: "{{slug}}",
            identifier_field: 'slug',
            fields: [
                {
                    label: 'Title',
                    name: 'title',
                    widget: 'string',
                },
                {
                    label: 'Summary',
                    name: 'summary',
                    widget: 'text',
                },
                {
                    label: 'Summary Image',
                    name: 'summaryImage',
                    widget: 'image',
                },
                {
                    label:  "Tags",
                    name: "tagsList",
                    widget: 'list',
                    fields: [
                        {
                            label: 'Tags',
                            name: 'tags',
                            widget: 'relation',
                            collection: 'tags',
                            search_fields:  ['tags.*.name'],
                            display_fields:  ['tags.*.name'],
                            value_field: "tags.*.name"
                        }
                    ]
                },
                {
                    label: 'Blog post content',
                    name: 'body',
                    widget: 'markdown'
                },
                {
                label: "Publish Date",
                name: "date",
                widget: "datetime",
                format: "DD-MM-YYYY",
                dateFormat: "DD-MM-YYYY",
                timeFormat: false
                }
            ],
        },
    ],
};
