import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('NewsApiWidget', {
    title: 'Newsapi Import',
    attributes: {
        entries: {
            title: "Entries",
            description: "Number of entries"
        },

        category: {
            title: 'Category',
            values: [
                { value: 'business', title: 'Business' },
                { value: 'entertainment', title: 'Entertainment' },
                { value: 'general', title: 'General' },
                { value: 'health', title: 'Health' },
                { value: 'science', title: 'Science' },
                { value: 'sports', title: 'Sports' },
                { value: 'technology', title: 'Technology' },
            ],
        },

    },

    properties: [
        'entries',
        'category'
    ],

    initialContent: {
        category: 'General',
        entries: '5'
    },
});