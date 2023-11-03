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

const ulEl = document.querySelector('.gallery')


//___________________|style|__________________
ulEl.style.maxWidth = '768px';
ulEl.style.border = '5px dotted red';
ulEl.style.listStyle = 'none';
ulEl.style.display = 'flex';
ulEl.style.justifyContent = 'space-between';
ulEl.style.padding = '15px';


//___________________|markup|__________________
function createElement(array) {
  const markup = array.map(({url, alt})=>
    `<li>
      <img src="${url}" alt="${alt}" width="220"/>
    </li>`
  ).join("");
  ulEl.insertAdjacentHTML('beforeend', markup);
}
createElement(images);