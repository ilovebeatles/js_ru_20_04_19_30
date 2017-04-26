import React from 'react'
import Article from './Article'

export default function ArticleList({ articles, normalizedComments }) {
    const elements = articles.map(article => <li key={article.id}><Article article={article} comments={normalizedComments}/></li>)
    return (
        <ul>
            {elements}
        </ul>
    )
}