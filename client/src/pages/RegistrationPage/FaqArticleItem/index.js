import React from 'react'
import PropTypes from 'prop-types'

function FaqArticleItem({header, body, classes}) {
  return (
    <article>
      <div className={classes.headerArticle}>
        {header}
      </div>
      <div className={classes.article}>
        {body}
      </div>
    </article>
  )
}

FaqArticleItem.propTypes = {

}

export default FaqArticleItem
