
export default {
    name: 'membros',
    type: 'document',
    title: 'Membros',
    fields: [
      {
        name: 'nome',
        title: 'Nome',
        type: 'string'
      },
      {
        name: 'sobrenome',
        title: 'Sobrenome',
        type: 'string'
      },
      {
        name: 'cargo',
        title: 'Cargo',
        type: 'string'
      },
      {
        name: 'bio',
        title: 'Biografia',
        type: 'text'
      },
      {
        name: 'titulo',
        title: 'Título',
        type: 'string'
      },

      {
        name: 'subtitulo',
        title: 'Subtítulo',
        type: 'string'
      },
      
      {
        name: 'imagem',
        title: 'Imagem',
        type: 'image',
        options: {
          hotspot: true 
        }
      }
    ]
  }