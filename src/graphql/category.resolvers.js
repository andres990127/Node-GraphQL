const boom = require('@hapi/boom');

const checkRolesGql = require('./../utils/checkRolesGql');
const checkJwtGql = require('./../utils/checkJwtGql');
const CategoryService = require('./../services/category.service');
const service = new CategoryService();

const addCategory = async (_, { dto }, context) =>{
    const user = await checkJwtGql(context); // Para validar que tiene JWT
    checkRolesGql(user, 'admin');            // Para validar que solo tenga acceso los que tienen rol de 'admin' en su JWT
    return await service.create({
        ...dto,
        image: dto.image.href
    });
}

const getCategory = async (_, { id }) =>{
    return await service.findOne(id);
}


module.exports = {
    addCategory,
    getCategory
}