const PAT = process.env.PAT;
const USER_ID = process.env.USER_ID;
const APP_ID = process.env.APP_ID;
// Change these to whatever model and image URL you want to use
const MODEL_ID = process.env.MODEL_ID;
const MODEL_VERSION_ID = process.env.MODEL_VERSION_ID;






const handleApi = (req, res) => {



    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: JSON.stringify({
            "user_app_id": {
                "user_id": USER_ID,
                "app_id": APP_ID
            },
            "inputs": [
                {
                    "data": {
                        "image": {
                            "url": req.body.image_url
                            // "base64": IMAGE_BYTES_STRING
                        }
                    }
                }
            ]
        })
    };
    

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
    .then(response => response.json())
    .then(result => res.json(result))
    .catch(error => console.log('error', error));

}



const handleImage = (req, res, db) => {
    if (!req.body.id) {
        return res.status(400).json('Incorrect form submission')
    }
    const id = req.body.id.toString();
    db('users').where('id', '=', id)
        .increment('entries', 1).returning('entries')
        .then(entries => {
            res.json(entries[0].entries)
        }).catch(err => res.status(400).json('unable to register'))

}

module.exports = {
    handleImage: handleImage,
    handleApi:handleApi
}
