const mongoose = require('mongoose');
const {userSchema} = require('../models/model')
const User = mongoose.model('User', userSchema);

exports.createUser = (req, res) => {
    let newUser = new User(req.body);

    newUser.save((err, User) => {
        if (err) {
            res.send(err);
        }
        res.json(User)
        console.log('Data Posted Successfully')
        
    })
};

exports.getUsers = (req, res) =>{
    User.find((err, User)=> {
        if(err){
            res.send(err);
        }
        res.json(User);
    }).then(()=>console.log('Data retreived successfully')) 
}

exports.findUser = (req,res) =>{
    const id = req.params.id;
    User.findById(id, (err, User)=>{
        if(err){
            res.send(err);
        }
        res.json(User);
    })}

exports.updateUser = (req,res)=>{
    const id = req.params.id; 
    User.findByIdAndUpdate(id, req.body,
        //  {new: true}, 
         (err, User) => {
        if(err){
            res.send(err)
        }
        res.json(User)
    }).then(()=>console.log(`User Updated successfully with id ${id} `))
};

exports.deleteUser = (req,res)=>{
    const id = req.params.id;
    User.findByIdAndDelete(id, (err, User)=>{
        if(err){
            res.send(err)
        }
        res.json(User)
    }).then(()=>console.log(`User Deleted successfully with id ${id}`))
};