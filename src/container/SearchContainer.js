import React from 'react'

import Input from '../components/Input'
import Button from '@material-ui/core/Button';



class SearchContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            addressList:{},
            renderCount:[0]
          
        }
    }



    renderInput=()=>{
        return(
        this.setState({renderCount: [...this.state.renderCount].concat([0])})
        )
    }

    addToAdressList=(atress)=>{
        // this.setState({
        //     adressList: {...this.addressList, atress}
        // })
        console.log(atress)
    }

    optimize=()=>{
      return  console.log("set  optimze fetch here")
    }

    render(){
        return(
            <div>
                {this.state.renderCount.map((input)=>{
                    return <Input attress={()=>this.addToAdressList()}/>
                    })
                }
                {this.state.renderCount.length<10?
                    <Button onClick={()=>{this.renderInput()}}variant="contained" color="primary" >
                        Add another Waypoint
                    </Button>: null
                }
                    <Button onClick={()=>{this.optimize()}}variant="contained" color="primary" >
                        Optimize Your Route
                    </Button>
            </div>
        )
    }
    
}

export default SearchContainer