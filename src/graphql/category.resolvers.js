const boom = require('@hapi/boom');

const CategoryService = require('./../services/category.service');
const service = new CategoryService();

const addCategory = async (_, { dto }, context) =>{
    const { user } = await context.authenticate('jwt', {session: false});
    if(!user){
        console.log('BOOM!')
       throw boom.unauthorized('JWT is not valid');
    }
    return await service.create(dto);
}

module.exports = {
    addCategory
}