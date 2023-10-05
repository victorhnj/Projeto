export default {
    name: 'satisfacao_infra',
    type: 'document',
    title: 'Satisfacao Infraestrutura',
    fields: [
       
        {
            name: 'ano',
            type: 'number',
            title: 'Ano '
        },

        {
            name: 'sala',
            title: 'Sala',
            type: 'string'
        },
        
        {
            title: 'Porcentagem',
            name: 'porcentagem',
            type: 'number'
        }
    ]
}