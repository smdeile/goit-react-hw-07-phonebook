import React, { Component } from 'react';
import СontactForm from './СontactForm/СontactForm';
import Wrapper from './Wrapper/Wrapper';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import TransitionRight from './TransitionCss/TransitionRight.module.css';
import styles from './Wrapper/Wrapper.module.css';
import * as postOperations from '../redux/phonebook/postOperations';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchStart();
  }
  render() {
    // axios.get('http://localhost:3000/contacts').then(console.log);

    const { contacts } = this.props;
    const lengthCont = contacts.length > 1;
    return (
      <div className={styles.app}>
        <Wrapper tittle="Phonebook"></Wrapper>
        <СontactForm />

        <CSSTransition
          in={lengthCont}
          timeout={250}
          unmountOnExit
          classNames={TransitionRight}
        >
          <Filter />
        </CSSTransition>
        {<ContactsList state={this.state} deleteContact={this.deleteContact} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
});
const mapDispatchToProps = {
  fetchStart: postOperations.asyncActionCreator,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
