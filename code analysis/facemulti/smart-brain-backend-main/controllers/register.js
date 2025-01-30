const handleRegister = (req, res, db, bcrypt) => {
    const { email, name, password} = req.body


        if(!email || !name || !password){
            return res.status(400).json('Incorrect form submission')
        }

    // since we are running two operations at the same time we need to add transaction so if one fails all fail

    var hash = bcrypt.hashSync(password);
    // transactions are created when we have to do more than 2 things at once

    // and u use trx instead of db to do transactions
  
    db.transaction(trx => {
        trx.insert({
            hash: hash, email: email
        })
            .into('login')
            .returning('email')
            // we insert to long and it returns the email and we pass it to insert into users
            .then(loginEmail => {
                // insert and return all the inserted col
                // we now inserts it in the users
                trx('users').returning('*').insert({
                    email: loginEmail[0].email,
                    name: name,
                    joined: new Date()
                }).then(user => {
                    res.json(user[0]);

                }).then(trx.commit)
                    // if all pass commit
                    .catch(trx.rollback)
                // if one fail rollback
            }).catch(err => console.log('unable to register'))
    })


}


module.exports = {
handleRegister: handleRegister
};
