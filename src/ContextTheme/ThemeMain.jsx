import React from 'react'
import { AuthContext} from './ThemeApp'


export default class ThemeMain extends React.Component{
    constructor(props){
        super(props)
    }


render(){
    const { theme, HandleChange } =   this.context
    return(
             <>
            {(theme) ? (
                <div style={{textAlign:"center", height: "600px",border:"2px solid black", width: "100%", background: "black", color:"white" }}>
                    <h1 style={{fontSize:"150px"}}>BLACK</h1>
                </div>
            )
            :<div style={{textAlign:"center", height: "600px", border:"2px solid black", width: "100%", background: "white", color:"black" }}>
                  <h1 style={{fontSize:"150px"}}>WHITE</h1>
              </div>
            }
              <button
              style={{
                  float:"right",margin:"20px",background:"black",padding:"10px",height:"40px", width:"auto",color:"white", fontSize:"larger"
              }}
              onClick={HandleChange}> Theme Change </button> 
            </>
    )
    }
}

ThemeMain.contextType = AuthContext