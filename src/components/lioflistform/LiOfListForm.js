import { Fragment, Component } from "react";
import { connect } from "react-redux";
import tasksOperations from "../../redux/tasks/tasksOperations";
import styles from "./styles.module.css";
import tasksSelectors from "../../redux/tasks/tasksSelectors";
class LiOfListForm extends Component{
    render(){
      console.log('rerender');
      let {id, nazva, deleteClickTamTam} = this.props;
      console.log(this.props);
      if(nazva !== undefined){
      let arr = nazva.split(':');
      console.log(nazva);
      return(
        <Fragment>  
          <li key ={id} className={styles.liItem}>
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
        console.log('piy pay');
        return(
          <h1>Contact is deleted</h1>
        )
      }
    }
}

const mapStateToProps = (state, ownProps) =>{
  const contact__ = tasksSelectors.getContactInLi(state, ownProps);
  return {...contact__}
}
const mapDispatchToProps = (dispatch, ownProps) =>(
  {
    //deleteClickTamTam: () => dispatch(tasksActions.deleteClickTyt(ownProps.contact)),
    deleteClickTamTam: () => dispatch(tasksOperations.deleteTask(ownProps.id))
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(LiOfListForm);