import React, {useState, useEffect} from 'react';


const Keypad = ({ usedKeys }) => {
    // const [letters, setLetters] = useState(null)
    

    // useEffect(() => {
    //     fetch('http://localhost:3001/letters')
    //     .then( res => res.json())
    //     .then( json => {
    //        setLetters(json) 
    //     } )
    // }, [])

    const letters2 = [
        {"key": "a"},
        {"key": "b"},
        {"key": "c"},
        {"key": "d"},
        {"key": "e"},
        {"key": "f"},
        {"key": "g"},
        {"key": "h"},
        {"key": "i"},
        {"key": "j"},
        {"key": "k"},
        {"key": "l"},
        {"key": "m"},
        {"key": "n"},
        {"key": "o"},
        {"key": "p"},
        {"key": "q"},
        {"key": "r"},
        {"key": "s"},
        {"key": "t"},
        {"key": "u"},
        {"key": "v"},
        {"key": "w"},
        {"key": "x"},
        {"key": "y"},
        {"key": "z"}
      ]


  return (
    <div className='keypad'>
        {/* {letters && letters.map((l) => {

            const color = usedKeys[l.key]
            return (
                <div key={l.key} className={color}>{l.key}</div>
            )
        } )} */}

        {letters2.map((l) => {
            const  color = usedKeys[l.key]

            return (
                <div key={l.key} className={color}>{l.key}</div>
            )
        } )}


    </div>
  )
}

export default Keypad