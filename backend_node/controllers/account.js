const User = require('../models/user');
const {auth,db} = require('../services/firebase')

function registerUser(name,email,password){
    // register user in MongoDB

    const newUser = new User({ name: name,email:email,password:password });
    newUser.save().then(()=>{return `${newUser._id}`}).catch(err=>console.log(err));
    
    // register user in firebase
    auth.createUser({
        email: email,
        password: password,
        displayName: name,
        disabled: false,  
    }).then((user)=>{console.log(`User created: ${user.uid}`)}).catch((error)=>{console.log(`Error: ${error}`)});

};
async function login(email,password){
    const user = await User.findOne({email:email}).exec();
    console.log(user);
    console.log(user._id);
    // user login
};
function forgotPassword(){
    // forgot password
};
function changePassword(){
    // forgot password
};

module.exports = {
    registerUser,
    login,
    forgotPassword,
    changePassword
};