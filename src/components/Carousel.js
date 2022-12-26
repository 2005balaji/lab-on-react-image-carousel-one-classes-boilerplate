import React from "react";
import "./Carousel.css";
import { images } from '../data/CarouselData'
// // icons from material UI
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


class Carousel extends React.Component {

    constructor(props){
        super(props)
        
        this.state={
        currImg:0,
        }
        }
        


render(){


    return(

        <div className = 'carousel' >
                <div className="carouselInner"
                 style={{ backgroundImage: `url(${images[this.state.currImg].img})` }}>


                    <div className="left" onClick={()=> { if( this.state.currImg>0 ) this.setState({currImg:this.state.currImg-1})}}>
                    <ArrowBackIosIcon style={{ fontSize: 40 }} />
                    </div>
                   
                    <div className="centrediv" id="centrediv">
                        <h1>{images[this.state.currImg].title}</h1>
                        <br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br />
                        <p>{images[this.state.currImg].subtitle}</p>
                    </div>

                    <div className="right" onClick={()=> { if (this.state.currImg< images.length - 1) this.setState({currImg:this.state.currImg+1})}}>
                    <ArrowForwardIosIcon style={{ fontSize: 40 }} />
                    </div>
                        
    
                </div>
    
        </div>
    )

}
    



}



export default Carousel;