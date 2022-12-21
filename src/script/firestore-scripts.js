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
    imageUrl:
      'https://fisk.com.br/files/blog/banner-6-curiosidades-sobre-o-hamburguer.jpg',
    products: [
      {
        id: '6228fc8bb7e6cb904bbe014e',
        imageUrl:
          'https://cdn.minhareceita.com.br/2021/02/shutterstock_1490753552-1280x480.jpg'
      },
      {
        id: '6228fcb9b7e6cb904bbe0152',
        imageUrl:
          'https://media.istockphoto.com/id/1205795266/pt/foto/banner-of-craft-beef-burger-on-wooden-table-isolated-on-black-background.jpg?s=170667a&w=0&k=20&c=_bavwxgaN1t1rABFjibemzO30dNi-zGjO2dBWU3y-Jk='
      },
      {
        id: '6228fce4b7e6cb904bbe0154',
        imageUrl:
          'https://static.wixstatic.com/media/557d4c_76943666843147ad80795973d62d5a57~mv2.png/v1/fill/w_1538,h_776,al_c/557d4c_76943666843147ad80795973d62d5a57~mv2.png'
      },
      {
        id: '6228fd19b7e6cb904bbe0157',
        imageUrl:
          'https://riomararacajuonline.com.br/riomararacaju/2020/06/pizza_dois_sabores.png'
      }
    ]
  }
]

const main = async () => {
  await Promise.all(
    categories.map(async (slider) => {
      await addDoc(collection(db, 'slider'), slider)
    })
  )
}

main().then(() => process.exit())
