"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// AI quotes and facts
const aiQuotes = [
  "The development of full artificial intelligence could spell the end of the human race. - Stephen Hawking",
  "AI is likely to be either the best or worst thing to happen to humanity. - Stephen Hawking",
  "The pace of progress in artificial intelligence is incredibly fast. - Elon Musk",
  "Artificial intelligence is the new electricity. - Andrew Ng",
  "If you don't have an AI strategy, you are going to die in the world that's coming. - Devin Wenig",
  "AI is a fundamental risk to the existence of human civilization. - Elon Musk",
  "Machine intelligence is the last invention that humanity will ever need to make. - Nick Bostrom",
  "By far, the greatest danger of Artificial Intelligence is that people conclude too early that they understand it. - Eliezer Yudkowsky",
  "The development of AI could be the biggest event in human history. - Stephen Hawking",
  "AI doesn't have to be evil to destroy humanity. If it's competent and pursuing a goal that differs from ours, we're toast. - Sam Harris",
  "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim. - Edsger W. Dijkstra",
  "The real question is not whether machines think but whether men do. - B. F. Skinner",
  "The real danger is not that machines will begin to think like men, but that men will begin to think like machines. - Sydney J. Harris",
  "The first ultraintelligent machine is the last invention that man need ever make. - I.J. Good",
  "AI is whatever hasn't been done yet. - Larry Tesler",
]

const aiFacts = [
  "The term 'Artificial Intelligence' was first coined by John McCarthy in 1956.",
  "The Turing Test, proposed by Alan Turing in 1950, is a test of a machine's ability to exhibit intelligent behavior.",
  "Deep Blue was the first computer to defeat a reigning world chess champion, Garry Kasparov, in 1997.",
  "AlphaGo, developed by DeepMind, defeated the world champion Go player Lee Sedol in 2016.",
  "GPT-4 has over 1.7 trillion parameters, making it one of the largest language models ever created.",
  "The first AI program was the Logic Theorist, created in 1956 by Allen Newell and Herbert A. Simon.",
  "Machine learning is a subset of AI that enables systems to learn and improve from experience.",
  "Neural networks are computing systems inspired by the biological neural networks in animal brains.",
  "The Loebner Prize is an annual competition in artificial intelligence that awards prizes to the most human-like computer programs.",
  "The term 'singularity' refers to the hypothetical point where AI surpasses human intelligence.",
  "Facial recognition AI can now identify individuals with over 99% accuracy in ideal conditions.",
  "AI systems can now generate realistic images, music, and text that are indistinguishable from human-created content.",
  "The field of AI ethics addresses concerns about privacy, bias, transparency, and the impact of AI on society.",
  "Reinforcement learning is a type of machine learning where an agent learns to make decisions by taking actions in an environment.",
  "Transfer learning allows AI models to apply knowledge learned in one domain to new, related domains.",
]

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [quote, setQuote] = useState("")
  const [fact, setFact] = useState("")
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Select random quote and fact
    const randomQuote = aiQuotes[Math.floor(Math.random() * aiQuotes.length)]
    const randomFact = aiFacts[Math.floor(Math.random() * aiFacts.length)]
    setQuote(randomQuote)
    setFact(randomFact)

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 10
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsVisible(false)
          }, 500)
          return 100
        }
        return newProgress
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="loading-logo">
        <motion.div
          className="loading-logo-inner"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="loading-logo-outer"
          animate={{
            rotate: [45, 225, 405],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="loading-quote"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="mb-4 italic">{quote}</p>
        <p className="text-sm text-muted-foreground">{fact}</p>
      </motion.div>

      <div className="loading-progress">
        <div className="loading-progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </motion.div>
  )
}

