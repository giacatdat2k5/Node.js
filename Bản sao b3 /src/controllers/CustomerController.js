class CustomerController {

    get = (req, res) =>{
        try {
            const {page,sort} = req.query;
            console.log(page,sort);
            res.status(200).json({msg: `get id string `});
        } catch (error) {
           throw error;
        }
    }

    post = (req, res) =>{
        try {
            const {username,password} =req.body;
            console.log(username,password);
            res.status(200).json({
              username,
              password
            });
        } catch (error) {
           throw error;
        }
    }
    put = (req, res) =>{
        try {
            const {username,password} =req.body;
            console.log(username,password);
            res.status(200).json({
              username,
              password
            });
        } catch (error) {
           throw error;
        }
    }
    delete = (req, res) =>{
        try {
            let id = req.params.id;
            console.log(id);
            res.status(200).json({msg: `ID is ${id} `});
        } catch (error) {
           throw error;
        }
    }
}

module.exports = new CustomerController();