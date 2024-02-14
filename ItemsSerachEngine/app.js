const products = [{
    id: 0,
    title: 'Never Give up Tshirt',
    price: '$10',
    image: 'images/tshirt1.webp'
},
{
    id: 1,
    title: 'Thsirts',
    price: '$15',
    image: 'images/tshirt2.jpg'
},
{
    id: 2,
    title: 'Blue Thsirt',
    price: '$20',
    image: 'images/tshirt3.jpg'
},
{
    id: 3,
    title: 'Black Skirt',
    price: '$10',
    image: 'images/skirt1.webp'
},
{
    id: 4,
    title: 'Princess Skirt',
    price: '$12',
    image: 'images/skirt2.webp'
},
{
    id: 5,
    title: 'Long Skirt',
    price: '$18',
    image: 'images/skirt3.jpg'
},
{
    id: 6,
    title: 'Brown Pant 1',
    price: '$15',
    image: 'images/pant1.jpg'
},
{
    id: 7,
    title: 'Black Pant',
    price: '$22',
    image: 'images/pant2.webp'
},
{
    id: 8,
    title: 'Brown Pant 2',
    price: '$30',
    image: 'images/pant3.jpg'
},
{
    id: 0,
    title: 'Mix Jewelly Set',
    price: '$40',
    image: 'images/jewelly1.webp'
},
{
    id: 0,
    title: 'Blue Jewelly Set',
    price: '$38',
    image: 'images/jewelly2.webp'
},
{
    id: 0,
    title: 'Gold Color Jewelly Set',
    price: '$43',
    image: 'images/jewelly3.jpg'
},
]
const productList = document.getElementById('product-list')

products.map(({ id, title, price, image }) => {
    const divProduct = document.createElement('div')
    divProduct.innerHTML = ` <div class="product">
    <img src=${image} alt="" width="150px" height="150px">
    <div class="p-details">
        <h2>${title}</h2>
        <h3>${price}</h3>
    </div>
</div>`
    productList.appendChild(divProduct)
})
const search = () => {
    const searchBox = document.getElementById('search-item').value.toUpperCase()
    const storeitems = document.getElementById('product-list')
    const product = document.querySelectorAll('.product')
    const pname = storeitems.getElementsByTagName('h2')

    for (let i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML
            if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = '';
            } else {
                product[i].style.display = 'none';
            }
        }
    }
}




