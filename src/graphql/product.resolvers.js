const ProductsService = require('./../services/product.service');
const service = new ProductsService();

const getProduct = async (_, { id }) =>{
    return await service.findOne(id);
}

const getProducts = async (_, args) =>{
    return await service.find({});
}

const getProductsByCategory = async (parent) =>{
    console.log(parent.dataValues.id);
    const categoryId = parent.dataValues.id;
    return await service.getByCategory(categoryId);
}

const addProduct = async (_, { dto }) =>{
    return await service.create(dto);
}

const updateProduct = async (_, { id, dto }) =>{
    return await service.update(id, dto);
}

const deleteProduct = async (_, { id }) =>{
    await service.delete(id);
    return id;
}

module.exports = {
    getProduct,
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategory
}