export default {
    name: 'faq',
    type: 'document',
    title: 'FAQ',
    fields: [
        {
            name: 'pergunta',
            type: 'string',
            title: 'Pergunta'
        },

        {
            title: 'Resposta',
            name: 'resposta',
            type: 'string'
        },

        {
            title: 'Ordem',
            name: 'ordem',
            type: 'number'
        }
    ]
}
