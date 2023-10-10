export default {
    name: 'objetivo',
    type: 'document',
    title: 'Objetivo',
    fields: [
        {
            name: 'descricao_title',
            type: 'string',
            title: 'Descricao'
        },

        {
            title: 'Sub_objetivo',
            name: 'sub_objetivo',
            type: 'array',
            of: [{ type: 'string' }],
        }
    ]
}