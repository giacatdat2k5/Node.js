const User = require('../models/Users');

class UserService {
    create = async (dataUser) =>{
        try {
            // Xử lý nghiệp vụ và tương tác với tầng model
            const user = new User(dataUser);
            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    }
    update = async (id,dataUser) =>{
        try {
            // Xử lý nghiệp vụ và tương tác với tầng model
            const result = await User.updateOne({_id:id},{username:dataUser.username});
            return true;
        } catch (error) {
            throw error;
        }
    }

    delete = async (id) =>{
        try {
            const user = await User.findById(id);
            console.log(user)
            await user.deleteOne();
            return true;
        } catch (error) {
            throw error;
        }
    }
    getAll = async () =>{
        try {
          const users = await User.find();
          return users;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserService();