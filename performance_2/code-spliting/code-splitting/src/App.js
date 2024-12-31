import React, { Component } from 'react'
import './App.css';
import Page1 from './components/Page1'
import AsyncComponent from './components/AsyncComponent';
// import Page2 from './components/Page2'
// import Page3 from './components/Page3'
// now we wont import at the top we import in the function
// code spliting is done by using import below instead of above

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'page-1',
      component:null
    }
  }
  onRouteChange = (route) => {
    // updated spliting
    this.setState({ route: route })

  }
  // onRouteChange = (route) => {
  //   // no code spliting
  //   // this.setState({ route: route })

  //   // with code spliting we use dynamic import 
  //   if (route === 'page-1'){
  //     this.setState({route:route})
  //   } 
  //   else if (route === 'page-2'){
  //     // this only works because of webpack and it wont work in plain js
  //     // this is async and returns apromise
  //     import('./components/Page2').then((Page2) => {
  //       this.setState({route:route, component:Page2.default})
  //     })
  //   }
  //   else if (route === 'page-3'){
  //     // this only works because of webpack and it wont work in plain js
  //     // this is async and returns apromise
  //     import('./components/Page3').then((Page3) => {
  //       this.setState({route:route, component:Page3.default})
  //     })
  //   }
  // }
  render() {
    if (this.state.route === 'page-1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    }
    else if (this.state.route === 'page-2') {
      const AsyncPage2 = AsyncComponent(() => import('./components/Page2'))
      return <AsyncPage2 onRouteChange={this.onRouteChange} />
    }
    else if (this.state.route === 'page-3') {
      const AsyncPage3 = AsyncComponent(() => import('./components/Page3'))
      return <AsyncPage3 onRouteChange={this.onRouteChange} />
  }
}}
//   render() {
    // if (this.state.route === 'page-1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // }
    // else if (this.state.route === 'page-2'){
    //   return <Page2 onRouteChange={this.onRouteChange} />
    // }
    // else if (this.state.route === 'page-3'){
    //   return <Page3 onRouteChange={this.onRouteChange} />
//     }
//   }
// }

export default App;