import { Component } from "react";
import { connect } from "react-redux";
import contactform from "./contactform.module.css";
import tasksActions from "../../redux/tasks/tasksActions";
class ContactForm extends Component{
    state={
        name:"",
        number:"",
    }

    nameInputChange = e =>{
        this.setState( () =>({
          name: e.target.value,
        }))
      }
      
    numberInputChange = e =>{
        this.setState( () =>({
          number: e.target.value,
        }))
    }

    handleClickkk = e =>{
        console.log('It is me');
        this.props.onClickkk(this.state.name, this.state.number);
       // this.props.onClickkk();
        this.setState(()=>({
            name: '',
            number: ''
        }
        ))
    }

    render(){
      let{name, number} = this.state;
      return(
      <div className={contactform.divContainer}>
        <p className={contactform.pElement}>Name</p>
        <input
          type="text"
          onChange={this.nameInputChange}
          name="name"
          value={name}
          className={contactform.inputName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <p className={contactform.pElement}>Number</p>
        <input
          type="tel"
          onChange={this.numberInputChange}
          name="number"
          value={number}
          className={contactform.inputNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button onClick={this.handleClickkk}
          className={contactform.buttonElement}
        >
            Add contact
        </button>
      </div>)
    }
}

const mapDispatchToProps = dispatch =>{
 return{ 
   onClickkk: (name, number) => dispatch(tasksActions.handleClick(name,number)),
 }
}
export default connect(null, mapDispatchToProps )(ContactForm);