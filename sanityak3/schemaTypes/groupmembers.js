export const groupmembers = {
    name: 'groupmembers',
    title: 'Group Members',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'name',
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

