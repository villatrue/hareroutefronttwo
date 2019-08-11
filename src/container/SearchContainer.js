import React from 'react'
import SearchBlock from '../components/SearchBlock'
import Input from '../components/Input'
import InputTwo from '../components/InputTwo'



class SearchContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            addressList:[],
          
        }
    }
    // componentDidMount(){
    //     console.log("hi boi")
    // }
    ///setup callback
    ///pass callback into input
    //inside input
    ///profit!!!
    render(){
        return(
            <div>
                <Input/>
            </div>
        )
    }
    
}

export default SearchContainer