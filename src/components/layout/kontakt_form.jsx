import React from 'react'

const Kontakt_form = () => {
  return (
    <div>
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <label htmlFor="name">Navn</label>
                <input type="text" name="name" required />
            </div>
            <div>
                <label htmlFor="email">E-post</label>
                <input type="email" name="email" required />
            </div>
            <div>
                <label htmlFor="message">Melding</label>
                <textarea name="message" required></textarea>
            </div>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default Kontakt_form