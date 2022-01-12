import { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import transition from "./transition.module.css";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import LiOfListForm from "../lioflistform/LiOfListForm";
import tasksSelectors from "../../redux/tasks/tasksSelectors";
// class ListForm extends Component{
     
//     render(){
//         let{contacts} = this.props;
//         console.log('re-render');
//         return(
//           <>
//                 <TransitionGroup component='ul' className={styles.tasklist}>
//                   {contacts.map( ({id}) =>(
//                      <CSSTransition key={id} timeout={250} classNames={transition}> 
//                        <LiOfListForm id={id}/>
//                      </CSSTransition>
//                   ))}
//                 </TransitionGroup>
//           </>
//         )
//     }
// }

function ListForm({ contacts }) {
  console.log('RERENDER');
  return (
    //<TransitionGroup component="ul"  className={styles.tasklist}>
    <ul className={styles.tasklist}>
      {contacts.map(({ id }) => (
       // <CSSTransition key={id} classNames={transition} timeout={2500}>
          <LiOfListForm key={id} id={id} />
        //</CSSTransition>
      ))}
    </ul>
    //</TransitionGroup>
  );
}

const mapStateToProps = (state) =>{
  return{
    contacts: tasksSelectors.getFilterContacts(state)
  }
}

export default connect(mapStateToProps)(ListForm);