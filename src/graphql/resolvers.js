const product = require('./product.resolvers');
const auth = require('./auth.resolvers');
const category = require('./category.resolvers');
const { RegularExpression } = require('graphql-scalars');

const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9 ]{3,8}$/); // Expresión regular para validar nombres de 3 a 8 caracteres

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
    },
    CategoryNameType
};

module.exports = resolvers;