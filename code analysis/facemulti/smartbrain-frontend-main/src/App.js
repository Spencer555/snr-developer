import React, { useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import 'tachyons'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ParticlesBg from 'particles-bg'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import './App.css'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'

export default function App() {

    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [box, setBox] = useState([])
    const [route, setRoute] = useState('signin')
    const [isSignedIn, setIsSignedIn] = useState(false)
    const [user, setUser] = useState({
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ""
    },)


    const loadUser = (data) => {
        setUser({
            id: data.id,
            name: data.name,
            email: data.email,
            entries: data.entries,
            joined: data.joined
        })

    }


    const calculateFaceLocation = (data) => {


        const regions = data.outputs[0].data.regions; // Check if 'regions' still exists

        console.log(regions?.length)


        if (regions && regions.length > 0) {

            
            const image = document.getElementById('inputImage');
            const width = Number(image.width);
            const height = Number(image.height);
            const clarifaiFace1 = regions?.map((region) => ({
                topRow: region.region_info.bounding_box.top_row * height,
                leftCol: region.region_info.bounding_box.left_col * width,
                bottomRow: height - (region.region_info.bounding_box.bottom_row * height),
                rightCol: width - (region.region_info.bounding_box.right_col * width),
}))

            

            return clarifaiFace1
        
        } else {
            console.log('error', data?.status?.description);
            return {};
        }

    }

    const onRouteChange = (route) => {
        if (route === 'signout') {
            setIsSignedIn(false)
            setUser({
                id: "",
                name: "",
                email: "",
                entries: 0,
                joined: ""
            })
            setInput('')
            setImageUrl('')
            setBox({})
            setRoute('signin')
            setIsSignedIn(false)
        } else if (route === 'home') {
            setIsSignedIn(true)
        }
        setRoute(route)
    }

    const displayFaceBox = (box) => {

        setBox(box)
       


    }
    const onInputChange = (e) => {
        setInput(e.target.value)
    }

    const onButtonSubmit = (e) => {
        setImageUrl(input)



        fetch("http://localhost:3000/imageurl", {

            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                { image_url: imageUrl }
            )

        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    fetch('http://localhost:3000/image', {
                        method: 'put',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(
                            { id: user?.id }
                        )
                    }).then(res => res.json())
                        .then(count => {
                            setUser({
                                ...user,
                                entries: count
                            })
                        }).catch(console.log)
                }
                displayFaceBox(calculateFaceLocation(result))


            })
            .catch(error => console.log('error', error));


    }



    return (
        <div>
            <ParticlesBg type="polygon" bg={true} />
            <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
            {route === 'home' ? <div>
                <Logo />
                <Rank username={user?.name} user_entries={user?.entries} />
                <ImageLinkForm onInputChange={onInputChange} onSubmitButtonImage={onButtonSubmit} />
                <FaceRecognition box={box} imageUrl={imageUrl} />
            </div> : (
                route === 'signin' ? <SignIn loadUser={loadUser} onRouteChange={onRouteChange} /> : <Register loadUser={loadUser} onRouteChange={onRouteChange} />
            )
            }

        </div>
    )
}
