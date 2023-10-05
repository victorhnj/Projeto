export default {
    name: 'satisfacao_curso',
    type: 'document',
    title: 'Satisfacao Curso',
    fields: [
       
        {
            name: 'ano',
            type: 'number',
            title: 'Ano '
        },

        {
            name: 'curso',
            title: 'Curso',
            type: 'string'
        },

        {
            title: 'Porcentagem',
            name: 'porcentagem',
            type: 'number'
        }
    ]
}