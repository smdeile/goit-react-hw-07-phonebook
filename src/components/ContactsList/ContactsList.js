import React, { Component } from 'react';
import Item from './Item';
import styles from './CL.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TransitionStyles from '../TransitionCss/Transition.module.css';
import { connect } from 'react-redux';
import { deleteSuccess } from '../../redux/phonebook/phonebookActions';
import { getContactBySearch } from '../../redux/selectors';

class ContactsList extends Component {
  deleteContact = id => this.props.onDelete(id);

  render() {
    const { contactsFiltered } = this.props;

    return (
      <TransitionGroup component="ul" className={styles.list}>
        {contactsFiltered.map(el => (
          <CSSTransition
            key={el.id}
            timeout={250}
            unmountOnExit
            classNames={TransitionStyles}
          >
            <Item element={el} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

const mapStateToProps = state => ({
  contactsFiltered: getContactBySearch(state),
});
const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteSuccess(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
