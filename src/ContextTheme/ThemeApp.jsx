
// Create a context by the name AuthContext
// create a ThemeContextProvider component which will wrap the entire application around it
// create a theme variable in state ('dark', 'light') and a toggleTheme function,
// create a styles.js file which will contain an object
// {
//     "dark": { ... },  // styles
//     "light": { ... } // styles
// }
// pass these values into your context provider
// create a navbar with a button to switch the mode of the theme
// create a basic layout for a page with many separate components like Form, Buttons and Footer
// change the style of the components according to the theme


import React, {createContext} from 'react'
 
export const AuthContext = React.createContext()

export default class AuthContextProvider extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            theme: false
        }
    }

    HandleChange = ()=>{
       this.setState({
           theme: !this.state.theme
       })
    }
    render(){

        var {theme} =this.state
        var {HandleChange} = this
        return(
            <AuthContext.Provider value={{theme, HandleChange}}>
            {this.props.children}
            </AuthContext.Provider>
        )
       
    }
}
// export {AuthContext}
