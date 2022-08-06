import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
  if (num == "") {
    return 'Digite um número!'
  }
  const n = parseInt(num)
  if (n < 1) return -1
  if (n === 1) return 1
  return calcFatorial(n-1) * n
}

function calcParImpar(num) {
  if (num === "") {
    return 'Digite um número!'
  }
  const n = parseInt(num)
  return n % 2 === 0 ? 'Par' : 'Ímpar'
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1)
  const [fatorial, setFatorial] = useState(1)
  const [parImpar, setParImpar] = useState('')

  useEffect(function() {
    setFatorial(calcFatorial(number))
  }, [number])

  useEffect(function() {
    if (fatorial > 1000000) {
      document.title = 'Eita!!!'
    }
  }, [fatorial])

  useEffect(function() {
      setParImpar(calcParImpar(number))
  }, [number])
   
  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red">{fatorial}</span>
        </div>
        <input type="number" className="input"
          value={number} onChange={e => setNumber(e.target.value)} />
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <div>
          <span className="text">Status:</span>
          <span className='text red'>{parImpar}</span>
        </div>
      </div>
    </div>
  )
}

export default UseEffect
