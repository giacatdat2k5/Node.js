const UsersService = require('../services/UsersService');


class UserController {
    create = async (req, res, next) =>{
        try {
            const {username,email,phone,age} = req.body;
            
            // Gọi đến tầng service để xử lý
            let dataUser = {
                username,
                email,
                phone,
                age
            }
            const user = await userService.create(dataUser);

            res.status(200).json({
                user
            })

        } catch (error) {
            next(error)
        }
    }
    getAll = async (req, res, next) =>{
        try {
        const users = await UsersService.getAll();

        res.status(200).json({
            users
        })
        } catch (error) {
            next(error)
        }
    }
    update = async (req, res, next) =>{
        try {
            const {username,email,phone,age} = req.body;
            const {id} = req.params;
            // Gọi đến tầng service để xử lý
            let dataUser = {
                username,
                email,
                phone,
                age
            }
            const result = await userService.update(id, dataUser);
            if (result){
                res.status(200).json({'mgs':'Updated'})
            }else{
                throw new Error('Update fail')
            }
        } catch (error) {
            next(error)
        }
    }

    delete = async (req, res, next) =>{
        try {
            const {id} = req.params;
            const result = await userService.delete(id);
            if (result){
                res.status(200).json({'mgs':'Deleted'})
            }else{
                throw new Error('Deleted fail')
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new UserController();