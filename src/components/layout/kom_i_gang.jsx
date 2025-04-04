import React from 'react'

const Kom_i_gang = () => {
  return (
    <div>
        <div className='flex flex-col mt-5 gap-5 md:flex-row'>
            <div className='flex flex-col gap-3'>
                <div className='gap-3 ml-5'>
                    <h1 className='text-4xl'>Kom i ang</h1>
                    <p className='text-2xl'>Er du interessert i å bli en del av felleskapet eller har du noen spørsmål? Fyll ut kontakskjemaet og så kontakter vi deg fortløpende.</p>
                </div>
                <div className='flex flex-col gap-3 ml-5'>
                    <h1>Kontakt form</h1>
                </div>
                
            </div>
            <div>
                <img className='' src="Møte-rom.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Kom_i_gang