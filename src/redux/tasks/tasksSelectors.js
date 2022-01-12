import { createElement } from "react";
import { createSelector } from "reselect";
const getLoading = state => state.tasks.loading;
const getFilter = state => state.tasks.filter;
const getContacts = state =>{
  console.log('it is getContacts');
  return state.tasks.items;
}
// const getContacts = createSelector([getContacts], contacts =>{
//     return 
// })
// const getFilterContacts = state =>{
//     let contacts = getContacts(state);
//     let filter = getFilter(state);
//     if(filter === ''){
//         return contacts;
//     }
//     else{
//         return contacts.filter( contact => contact.nazva.toLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1)
//     }
//     //state.tasks.items;
// }
const getFilterContacts = createSelector([getContacts, getFilter], (contacts, filter)=>{
    console.log('it is getFilterContacts');
    if(filter === ''){
                return contacts;
            }
            else{
                return contacts.filter( contact => contact.nazva.toLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1)
            }
})
// const getContactInLi = (state, ownProps) =>{
//     console.log('it is getContactInLi');
//     return state.tasks.items.find(item => item.id === ownProps.id);
// }
const getContactInLi = createSelector([(state, ownProps) => ownProps, getContacts], (ownProps, items)=>{
    console.log('it is getContactInLi');
    return items.find(item => item.id === ownProps.id);
});
export default{
    getLoading,
    getFilter,
    getContacts,
    getContactInLi,
    getFilterContacts
}