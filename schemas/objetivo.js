export default {
    name: 'objetivo',
    type: 'document',
    title: 'Objetivo',
    fields: [
        {
            name: 'objetivo_title',
            type: 'string',
            title: 'Objetivo'
        },

        {
            title: 'Sub_objetivo',
            name: 'sub_objetivo',
            type: 'array',
            of: [{ type: 'string' }],
        }
    ]
}