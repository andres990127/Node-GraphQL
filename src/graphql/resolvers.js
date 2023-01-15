const product = require('./product.resolvers');

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
    }
};

module.exports = resolvers;