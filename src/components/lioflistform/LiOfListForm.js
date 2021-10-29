import { Fragment, Component } from "react";
import styles from "./styles.module.css";
export default class LiOfListForm extends Component{
    state={

    }
    
    render(){
      let { contact } = this.props;
      let arr = contact.split(':');
      console.log(arr);
      // for(i=0; i<this.props.contact.length(); i++){
      //   if(this.props.contact[i]===":"){
            
      //   }
      // }
      return(
        <Fragment>  
          <li className={styles.liItem}>
            <span>{arr[0]}</span>
            <span>{arr[1]}</span>
            {/* <div className={styles.divItem}>
              <button className={styles.buttonItem} onClick={()=>this.props.deleteClickTamTam(this.props.contact)}></button>
            </div> */}
            <div className={styles.divItem}>
              <button className={styles.divItemButton} onClick={()=>this.props.deleteClickTamTam(this.props.contact)}></button>
            </div>
          </li>
          {/* <button onClick={()=>this.props.deleteClickTamTam(this.props.contact)}>close</button> */}
        </Fragment>
      )
    }
}