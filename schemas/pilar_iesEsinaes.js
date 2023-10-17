export default {
    name: 'pilar_iesEsinaes',
    title: 'Pilares E Sinais',
    type: 'document',
    fields: [
        
        {
            name: 'titulo',
            title: 'Titulo',
            type: 'string'
        },

        {
            name: 'sub_titulo',
            type: 'string',
            title: 'Sub Titulo'
        },

        {
            title: 'Pilares',
            name: 'pilares',
            type: 'array',
            of: [{ type: 'string' }],
        }
    ]
}