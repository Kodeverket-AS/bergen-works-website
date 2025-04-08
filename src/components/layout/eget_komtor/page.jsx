import React from 'react'

const Eget_Kontor = () => {
  return (
    <div>
        <div className='flex flex-col-reverse w-full md:flex-row gap-5 mb-5'>
            <div className='bg-white text-black p-5  rounded-3xl shadow-2xl md:w-3/5 '>
                <h1 className='text-3xl font-bold'>Eget kontor</h1>
                <p className='text-2xl pt-3'>Ta kontakt for pris</p>
                <p className='mt-1'>Dette inkluderer følgende: Eget kontor i kontorlandskap, nytraktet kaffe, tilgang til møterom, rask wifi, rengjøring, strøm, telefonbåser samt invitasjon til alle arrangementer i Bergen.Works regi</p>
            </div>
            <div className=' flex shadow-2xl bg-white rounded-3xl w-full place-content-center'>
                <img className='h-60' src="Eget_kontor_logo.png" alt="" />
            </div>
        </div>

        <div className='flex flex-col w-full md:flex-row gap-5 mb-5'>
            <div className=' flex shadow-2xl bg-white rounded-3xl w-full place-content-center'>
                <img className='h-60' src="FastPlass_logo.png" alt="" />
            </div>
            <div className='bg-white text-black p-5  rounded-3xl shadow-2xl md:w-3/5 '>
                <h1 className='text-3xl font-bold'>Fast plass</h1>
                <p className='text-2xl pt-3'>3990,-/mnd (eks.MVA)</p>
                <p className='mt-1'>Dette inkluderer følgende: Fast plass i åpent kontorlandskap, nytraktet kaffe, tilgang til møterom, rask wifi, rengjøring, strøm, telefonbåser samt invitasjon til alle arrangementer i Bergen.Works regi.</p>
            </div>            
        </div>

        <div className='flex flex-col-reverse w-full md:flex-row gap-5 mb-5'>
            <div className='bg-white text-black p-5  rounded-3xl shadow-2xl md:w-3/5 '>
                <h1 className='text-3xl font-bold'>Åpen plass</h1>
                <p className='text-2xl pt-3'>3200,-/MND (EKS.MVA)</p>
                <p className='mt-1'>Dette inkluderer følgende: Tilgang til ledig plass i åpent kontorlandskap, nytraktet kaffe, tilgang til møterom, rask wifi, rengjøring, strøm, telefonbåser samt invitasjon til alle arrangementer i Bergen.Works regi.</p>
            </div>
            <div className=' flex shadow-2xl bg-white rounded-3xl w-full place-content-center'>
                <img className='h-60' src="AApenPlass_logo.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Eget_Kontor