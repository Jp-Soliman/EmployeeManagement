import User from '../model/UserModel.js'

export const getUsers = async (req, res) => {
    try{
        // const users = await User.find().sort({lastName:1}); //sorted by lastname ascending put 'lastname:-1' for descending
        // const users = await User.find().sort({age:-1}); // sorted by age ascending
        // const users = await User.find().sort({firstName:1}); console.log('sorted by first name')//sorted by first name ascending
        const users = await User.find(); // sorted by id 
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveUser = async (req,res) => {
    const user = new User(req.body);
    try{
        const insertUser = await user.save();
        res.status(201).json(insertUser)
        console.log('data saved')
    } catch (error){
        res.status(400).json({message: error.message})
    }
    
}

export const updateUser = async (req, res) => {
    try {
        const updateUser = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteUser = async (req,res) => {
    try{
        const deleteuser = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deleteuser);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}




