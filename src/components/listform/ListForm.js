import { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import transition from "./transition.module.css";
import styles from "./styles.module.css";
import LiOfListForm from "../lioflistform/LiOfListForm";
export default class ListForm extends Component{
    state={

    }
    
    // putButton = contact =>{
    //     this.props.deleteClickTam(contact);
    // }
     
    render(){
        let{filter, contacts} = this.props;
         
        return(
          <>
            {filter.length === 0 ?(
                <TransitionGroup component='ul' className={styles.tasklist}>
                  {contacts.map( contact =>(
                     <CSSTransition key={contact} timeout={250} classNames={transition}> 
                       <LiOfListForm contact={contact} deleteClickTamTam={this.props.deleteClickTam}/>
                     </CSSTransition>
                  ))}
                </TransitionGroup>
              ):(
                <TransitionGroup component='ul' className={styles.tasklist}>
                  {contacts.map( contact =>
                    contact.toLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1 && (
                      <CSSTransition key={contact} timeout={250} classNames={transition}> 
                        <LiOfListForm contact={contact} deleteClickTamTam={this.props.deleteClickTam}/>
                      </CSSTransition>
                    )
                  )}
                </TransitionGroup>
            )}
          </>
        )
    }
}