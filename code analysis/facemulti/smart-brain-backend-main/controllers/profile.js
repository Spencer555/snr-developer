const  handleProfile = (req, res, db) => {
    const { id } = req.params;

    if(!id){
        return res.status(400).json('Incorrect form submission')
    }
    db.select('*').from('users').where({ id }).then(user => {
        if (user.length) {
            res.json(user[0])
        } else {
            res.status(400).json('Not Found')
        }
    }).catch(err => console.log('error getting user'))

} 



module.exports = {
    handleProfile:handleProfile
    };