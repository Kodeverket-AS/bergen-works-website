export default function Membership() {
  return <main>
    <section className="flex flex-col md:flex-row gap-5">      
        <img className="md:w-2/5" src="incubator_Logo.png" alt="" />      
      
      <div className="flex flex-col md:w-3/5 bg-black text-white rounded-3xl pt-30 px-10">
        <h1 className="text-5xl pb-5">Inkubator</h1>
        <p>
          Har du en Gründer i magen? Bergen.Works utvikler et nytt inkubasjonskonsept for de som ønsker å realisere dine drømmer og idéer! Ta turen innom oss for en uformell prat og en kopp kaffe! Bergen.Works er startet av gründere, for gründere; hos oss finner du kompetanse innen ethvert felt! Kom for kontorplass, bli for miljøet.
        </p>
        <button className="bg-white mt-15 text-black w-[150] h-[45] rounded-md my-5">Ta kontakt</button>
      </div>
    </section>
  </main>;
}
