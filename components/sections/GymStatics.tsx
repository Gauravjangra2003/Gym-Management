
const Statistics = [
    {
        value : 'Members Powered',
        number : '2.5k+'
    },
     {
        value : 'Expert Trainers',
        number : '24'
    },
     {
        value : 'Avg. Weekly Classes',
        number : '102'
    },
     {
        value : 'Transform Rate',
        number : '94%'
    },
]

const GymStatics = () => {
  return (
    <div  className="grid gap-4 rounded-3xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {
                Statistics.map((items , id) => (
                    <div key={id} className="rounded-2xl border border-white/5 bg-black/20 p-4 text-center cursor-pointer">
                         <p className="text-3xl font-semibold text-white">{items.number}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                        {items.value}
                        </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default GymStatics