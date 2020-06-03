import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeleteContact from './DeleteContact';
import styles from './CL.module.css';
import { asyncActionDelete } from '../../redux/phonebook/contactsOperations';

class Item extends Component {
  deleteContact = () => {
    const { element, onDelete } = this.props;
    onDelete(element.id);
  };

  render() {
    const el = this.props.element;
    return (
      <>
        <li className={styles.item}>
          <p className={styles.name}>{el.name}</p>
          <p className={styles.number}>{el.number}</p>
          <DeleteContact deleteContact={this.deleteContact} id={el.id} />
        </li>
      </>
    );
  }
}
const mapDispatchToProps = {
  onDelete: id => asyncActionDelete(id),
};
export default connect(null, mapDispatchToProps)(Item);
