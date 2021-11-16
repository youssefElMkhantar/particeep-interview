const movies = [
  {
    id: '1',
    img: 'https://m.media-amazon.com/images/I/711VQcNMkvL._AC_SL1500_.jpg',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1
  }, {
    id: '2',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71-J6giZEQL.jpg',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0
  }, {
    id: '3',
    img: 'https://fr.web.img5.acsta.net/medias/nmedia/18/35/23/97/18391267.jpg',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1
  }, {
    id: '4',    
    img: 'https://fr.web.img3.acsta.net/pictures/18/03/22/16/48/2454348.jpg',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6
  }, {
    id: '5',
    img: 'https://m.media-amazon.com/images/I/81rpB-3qwoL._AC_SL1500_.jpg',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2
  }, {
    id: '6',
    img: 'https://www.ecranlarge.com/uploads/image/001/121/7p8x4u3o3p1jzmbqny3zaloby3m-861.jpg',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3
  }, {
    id: '7',
    img: 'https://www.ecranlarge.com/uploads/image/001/121/7p8x4u3o3p1jzmbqny3zaloby3m-861.jpg',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32
  }, {
    id: '8',
    img: 'https://fr.web.img2.acsta.net/medias/nmedia/18/35/91/33/19255605.jpg',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1
  }, {
    id: '9',
    img: 'https://media.senscritique.com/media/000004710747/source_big/Inception.jpg',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1
  }, {
    id: '10',
    img: 'https://www.ecranlarge.com/uploads/image/001/148/7xkj1acu40bjzlhvprilwjfvw7-555.jpg',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12
  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
