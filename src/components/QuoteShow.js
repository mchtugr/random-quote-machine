import React, { Component } from 'react'
import { FaQuoteLeft, FaTwitterSquare } from 'react-icons/fa'

import { colors, randomQuotes } from './data'

class QuoteShow extends Component {
  state = { index: 0 }

  componentDidUpdate() {
    const randomIndex = Math.floor(Math.random() * colors.length)
    const color = colors[randomIndex]
    document.body.style.backgroundColor = color
    document.querySelector('#quote-box').style.color = color
    document.querySelector('.icons').style.color = color
    document.querySelector('#new-quote').style.backgroundColor = color
  }

  getRandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * randomQuotes.length)
    this.setState({ index: randomNumber })
  }

  render() {
    const { text, author } = randomQuotes[this.state.index]
    const encodedText = encodeURIComponent(text)
    const encodedAuthor = encodeURIComponent(author)
    const url = `https://twitter.com/intent/tweet?hashtags=quotes&text='${encodedText}'-${encodedAuthor}`

    return (
      <div className='quote-container'>
        <div id='quote-box'>
          <blockquote id='text' className='blockquote'>
            <span className='quote-icon'>
              <FaQuoteLeft />
            </span>
            {text}
          </blockquote>
          <figcaption id='author' className='blockquote-footer'>
            {author}
          </figcaption>
          <div className='buttons-container'>
            <div id='tweet-quote-container'>
              <a href={url} target='_blank' id='tweet-quote'>
                <span className='icons'>
                  <FaTwitterSquare size='3rem' />
                </span>
              </a>
            </div>
            <div className='btn-container'>
              <button
                id='new-quote'
                onClick={this.getRandomQuote}
                className='btn'
              >
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QuoteShow
