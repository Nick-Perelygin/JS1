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

const imagesGallery = images.map(option => {
  const elements = document.createElement('img');
  elements.classList.add('image');
  elements.width = 640;
  elements.src = option.url;
  elements.alt = option.alt;
  const elementsLi = document.createElement('li');
  elementsLi.appendChild(elements);
  return elementsLi
})

for (let i = 0; i <= imagesGallery.length; i += 1){
galleryUl.insertAdjacentHTML('afterbegin', imagesGallery[i].outerHTML)
}