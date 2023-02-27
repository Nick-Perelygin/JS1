const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const galleryUl = document.querySelector('.gallery');
const gallery = images

const imagesGallery = images.map(option => {
  galleryUl.innerHTML += `<li><img class="image" src="${option.url}" alt="${option.alt}" width = 640></li>`;
})

for (let i = 0; i <= imagesGallery.length; i += 1){
  console.log(galleryUl.insertAdjacentHTML('afterbegin', imagesGallery[i].outerHTML))
}