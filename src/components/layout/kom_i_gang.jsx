import React from 'react'
import kontakt_form from './kontakt_form'

const Kom_i_gang = () => {
  return (
    <div>
        <div>
            <div><h1>Kom i ang</h1></div>
            <div><p>Er du interessert i å bli en del av felleskapet eller har du noen spørsmål? Fyll ut kontakskjemaet og så kontakter vi deg fortløpende.</p></div>
            <div>
                <div><Kontakt_form /></div>
                <div><button>Ta kontakt</button></div>
            </div>
        </div>
        <div>
            <img src="Møte-rom.png" alt="" />
        </div>
    </div>
  )
}

export default Kom_i_gang