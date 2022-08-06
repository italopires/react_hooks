import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function(s1, s2) {
  const size = s1.length > s2.length ? s1.length : s2.length
  let result = ""

  for(let i=0; i<size; i++) {
    if(s1[i] && s2[i]) {
      result += s1[i] + s2[i]
    } else if(s1[i]) {
      result += s1[i]
    } else {
      result += s2[i]
    }
  }

  return result
}

const UseRef = (props) => {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const count = useRef(0)
  const myInput1 = useRef(null)
  const myInput2 = useRef(null)

  console.log(myInput1.current)

  useEffect(function() {
    count.current++
    myInput2.current.focus()
  }, [value1])

  useEffect(function() {
    count.current++
    myInput1.current.focus()
  }, [value2])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input ref={myInput1} type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)} />
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <input type="text" className="input" 
          ref={myInput2} value={value2} onChange={e => setValue2(e.target.value)} />
      </div>
    </div>
  )
}

export default UseRef
