import React,{Component} from 'react'
import Auxillary from '../Auxillary'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import '../style.css'

class Modal extends Component{
    
    render()
    { 
        return (
            <Auxillary>
                <Backdrop clicked={this.props.modalClosed} show={this.props.show}/>
                <div className={classes.Modal}
            style={{
            
                transform:this.props.show?'translateY(0)':'translateY(-100vh)',
                opacity:this.props.show?'1':'0'
            }}
            >
                {this.props.children}
            </div>
            </Auxillary>
            
        )
        
    }

}

export default Modal