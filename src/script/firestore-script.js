const { addDoc, collection } = require('firebase/firestore')
const { getFirestore } = require('firebase/firestore')
const { initializeApp } = require('firebase/app')

const firebaseConfig = {
  apiKey: 'AIzaSyC0d5K0sndLL1muiXYnicMAa9-MMx9tDpA',
  authDomain: 'lancheria-369b4.firebaseapp.com',
  projectId: 'lancheria-369b4',
  storageBucket: 'lancheria-369b4.appspot.com',
  messagingSenderId: '42264224092',
  appId: '1:42264224092:web:ffb02cc46a6fbf599a2199'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const categories = [
  {
    id: '6228fc5cb7e6cb904bbe014b',
    name: 'Pizzas',
    displayName: 'Pizzas',
    imageUrl:
      'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    products: [
      {
        id: '6228fc8bb7e6cb904bbe014e',
        name: 'Pizza Grander',
        price: 44.99,
        imageUrl:
          'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80'
      },
      {
        id: '6228fcb9b7e6cb904bbe0152',
        name: 'Pizza Broto',
        price: 35,
        imageUrl:
          'https://dinapolipremium.com.br/wp-content/themes/pizzariadinapoli/images/pizza2.png'
      },
      {
        id: '6228fce4b7e6cb904bbe0154',
        name: 'Pizza Media',
        price: 44,
        imageUrl:
          'https://static.wixstatic.com/media/557d4c_76943666843147ad80795973d62d5a57~mv2.png/v1/fill/w_1538,h_776,al_c/557d4c_76943666843147ad80795973d62d5a57~mv2.png'
      },
      {
        id: '6228fd19b7e6cb904bbe0157',
        name: 'Pizza Familia',
        price: 62,
        imageUrl:
          'https://riomararacajuonline.com.br/riomararacaju/2020/06/pizza_dois_sabores.png'
      }
    ]
  },
  {
    id: '6228f760b7e6cb904bbe012e',
    name: 'Xis',
    displayName: 'Xis',
    imageUrl:
      'https://conteudo.imguol.com.br/c/entretenimento/eb/2020/06/29/xis-coracao-1593449300366_v2_4x3.jpg',
    products: [
      {
        id: '6228f7a3b7e6cb904bbe0134',
        name: 'Xis Carne',
        info: '(Pão, Hambúrguer, Presunto, Queijo, Alface, Tomate, Milho, Ervilha, Fritas Maionese e Ovo)',
        price: 18,
        imageUrl:
          'https://conteudo.imguol.com.br/c/entretenimento/e1/2020/06/29/xig-gaucho-1593448754811_v2_4x3.jpg'
      },
      {
        id: '6228f93db7e6cb904bbe0140',
        name: 'Xis Frago',
        price: 18,
        info: '(Pão, Frango, Queijo, Alface, Tomate, Milho, Ervilha, Fritas, Maionese e Ovo)',
        imageUrl:
          'https://xgauchocasanova.com.br/wp-content/uploads/2021/12/X-Frango.jpg'
      },
      {
        id: '6228f8c7b7e6cb904bbe013b',
        name: 'Xis Frango com Catupiry',
        info: '(Pão, Frango, Catupiry Queijo, Alface, Tomate, Milho, Ervilha, Fritas, Maionese e Ovo)',
        price: 20,
        imageUrl:
          'https://images2.nogueirense.com.br/wp-content/uploads/2018/05/whatsapp-image-2018-05-24-at-12-02-37-1527174965.jpeg'
      },
      {
        id: '6228f96bb7e6cb904bbe0142',
        name: 'Xis Frango Quatro Queijos',
        info: '(Pão, Frango, Mussarela, Parmesão, Chedder, Catupiry, Alface, Tomate, Milho, Ervilha, Fritas Maionese e Ovo)',
        price: 20,
        imageUrl:
          'https://guerreirolanches.com.br/wp-content/uploads/2017/08/Xis-4-Queijos.jpg'
      },
      {
        id: '6228f7f1b7e6cb904bbe0136',
        name: 'Xis Strogonoff',
        info: '(Pão, Strogonoff de Carne, Queijo, Alface, Tomate, Milho, Ervilha, Fritas, Maionese e Ovo)',
        price: 22,
        imageUrl:
          'https://guerreirolanches.com.br/wp-content/uploads/2017/08/Xis-Strogonoff.jpg'
      },
      {
        id: '6228f8afb7e6cb904bbe0139',
        name: 'Xis Divino',
        info: '(Pão, Isca Carne, Cebola Caramelada, Queijo Gorgonzola, Queijo Mussarela, Alface, Tomate, Milho, Ervilha, Fritas, Maionese e Ovo)',
        price: 22,
        imageUrl:
          'https://conteudo.imguol.com.br/c/entretenimento/e1/2020/06/29/xig-gaucho-1593448754811_v2_450x337.jpg'
      },
      {
        id: '6228f986b7e6cb904bbe0145',
        name: 'Xis Coração',
        info: '(Pão, Coração, Queijo, Alface, Tomate, Milho, Ervilha, Fritas, Maionese e Ovo)',
        price: 25,
        imageUrl:
          'https://s3.us-west-2.amazonaws.com/whatsmenu/production/restaurantedagringa/products/74396/xcoracaojpeg'
      },
      {
        id: '6228f8f9b7e6cb904bbe013d',
        name: 'Xis Costela',
        info: '(Pão, Costela Assada, Molho Barbecue, Tempero Verde, Queijo, Alface, Tomate, Milho, Ervilha, Fritas, Maionese e Ovo)',
        price: 28,
        imageUrl:
          'https://images2.nogueirense.com.br/wp-content/uploads/2018/05/whatsapp-image-2018-05-08-at-10-59-32-1-1527174952.jpeg'
      }
    ]
  },
  {
    id: '623064ee22376f1e6b869471',
    name: 'Hamburguer',
    displayName: 'Hambúrguer',
    imageUrl:
      'https://blog.novasafra.com.br/wp-content/uploads/2022/04/Carnes-para-hamburguer-veja-as-6-melhores-que-voce-deve-experimentar-780x450.jpeg',
    products: [
      {
        id: '6230655f22376f1e6b869473',
        name: 'Balaqueiro',
        info: 'Pão Cervejinha, Hamburguer de Costela Bovina, Bacon laminado, Duplo Cheddar fatiado, Alface Americana, Tomate e Maionese',
        price: 20,
        imageUrl:
          'https://www.academiaassai.com.br/sites/default/files/styles/noticia_1020x640/public/dia_do_hamburguer.jpg?itok=3MV5BbG5'
      },
      {
        id: '623065f422376f1e6b869488',
        name: 'DaPatroa',
        info: 'Frango Crocante, Maionese da Casa, Salada Especial de Repolho, Tomate, Alface, Cebola Roxa e Queijo Mussarela',
        price: 25,
        imageUrl:
          'https://www.blog.bioritmo.com.br/wp-content/uploads/2021/05/dia-do-hamburguer-1.jpg'
      },
      {
        id: '6230662e22376f1e6b86948e',
        name: 'DoPatrão',
        info: 'Hambúrguer de Carne Bovina, Bacon, Maionese da Casa, Cebola Caramelada, Molho Gorgonzola, Cebola Roxa, Tomate, Alface e Queijo Cheddar.',
        price: 29,
        imageUrl:
          'https://exame.com/wp-content/uploads/2020/05/Vinil-Burger.jpg?quality=70&strip=info'
      },
      {
        id: '6230661122376f1e6b86948a',
        name: 'Bah Burguer',
        info: 'Hambúrguer de Carne Bovina, Maionese da Casa, Picles, Tomate, Alface e Queijo Cheddar.',
        price: 30,
        imageUrl:
          'https://supermercadosrondon.com.br/guiadecarnes/images/postagens/quer_fazer_hamburger_artesanal_perfeito_2019-05-14.jpg'
      },
      {
        id: '6230661f22376f1e6b86948c',
        name: 'De Panela',
        info: 'Carne de Panela Desfiada, Maionese da Casa, Cebola Caramelada, Cebola Roxa, Molho Gorgonzola, Tomate, Alface e Queijo Mussarela.',
        price: 30,
        imageUrl:
          'https://www.minervafoods.com/wp-content/uploads/2019/08/shutterstock_1169918173-2.jpg'
      },
      {
        id: '6230658322376f1e6b86947b',
        name: 'Trovador Burguer',
        info: 'Peito Bovino Fatiado (Costela), Queijo Provolone, Molho Barbecue Caseiro, Ovo, Maionese Da Casa, Tomate, Cebola Roxa, Rúcula.',
        price: 35,
        imageUrl:
          'https://receitinhas.com.br/wp-content/uploads/2017/08/iStock-525341192-1200x800.jpg'
      },
      {
        id: '623065b022376f1e6b869480',
        name: 'Cusco Burguer',
        info: 'Hambúrguer de Lingüiça Artesanal, Maionese da Casa, Cogumelos Salteados na Manteiga, Cebola Roxa, Picles, Tomate, Alface e Queijo Mussarela.',
        price: 36,
        imageUrl:
          'https://folhadomate.com/wp-content/uploads/2022/09/hamburguer-artesanal-696x464.jpg'
      }
    ]
  },
  {
    id: '6228fdd8b7e6cb904bbe0162',
    name: 'Picadão',
    displayName: 'Picadão',
    imageUrl:
      'https://www.anuncioemfoco.com.br/imagens/anuncios/041219122224/tele-entrega-picadao-porto-alegre-zona-norte-17366-4903.jpg',
    products: [
      {
        id: '6228fe63b7e6cb904bbe0165',
        name: 'Picadão Grande',
        info: '(Serve até 4 pessoas) Carne e Frango Empanados, Batata Frita, Polenta, Anel de Cebola, Queijo, Ovo de Codorna, Pepino, Azeitona e Molho Especial',
        price: 84,
        imageUrl:
          'https://storage.deliveryvip.com.br/ZITuJwNbxVsBbNlMr4NX0oMvVKSQRMVkXN5ulzTZrYU/h:256/Z3M6Ly9kZWxpdmVy/eXZpcC9laHQ5d2pt/MmYwZjlsN29uZTZy/Y29mcHBxb3l3'
      },
      {
        id: '6228fec7b7e6cb904bbe016f',
        name: 'Picadão Pequeno',
        info: '(Serve até 3 pessoas) Carne e Frango Empanados, Batata Frita, Polenta, Anel de Cebola, Queijo, Ovo de Codorna, Pepino, Azeitona e Molho Especial',
        price: 62,
        imageUrl:
          'https://storage.deliveryvip.com.br/YeKpJcnkUOm07jmqwSOOxrMj_gq6pNUh0v1aZO6W268/h:256/Z3M6Ly9kZWxpdmVy/eXZpcC81OHNlZDhh/OWtodXdwbjNkbnFr/bThseXlyYnRy'
      },
      {
        id: '6228ff71b7e6cb904bbe0175',
        name: 'Porção de Batata Pequena',
        price: 16,
        imageUrl:
          'https://segredosdacomida.com.br/wp-content/uploads/2022/10/Batata-frita-com-farinha-de-trigo.jpg'
      },
      {
        id: '6228ff93b7e6cb904bbe0177',
        name: 'Porção de Anel de Cebola',
        price: 18,
        imageUrl:
          'https://segredosdacomida.com.br/wp-content/uploads/2022/10/Batata-frita-com-farinha-de-trigo.jpg'
      }
    ]
  },
  {
    id: '6228f52eb7e6cb904bbe0111',
    name: 'bebidas',
    displayName: 'Bebidas',
    imageUrl:
      'https://img.freepik.com/fotos-gratis/vista-frontal-diferentes-bebidas-coloridas-dentro-de-garrafas_140725-14407.jpg?w=2000',
    products: [
      {
        id: '6228f5beb7e6cb904bbe0119',
        name: 'Coca Cola 2 litros',
        price: 12,
        imageUrl:
      'https://storage.googleapis.com/domain-images/e93f9067-9f29-43d4-8cf3-ab9544aed581/products/gallery_9e29f3d2-fa09-4397-8242-66ab4169a8a9.jpg'
      },
      {
        id: '6228f60bb7e6cb904bbe011f',
        name: 'Guaraná Antarctica 2 litros',
        price: 12,
        imageUrl:
      'https://marisalgados.com.br/wp-content/uploads/2020/02/guaran%C3%A1.jpg'
      },
      {
        id: '6228f6c8b7e6cb904bbe012c',
        name: 'H2O Limão 600ml',
        price: 7,
        imageUrl:
      'https://m.media-amazon.com/images/I/51M7GT1ocRL._AC_.jpg'
      },
      {
        id: '6228f5e8b7e6cb904bbe011d',
        name: 'Coca Cola Lata 350ml',
        price: 6,
        imageUrl:
      'http://lanchonetetedesco.com.br/wp-content/uploads/2018/08/2-7.jpg'
      },
      {
        id: '6228f68eb7e6cb904bbe0125',
        name: 'Coca Cola 600ml',
        price: 8,
        imageUrl:
      'https://www.botecogois.com.br/wp-content/uploads/2021/01/coca-600ml-1.jpg'
      },
      {
        id: '6228f591b7e6cb904bbe0115',
        name: 'Fanta Sabores 2 litros',
        price: 12,
        imageUrl:
      'https://us-southeast-1.linodeobjects.com/storage/comercial-bianchi/media/uploads/produto/refrigerante_fanta_sabores_2l_retorn_vel_8b6648a4-4674-45cd-9cff-5ab869e01a62.jpg'
      },
      {
        id: '6228f625b7e6cb904bbe0121',
        name: 'Água com Gás 500ml',
        price: 4,
        imageUrl:
          'https://i0.wp.com/www.graocaneca.com.br/wp-content/uploads/2022/05/Agua-Mineral-Natural-Sem-Gas-500ml-Cristal-Select-2.jpg?fit=583%2C583&ssl=1'
      },
      {
        id: '6228f648b7e6cb904bbe0123',
        name: 'Água sem Gas 500ml',
        price: 4,
        imageUrl:
      'https://static-images.ifood.com.br/image/upload/t_high/pratos/91fa9f4f-3610-41e9-b2ee-de6a3731c57e/202211010934_o8joro3ly18.png'
      }
    ]
  }
]

const main = async () => {
  await Promise.all(
    categories.map(async (category) => {
      await addDoc(collection(db, 'categories'), category)
    })
  )
}

main().then(() => process.exit())
