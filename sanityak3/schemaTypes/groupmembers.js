export const groupmembers = {
    name: 'groupmembers',
    title: 'Group Members',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Frida',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Kristoffer',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Kevin',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Kiur',
            type: 'string',
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'bio',
            type: 'text',
            title: 'Biography'
        },
        {
            name: 'interests',
            type: 'array',
            title: 'Interests',
            of: [{ type: 'string' }]
        },
        {
            name: 'logEntries',
            type: 'array',
            title: 'Log Entries',
            of: [{ type: 'text' }]
        }
    ]
}

