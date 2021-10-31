import { Component, Fragment } from "react";
import ContactForm from "./components/contactform/ContactForm";
import ListForm from "./components/listform/ListForm";
import { CSSTransition } from "react-transition-group";
import transition from "./transitionNav.module.css";
import styles from "./styles.module.css";
export default class App extends Component{
  state={
    contacts:[],
    filter:'',
  }

  componentDidMount(){
    let localStorageInput = localStorage.getItem('contacts');
    
    if(localStorageInput !== null){
      this.setState( prevState => (
        {contacts: prevState.contacts.concat(JSON.parse(localStorageInput))}
        )
      )
    }
  }
  
  componentDidUpdate(prevProps, prevState){
    if(prevState.contacts !== this.state.contacts){  
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleClick = (name, number) =>{
    let indexer = 0;
    this.setState( prevState =>{
      console.log('is in');
      prevState.contacts.forEach( contact =>{
        if(contact === `${name}:${number}`){
          indexer = -1;
        }
      })
      if(indexer === 0){
        return {contacts: prevState.contacts.concat(`${name}:${number}`)}
      }
      })
  }

  handleChange = e =>{
    this.setState(()=>({
      filter: e.target.value,}
    ))
  }

  deleteClickTyt = (key) =>{
    this.setState(prevState =>({
      contacts: prevState.contacts.filter(contact => contact!==key),
    }))
  }

  render(){
    let {contacts, filter} = this.state;
    return (
      <>
        <CSSTransition in={true} appear={true} timeout={500} classNames={transition}>
          <h1 className={styles.pItem}>PhoneBook</h1>
        </CSSTransition>
        <ContactForm 
            onClickkk={this.handleClick}
        />
        <div className={styles.divContainer}>
          <p className={styles.pFilter}>Find contact by filter</p>
          <input className={styles.inputFilter} onChange={this.handleChange}></input>
        </div>
        <ListForm 
          filter={filter}
          contacts={contacts}
          deleteClickTam={this.deleteClickTyt}
        />
      </>
    );
  }
}

