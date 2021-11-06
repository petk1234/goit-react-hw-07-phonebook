import { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "./components/contactform/ContactForm";
import ListForm from "./components/listform/ListForm";
import tasksActions from "./redux/tasks/tasksActions";
import { CSSTransition } from "react-transition-group";
import transition from "./transitionNav.module.css";
import styles from "./styles.module.css";
import tasksOperations from "./redux/tasks/tasksOperations";
class App extends Component{
  // state={
  //   contacts:[],
  //   filter:'',
  // }

  componentDidMount(){
    // let localStorageInput = localStorage.getItem('contacts');
    // console.log('start');
    // if(localStorageInput !== null){
    //   this.props.getInfoFromLocStor(localStorageInput);
    // }
    this.props.getTasks();
  }

  render(){
    console.log('App');
    return (
      <>
        <CSSTransition in={true} appear={true} timeout={500} classNames={transition}>
          <h1 className={styles.pItem}>PhoneBook</h1>
        </CSSTransition>
        
        <ContactForm />
         <div className={styles.divContainer}>
           <p className={styles.pFilter}>Find contact by filter</p>
           <input className={styles.inputFilter} onChange={e => this.props.handleChange(e.target.value)}></input>
         </div>
        {this.props.isLoading === true 
        ? (<h1>LOADING.....</h1>)
        :( 
        <ListForm
          // filter={this.props.filter}
          // contacts={this.props.contacts}
          // deleteClickTam={this.deleteClickTyt}
        />
        )
        }
      </>
    );
  }
}
const mapStateToProps = (state) =>{
  return{
      isLoading: state.tasks.loading,
  }
}
const mapDispatchToProps = dispatch =>{
 return {
  //  getInfoFromLocStor: localStorageInput => dispatch(tasksActions.getFromLocStor(localStorageInput)),
   handleChange: val => dispatch(tasksActions.changeFilter(val)),
   getTasks: () => dispatch(tasksOperations.getTask()),
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);