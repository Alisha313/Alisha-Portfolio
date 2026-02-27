import { useState, useRef, useEffect, useCallback } from 'react'
import { knowledgeBase, fallbacks, quickReplies, BOT_NAME } from '../data/chatbotData'

const TYPING_DELAY_MIN = 400
const TYPING_DELAY_MAX = 1200

function getResponse(input) {
  const cleaned = input.trim().toLowerCase()
  let bestMatch = null
  let bestScore = 0

  for (const [key, topic] of Object.entries(knowledgeBase)) {
    for (const pattern of topic.patterns) {
      if (pattern.test(cleaned)) {
        const matchLen = cleaned.match(pattern)?.[0]?.length || 0
        const score = matchLen + (key.length > 3 ? 10 : 0)
        if (score > bestScore) {
          bestScore = score
          bestMatch = topic
        }
      }
    }
  }

  if (bestMatch) {
    return bestMatch.responses[Math.floor(Math.random() * bestMatch.responses.length)]
  }
  return fallbacks[Math.floor(Math.random() * fallbacks.length)]
}

function formatMessage(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>')
    .replace(/• /g, '<span class="chatbot-bullet">•</span> ')
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const isFirstOpen = useRef(true)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, scrollToBottom])

  const addBotMessage = useCallback((text) => {
    setIsTyping(true)
    const delay = TYPING_DELAY_MIN + Math.random() * (TYPING_DELAY_MAX - TYPING_DELAY_MIN)
    setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [...prev, { text, sender: 'bot' }])
    }, delay)
  }, [])

  const handleUserInput = useCallback(
    (text) => {
      if (!text.trim()) return
      setMessages((prev) => [...prev, { text, sender: 'user' }])
      setInputValue('')
      const response = getResponse(text)
      addBotMessage(response)
    },
    [addBotMessage]
  )

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => {
      const willOpen = !prev
      if (willOpen && isFirstOpen.current) {
        isFirstOpen.current = false
        setTimeout(() => {
          addBotMessage(
            "Hi! I'm Alisha's AI assistant. Ask me anything about her skills, experience, or projects — or try a quick reply below!"
          )
        }, 300)
      }
      if (willOpen) {
        setTimeout(() => inputRef.current?.focus(), 400)
      }
      return willOpen
    })
  }, [addBotMessage])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) toggleChat()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [isOpen, toggleChat])

  const handleSubmit = (e) => {
    e.preventDefault()
    handleUserInput(inputValue)
    inputRef.current?.focus()
  }

  return (
    <div id="chatbotWrapper">
      {/* Toggle Button */}
      <button
        className={`chatbot-toggle${isOpen ? ' chatbot-toggle-active' : ''}`}
        onClick={toggleChat}
        aria-label="Open chat assistant"
      >
        <span className="chatbot-toggle-icon">
          <i className="ph ph-chat-teardrop-dots" />
        </span>
        <span className="chatbot-toggle-close">
          <i className="ph ph-x" />
        </span>
        <span className="chatbot-pulse" />
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window${isOpen ? ' chatbot-window-open' : ''}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <img src="/assets/alisha-photo.png" alt="Alisha" className="chatbot-avatar-img" />
            </div>
            <div>
              <span className="chatbot-header-name">{BOT_NAME}</span>
              <span className="chatbot-header-status">
                <span className="chatbot-status-dot" /> Online
              </span>
            </div>
          </div>
          <button className="chatbot-close-btn" onClick={toggleChat} aria-label="Close chat">
            <i className="ph ph-x" />
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chatbot-msg chatbot-msg-${msg.sender} chatbot-msg-visible`}>
              {msg.sender === 'bot' && (
                <div className="chatbot-msg-avatar">
                  <i className="ph-fill ph-robot" />
                </div>
              )}
              <div
                className="chatbot-msg-content"
                dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
              />
            </div>
          ))}

          {isTyping && (
            <div className="chatbot-msg chatbot-msg-bot chatbot-typing chatbot-msg-visible">
              <div className="chatbot-msg-avatar">
                <i className="ph-fill ph-robot" />
              </div>
              <div className="chatbot-msg-content">
                <div className="chatbot-dots">
                  <span /><span /><span />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chatbot-input-wrap">
          <div className="chatbot-quick-replies">
            {quickReplies.map((qr) => (
              <button
                key={qr.label}
                type="button"
                className="chatbot-chip"
                onClick={() => handleUserInput(qr.text)}
              >
                {qr.label}
              </button>
            ))}
          </div>
          <form className="chatbot-input-form" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="chatbot-input"
              placeholder="Ask me about Alisha..."
              autoComplete="off"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="chatbot-send" aria-label="Send message">
              <i className="ph-fill ph-paper-plane-tilt" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
