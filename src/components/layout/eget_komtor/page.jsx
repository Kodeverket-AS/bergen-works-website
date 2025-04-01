import React from 'react'

const Eget_Kontor = () => {
  return (
    <div>
        <div className='flex flex-col w-full md:flex-row gap-5 mb-5'>
            <div className='bg-white text-black p-5 border-2 border-black rounded-3xl shadow-2xl md:w-3/5 '>
                <h1>Eget kontor</h1>
                <p>Ta kontakt for pris</p>
                <p>Dette inkluderer følgende: Eget kontor i kontorlandskap, nytraktet kaffe, tilgang til møterom, rask wifi, rengjøring, strøm, telefonbåser samt invitasjon til alle arrangementer i Bergen.Works regi</p>
            </div>
            <div className=' flex bg-white rounded-3xl w-full place-content-center'>
                <img className='h-60' src="Eget_kontor_logo.png" alt="" />
            </div>
        </div>

        <div className='flex flex-col w-full md:flex-row gap-5 mb-5'>
            <div className=' flex bg-white rounded-3xl w-full place-content-center'>
                <img className='h-60' src="FastPlass_logo.png" alt="" />
            </div>
            <div className='bg-white text-black p-5 border-2 border-black rounded-3xl shadow-2xl md:w-3/5 '>
                <h1>Fast plass</h1>
                <p>3990,-/mnd (eks.MVA)</p>
                <p>Dette inkluderer følgende: Fast plass i åpent kontorlandskap, nytraktet kaffe, tilgang til møterom, rask wifi, rengjøring, strøm, telefonbåser samt invitasjon til alle arrangementer i Bergen.Works regi.</p>
            </div>            
        </div>

        <div className='flex flex-col w-full md:flex-row gap-5 mb-5'>
            <div className='bg-white text-black p-5 border-2 border-black rounded-3xl shadow-2xl md:w-3/5 '>
                <h1>Åpen plass</h1>
                <p>3200,-/MND (EKS.MVA)</p>
                <p>Dette inkluderer følgende: Tilgang til ledig plass i åpent kontorlandskap, nytraktet kaffe, tilgang til møterom, rask wifi, rengjøring, strøm, telefonbåser samt invitasjon til alle arrangementer i Bergen.Works regi.</p>
            </div>
            <div className=' flex bg-white rounded-3xl w-full place-content-center'>
                <img className='h-60' src="AApenPlass_logo.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Eget_Kontor