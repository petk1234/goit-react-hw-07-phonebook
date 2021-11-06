import { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import transition from "./transition.module.css";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import LiOfListForm from "../lioflistform/LiOfListForm";
class ListForm extends Component{
     
    render(){
        let{filter, contacts} = this.props;
        console.log('re-render');
        return(
          <>
            {filter.length === 0 ?(
                <TransitionGroup component='ul' className={styles.tasklist}>
                  {contacts.map( contact =>(
                     <CSSTransition key={contact.id} timeout={250} classNames={transition}> 
                       <LiOfListForm id={contact.id}/>
                     </CSSTransition>
                  ))}
                </TransitionGroup>
              ):(
                <TransitionGroup component='ul' className={styles.tasklist}>
                  {contacts.map( contact =>
                    contact.nazva.toLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1 && (
                      <CSSTransition key={contact.id} timeout={250} classNames={transition}> 
                        <LiOfListForm id={contact.id}/>
                      </CSSTransition>
                    )
                  )}
                </TransitionGroup>
            )}
          </>
        )
    }
}

const mapStateToProps = (state) =>{
  return{
      filter: state.tasks.filter,
      contacts: state.tasks.items,
  }
}

export default connect(mapStateToProps)(ListForm);