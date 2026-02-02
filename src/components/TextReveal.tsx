import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './TextReveal.module.css'

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function TextReveal({
  text,
  className = '',
  delay = 0,
  as: Component = 'span',
}: TextRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 })
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShouldAnimate(true), delay)
      return () => clearTimeout(timer)
    }
  }, [isVisible, delay])

  const words = text.split(' ')

  return (
    <div ref={ref} className={styles.container}>
      <Component className={className}>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className={styles.word}>
            {word.split('').map((char, charIndex) => (
              <span
                key={charIndex}
                className={`${styles.char} ${shouldAnimate ? styles.visible : ''}`}
                style={{
                  transitionDelay: `${wordIndex * 80 + charIndex * 30}ms`,
                }}
              >
                {char}
              </span>
            ))}
            {wordIndex < words.length - 1 && <span className={styles.space}>&nbsp;</span>}
          </span>
        ))}
      </Component>
    </div>
  )
}
