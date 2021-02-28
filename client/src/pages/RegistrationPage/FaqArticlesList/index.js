import React from 'react'
import PropTypes from 'prop-types'
import FaqArticleItem from './../FaqArticleItem'
import CONSTANTS from './../../../constants';

function FaqArticlesList({faq, classes}) {

  const faqArticles = (articles) => 
    articles.map((a, index) => 
      <div key={index}>
        <FaqArticleItem header={a.header} 
                        body= {a.body} 
                        classes={{
                          headerArticle: classes.headerArticle,
                          article: classes.article    
                        }}
      />
    </div>
  )

  return (
    <div className={ classes.articlesMainContainer }>
      <div className={ classes.ColumnContainer }>
        {faqArticles(faq[0])}
      </div>
      <div className={ classes.ColumnContainer }>
        {faqArticles(faq[1])}
        <div className={classes.headerArticle}>
          I have other questions! How can I get in touch with Squadhelp?
        </div>
        <div className={ classes.article }>
          Check out our <span className={ classes.orangeSpan }>FAQs</span> or
          send us a <span
          className={ classes.orangeSpan }>message</span>. For assistance
          with launching a contest,
          you can also call us at {CONSTANTS.CONTACT_US.PHONE} or schedule a <span
          className={ classes.orangeSpan }>Branding Consultation</span>
        </div>
      </div>
    </div>
  )
}

FaqArticlesList.propTypes = {

}

export default FaqArticlesList
