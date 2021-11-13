import express from 'express'
import * as homeConstantData from '../constant-data/home'
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  const homeShopItems = [
    {title: 'Laptop<br>Collection', imgUrl: '/images/shop01.png', href: '#'},
    {title: 'Accessories<br>Collection', imgUrl: '/images/shop03.png', href: '#'},
    {title: 'Cameras<br>Collection', imgUrl: '/images/shop02.png', href: '#'}
  ]

  const newProducts = [
    {imgUrl: '/images/product01.png', productLabels: {sale: '-30%', new: 'NEW'}, category: 'Category', href: '#', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 5},
    {imgUrl: '/images/product01.png', productLabels: {sale: '-30%', new: 'NEW'}, category: 'Category', href: '#', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 3},
    {imgUrl: '/images/product01.png', productLabels: {sale: '-30%', new: 'NEW'}, category: 'Category', href: '#', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 4},
    {imgUrl: '/images/product01.png', productLabels: {sale: '-30%', new: 'NEW'}, category: 'Category', href: '#', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 1},
    {imgUrl: '/images/product01.png', productLabels: {sale: '-30%', new: 'NEW'}, category: 'Category', href: '#', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 2}
  ]

  const tabItems = [
    {name: 'Laptops', href: '#'},
    {name: 'Smartphones', href: '#', isActive: true},
    {name: 'Cameras', href: '#'},
    {name: 'Accessories', href: '#'}
  ]

  const topSellingProducts = [
    {imgUrl: '/images/product07.png', productLabels: {sale: '-30%', new: 'NEW'}, category: 'Category', href: '#', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 5},
    {imgUrl: '/images/product07.png', productLabels: {sale: '-30%', new: 'NEW'}, category: 'Category', href: '#', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 3},
    {imgUrl: '/images/product07.png', productLabels: {sale: '-30%', new: 'NEW'}, category: 'Category', href: '#', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 4},
    {imgUrl: '/images/product07.png', productLabels: {sale: '-30%', new: 'NEW'}, category: 'Category', href: '#', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 1},
    {imgUrl: '/images/product07.png', productLabels: {sale: '-30%', new: 'NEW'}, category: 'Category', href: '#', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00', rating: 2}
  ]

  const subTopSellingProducts = {
    pages: 2,
    products: [
      {imgUrl: '/images/product01.png', category: 'Category', href: '#', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00'},
      {imgUrl: '/images/product02.png', category: 'Category', href: '#', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00'},
      {imgUrl: '/images/product03.png', category: 'Category', href: '#', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00'},
      {imgUrl: '/images/product04.png', category: 'Category', href: '#', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00'},
      {imgUrl: '/images/product05.png', category: 'Category', href: '#', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00'},
      {imgUrl: '/images/product06.png', category: 'Category', href: '#', name: 'product name goes here', price: '$980.00', oldPrice: '$990.00'}
    ]
  }

  const socialNetworks = [
    {href: '#', iconClass: 'fa fa-facebook'},
    {href: '#', iconClass: 'fa fa-twitter'},
    {href: '#', iconClass: 'fa fa-instagram'},
    {href: '#', iconClass: 'fa fa-pinterest'}
  ]

  const {originalUrl} = req
  homeConstantData.footer.categories = homeConstantData.footer.categories.reduce((acc, category) => {
    if (category.href !== originalUrl) {
      return [...acc, category]
    }

    return acc
  }, [])

  homeConstantData.navItems = homeConstantData.navItems.reduce((acc, navItem) => {
    if (navItem.href === originalUrl) {
      navItem.isActive = true
    }

    return [...acc, navItem]
  }, [])

  res.render('pages/home', {homeShopItems, newProducts, tabItems,topSellingProducts,
    subTopSellingProducts, socialNetworks, homeConstantData})
})

export default router
