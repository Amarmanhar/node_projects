
const products = [];


exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

  exports.postAddproduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
  }

  exports.getProduct = (req, res, next) => {
    
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }

//   exports.contactUs = (req, res, next) =>{

//     res.render('contactus', {
//         pageTitle:'register here',
//         path:'/register.html',
//         registerCSS: true,

//     })
//     res.redirect('/');
//   }