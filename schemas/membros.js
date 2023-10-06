
export default {
    name: 'membros',
    type: 'document',
    title: 'Membros',
    fields: [
      {
        name: 'foto',
        type: 'image',
        title: 'Foto'
      },

      {
        name: 'nome_integrante',
        type: 'string',
        title: 'Nome do Integrante'
        },

        {
            name: 'cargo',
            type: 'string',
            title: 'Cargo'
        },

        {
            name: 'bio',
            type: 'string',
            title: 'Bio'
        },

        {
          name: 'sub_titulo',
          type: 'string',
          title: 'Sub Titulo'
       },

        {
            name: 'destaque',
            type: 'boolean',
            title: 'Destaque'
        }
    ]
  }