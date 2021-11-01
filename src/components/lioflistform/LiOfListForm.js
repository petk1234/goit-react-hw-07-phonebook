import { Fragment, Component } from "react";
import { connect } from "react-redux";
import tasksActions from "../../redux/tasks/tasksActions";
import styles from "./styles.module.css";
class LiOfListForm extends Component{
    render(){
      let arr = this.props.contact.split(':');
      return(
        <Fragment>  
          <li className={styles.liItem}>
            <span>{arr[0]}</span>
            <span>{arr[1]}</span>
            <div className={styles.divItem}>
              <button className={styles.divItemButton} onClick={this.props.deleteClickTamTam}></button>
            </div>
          </li>
        </Fragment>
      )
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>(
  {
    deleteClickTamTam: () => dispatch(tasksActions.deleteClickTyt(ownProps.contact)),
  }
)
export default connect(null, mapDispatchToProps)(LiOfListForm);