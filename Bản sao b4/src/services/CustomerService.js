const Customer = require('../models/Customer');

class CustomerService {
    create = async (dataCustomer) =>{
        try {
            // Xử lý nghiệp vụ và tương tác với tầng model
            const customer = new Customer(dataCustomer);
            await customer.save();
            return customer;
        } catch (error) {
            throw error;
        }
    }
    getAll = async (id, dataCustomer)=>{
        try{
           const customer = await Customer.find();
           return customer;
        }catch(error){
            throw error;
        }
    }
    update = async (id, dataCustomer)=>{
        try {
            const result = await Customer.updateOne({_id:id},{username:dataCustomer.username});
            return true;    
        }catch (error){
            throw error;
        }
    }

    delete = async (id) =>{
        try {
            const customer = await Customer.findById(id);
            console.log(customer)
            await customer.deleteOne();
            return true;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CustomerService();