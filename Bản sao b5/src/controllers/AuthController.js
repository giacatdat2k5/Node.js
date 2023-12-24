const jwt = require('jsonwebtoken');


class AuthController {
    login = async (req, res, next) =>{
        try {
           //xử lý login
           //check username và password in database
           //tồn tại user => tạo ra token
           //không tồn tại user đấy => trả về lỗi user not found
            console.log('Fuction login');
            const { username } = req.body;
            const token = jwt.sign({ username }, process.env.SECRET_KEY_JWT);


            res.status(200).json({
                token: token
            })

        } catch (error) {
            next(error)
        }
    }
    
}

module.exports = new AuthController();