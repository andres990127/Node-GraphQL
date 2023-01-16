const product = require('./product.resolvers');
const auth = require('./auth.resolvers');
const category = require('./category.resolvers');

const resolvers ={
    Query:{
        // Products
        product: product.getProduct,
        products: product.getProducts
    },
    Mutation:{
        // Products
        addProduct: product.addProduct,
        updateProduct: product.updateProduct,
        deleteProduct: product.deleteProduct,

        // Login
        login: auth.login,

        // Category
        addCategory: category.addCategory,
    }
};

module.exports = resolvers;