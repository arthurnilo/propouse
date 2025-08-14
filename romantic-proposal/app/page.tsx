"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ProposalPage() {
  const [showLetter, setShowLetter] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer1 = setTimeout(() => setShowLetter(true), 1000)
    const timer2 = setTimeout(() => setShowButton(true), 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const handleYes = () => {
    alert("❤️ Que alegria! Vamos começar nossa jornada juntos! ❤️")
    window.open("https://youtu.be/2Vv-BfVoq4g?si=7bY4t9I40Q5uIqHX&t=21", "_blank")
  }

  const moveNoButton = () => {
    const maxX = window.innerWidth - 200 // Largura aproximada do botão
    const maxY = window.innerHeight - 100 // Altura aproximada do botão
    const newX = Math.random() * maxX
    const newY = Math.random() * maxY
    setNoButtonPosition({ x: newX, y: newY })
  }

  const createHearts = () => {
    return [...Array(20)].map((_, i) => {
      const isOutline = Math.random() > 0.5
      const size = Math.random() * 40 + 20 // Entre 20px e 60px
      const opacity = Math.random() * 0.4 + 0.3 // Entre 0.3 e 0.7

      return (
        <div
          key={i}
          className={`absolute floating-heart ${isOutline ? "text-rose-400" : "text-pink-300"}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            fontSize: `${size}px`,
            opacity: opacity,
            animationDuration: `${Math.random() * 4 + 6}s`, // Entre 6s e 10s
          }}
        >
          {isOutline ? "♡" : "♥"}
        </div>
      )
    })
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Background Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none">{createHearts()}</div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          {/* Title */}
          <div className="text-center mb-12 fade-in-up"></div>

          {/* Letter Card */}
          {showLetter && (
            <Card className="letter-paper border-0 p-8 md:p-12 mb-8 fade-in-up">
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-rose-600 mb-2">Para Saruela </h2>
                <div className="w-16 h-0.5 bg-rose-300 mx-auto"></div>
              </div>

              <div className="text-center mb-6">
                <div className="text-base md:text-lg italic text-slate-500 font-light">
                  "O amor tudo sofre, tudo crê, tudo espera, tudo suporta."
                  <br />
                  <span className="text-base md:text-lg italic text-slate-500 font-light">- Coríntios 13:7</span>
                </div>
              </div>

              <div className="space-y-4 font-sans text-slate-700 leading-relaxed">
                <p className="text-lg md:text-xl">Meu amor,</p>

                <p className="text-base md:text-lg text-left">
                  É impossível ler este texto e não lembrar de você. Tudo o que vivemos é muito bem representado por um
                  versículo. Passamos por muitas coisas até aqui, coisas boas, ruins, momentos felizes, tristes. Mas
                  tudo sempre caminhou para estarmos juntos, e agora, mais do que nunca, na presença de Deus. Sou muito
                  feliz com o que temos, e com tudo que ainda vamos conquistar.
                </p>

                <p className="text-base md:text-lg">
                  É tão bom saber que encontrei o que eu queria e precisava, em uma pessoa só. Você tem a beleza, o
                  caráter, o temor e com certeza, a esquisitidade que eu procurava. Eu amo saber que posso contar com
                  você e que pra estarmos felizes, basta nós!
                </p>

                <p className="text-base md:text-lg">
                  Você me faz uma pessoa melhor todos os dias e quero que isso dure até o resto da minha vida. Mas
                  agora... Oficialmente!
                </p>

                <div className="text-right mt-8">
                  <p className="font-sans text-slate-600 italic">Com todo meu amor,</p>
                  <p className="font-serif text-rose-600 font-semibold text-lg mt-2">Arthur Nilo</p>
                </div>

                <p className="text-lg md:text-xl font-medium text-rose-600 text-center mt-8">
                  Você quer namorar comigo?
                </p>
              </div>

              {/* Response Buttons */}
              {showButton && (
                <div className="text-center fade-in-up">
                  <div className="flex justify-center items-center gap-6">
                    <Button
                      onClick={handleYes}
                      className="bg-rose-600 hover:bg-rose-700 text-white font-sans font-semibold px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pulse-heart"
                    >
                      💕 Sim, eu aceito! 💕
                    </Button>
                    <Button
                      onClick={moveNoButton}
                      className="bg-gray-400 hover:bg-gray-500 text-white font-sans font-semibold px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-500"
                      style={{
                        transform:
                          noButtonPosition.x > 0 && noButtonPosition.y > 0
                            ? `translate(${noButtonPosition.x - window.innerWidth / 2}px, ${noButtonPosition.y - window.innerHeight / 2}px)`
                            : "none",
                      }}
                    >
                      Não
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-8 text-rose-400 text-8xl opacity-40 floating-heart">♡</div>
      <div
        className="absolute top-8 right-8 text-pink-400 text-6xl opacity-50 floating-heart"
        style={{ animationDelay: "2s" }}
      >
        ♥
      </div>
      <div
        className="absolute bottom-20 right-12 text-rose-300 text-7xl opacity-35 floating-heart"
        style={{ animationDelay: "4s" }}
      >
        ♡
      </div>
    </div>
  )
}
