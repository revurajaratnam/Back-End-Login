
const UserFiles = (req, res , next) =>{
    console.log(req.body);
    console.log(req.file);
    next();
}
module.exports = {UserFiles}