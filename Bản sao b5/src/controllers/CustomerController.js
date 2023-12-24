const CustomerService = require('../services/CustomerService')

class CustomerController {

    create = async (req, res, next) =>{
        try {
            const {username,phone,email,address,birthYear,sex} = req.body;
            
            // Gọi đến tầng service để xử lý
            let dataCustomer = {
                username,
                phone,
                email,
                address,
                birthYear,
                sex
            }
            const customer = await CustomerService.create(dataCustomer);

            res.status(200).json({
                customer
            })

        } catch (error) {
            next(error)
        }
    }
    getAll = async (req, res, next) =>{
        try{
            const customer = await CustomerService.getAll();

            res.status(200).json({
                customer
            })
        } catch(error){
            next(error)
        }
    }
    update = async (req,res,next)=>{
        try{
            const {username,phone,email,address,birthYear,sex} = req.body;
            const {id} = req.params;
            // Gọi đến tầng service để xử lý
            let dataCustomer = {
                username,
                phone,
                email,
                address,
                birthYear,
                sex
            }
            const result = await CustomerService.update(id,dataCustomer);
            if(result){
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
            const result = await CustomerService.delete(id);
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
    

module.exports = new CustomerController();