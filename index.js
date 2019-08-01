const listings = [
  {
    image: 'https://images.craigslist.org/00m0m_firP9eCBvDI_1200x900.jpg',
    title: 'Vancouver Downtown',
    price: 3000,
    createdAt: 'Jul 13',
  },

  {
    image: 'https://images.craigslist.org/00Q0Q_eeyeS1WfFie_600x450.jpg',
    title: 'North Vancouver',
    price: 6000,
    createdAt: 'Jul 12',
  },

  {
    image: 'https://images.craigslist.org/00T0T_f5T3ZBW16gz_600x450.jpg',
    title: 'Qube Downtown',
    price: 4000,
    createdAt: 'Jul 11',
  },
];

let searchText = '';

const render = ()=> {
  document.querySelector('ul').innerHTML = '';

  listings
  .filter(listing => {
    if( !searchText || (
      listing.title.toLowerCase().includes(searchText.toLowerCase())
    )) return true;
    else return false;
  })
  .forEach(listing => {
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.src = listing.image;

    const container = document.createElement('div');
    container.className = 'listing-container';

    const date = document.createElement('span');
    date.innerHTML = listing.createdAt;

    const title = document.createElement('a');
    title.innerHTML = listing.title;
    title.href = '#';

    const priceContainer = document.createElement('div');
    const price = document.createElement('span');
    price.innerHTML = listing.price;

    priceContainer.appendChild(price);

    li.appendChild(img);
    container.appendChild(date);
    container.appendChild(title);
    container.appendChild(priceContainer);

    li.appendChild(container);

    document.querySelector('ul').appendChild(li);
  });
};

render();

function addListing(){
  const newTitle = document.querySelector('.add-listing-form input.title').value;

  const newPrice = document.querySelector('.add-listing-form input.price').value;

  const newImgUrl = document.querySelector('.add-listing-form input.img-url').value;

  if( !newTitle || !newPrice || !newImgUrl ) return;

  const newCreatedAt = (new Date).toString().slice(4, 10);

  const newListing = {
    title: newTitle,
    price: newPrice,
    image: newImgUrl,
    createdAt: newCreatedAt,
  };

  listings.push( newListing );

  render();

  document.querySelectorAll('.add-listing-form input').forEach(input=>{
    input.value = '';
  });
}

function search(){
  const nextSearchText = document.querySelector('input.search').value;
  searchText = nextSearchText;

  render();
}

//function searchKeypress(event){
//  if( event.keyCode === 13 ) search();
//}









//
