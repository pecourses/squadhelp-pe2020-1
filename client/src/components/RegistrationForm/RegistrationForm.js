import React from 'react';
import { connect } from 'react-redux';
import { authActionRegister, clearAuth } from '../../actions/actionCreator';
import { Redirect } from 'react-router-dom';
import styles from './RegistrationForm.module.sass';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../FormInput/FormInput';
import RoleInput from '../RoleInput/RoleInput';
import AgreeTermOfServiceInput
  from '../AgreeTermOfServiceInput/AgreeTermOfServiceInput';
import CONSTANTS from '../../constants';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';
// import Error from './../Error/Error';


class RegistrationForm extends React.Component{

  componentWillUnmount () {
    this.props.authClear();
  }

  clickSubmit = (values) => {
    this.props.register({
      firstName: values.firstName,
      lastName: values.lastName,
      displayName: values.displayName,
      email: values.email,
      password: values.password,
      role: values.role,
    });
  };

  render () {
    const {handleSubmit, submitting, authClear} = this.props;
    
    const formInputClasses = {
      container: styles.inputContainer,
      input: styles.input,
      warning: styles.fieldWarning,
      notValid: styles.notValid,
      valid: styles.valid,
    };

    return (        
        <form onSubmit={ handleSubmit(this.clickSubmit) }>
          <div className={ styles.row }>
            <Field
              name='firstName'
              classes={ formInputClasses }
              component={ FormInput }
              type='text'
              label='First name'
            />
            <Field
              name='lastName'
              classes={ formInputClasses }
              component={ FormInput }
              type='text'
              label='Last name'
            />
          </div>
          <div className={ styles.row }>
            <Field
              name='displayName'
              classes={ formInputClasses }
              component={ FormInput }
              type='text'
              label='Display Name'
            />
            <Field
              name='email'
              classes={ formInputClasses }
              component={ FormInput }
              type='text'
              label='Email Address'
            />
          </div>
          <div className={ styles.row }>
            <Field
              name='password'
              classes={ formInputClasses }
              component={ FormInput }
              type='password'
              label='Password'
            />
            <Field
              name='confirmPassword'
              classes={ formInputClasses }
              component={ FormInput }
              type='password'
              label='Password confirmation'
            />
          </div>
          <div className={ styles.choseRoleContainer }>
            <Field name='role' type='radio' value={ CONSTANTS.CUSTOMER }
                   strRole='Join As a Buyer'
                   infoRole='I am looking for a Name, Logo or Tagline for my business, brand or product.'
                   component={ RoleInput } id={ CONSTANTS.CUSTOMER }/>
            <Field name='role' type='radio' value={ CONSTANTS.CREATOR }
                   strRole='Join As a Creative'
                   infoRole='I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'
                   component={ RoleInput } id={ CONSTANTS.CREATOR }/>
          </div>
          <div className={ styles.termsOfService }>
            <Field
              name='agreeOfTerms'
              classes={ {
                container: styles.termsOfService,
                warning: styles.fieldWarning,
              } }
              id='termsOfService'
              component={ AgreeTermOfServiceInput }
              type='checkbox'
            />
          </div>
          <button type='submit' disabled={ submitting }
                  className={ styles.submitContainer }>
            <span className={ styles.inscription }>Create Account</span>
          </button>
        </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    register: (data) => dispatch(authActionRegister(data)),
    authClear: () => dispatch(clearAuth()),
  }
);

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'login',
  validate: customValidator(Schems.RegistrationSchem),
  initialValues:{
      role: CONSTANTS.CUSTOMER,
    }
})(RegistrationForm));