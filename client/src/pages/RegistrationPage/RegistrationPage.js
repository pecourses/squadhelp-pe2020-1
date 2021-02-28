import React from 'react';
import Logo from '../../components/Logo';
import RegistrationForm
  from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearErrorSignUpAndLogin, clearAuth } from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import faq from './faq.json'
import FaqArticlesList from './FaqArticlesList'
// import Error from './../../components/Error/Error';

const RegistrationPage = (props) => {
  //const {authClear, auth: { error }} = props;
  props.clearError();

  const changeRoute = () => {
    props.history.replace('/');
  };

  const articlesListClasses = {
    articlesMainContainer: styles.articlesMainContainer,
    ColumnContainer: styles.ColumnContainer,
    headerArticle: styles.headerArticle, 
    article: styles.article,
    orangeSpan: styles.orangeSpan
  }

  return (
    <div className={ styles.signUpPage }>
      <div className={ styles.signUpContainer }>
        <div className={ styles.headerSignUpPage }>
          <Logo src={ `${ CONSTANTS.STATIC_IMAGES_PATH }logo.png` }/>
          <div className={ styles.linkLoginContainer }>
            <Link to='/login'
                  style={ {textDecoration: 'none'} }><span>Login</span></Link>
          </div>
        </div>
        <RegistrationForm changeRoute={ changeRoute }/>
      </div>
      <div className={ styles.footer }>
        <FaqArticlesList faq={faq} 
                         classes={articlesListClasses}
        />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => dispatch(clearErrorSignUpAndLogin()),
//    authClear: () => dispatch(clearAuth()),
  };
};

export default connect(null, mapDispatchToProps)(RegistrationPage);