import { Fragment, Component } from "react";
import { connect } from "react-redux";
import tasksOperations from "../../redux/tasks/tasksOperations";
import styles from "./styles.module.css";
class LiOfListForm extends Component{
    render(){
      let {id, nazva, deleteClickTamTam} = this.props;
      console.log(this.props);
      if(nazva !== undefined){
      let arr = nazva.split(':');
      return(
        <Fragment>  
          <li className={styles.liItem}>
            <span>{arr[0]}</span>
            <span>{arr[1]}</span>
            <div className={styles.divItem}>
              <button className={styles.divItemButton} onClick={deleteClickTamTam}></button>
            </div>
          </li>
        </Fragment>
      )
      }
      else{
        return(
          <h1>Contact is deleted</h1>
        )
      }
    }
}

const mapStateToProps = (state, ownProps) =>{
  const contact__ = state.tasks.items.find(item => item.id === ownProps.id)
  return {...contact__}
}
const mapDispatchToProps = (dispatch, ownProps) =>(
  {
    //deleteClickTamTam: () => dispatch(tasksActions.deleteClickTyt(ownProps.contact)),
    deleteClickTamTam: () => dispatch(tasksOperations.deleteTask(ownProps.id))
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(LiOfListForm);