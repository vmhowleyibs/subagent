import React from 'react'
function SalesOverView () {
  return (
    <div className='bg-white grid shadow-sm w-[54rem] p-4 rounded-xl'>
      <div className='gap-2 grid'>
        <h1 className='font-semibold'>Resumen de Pagos</h1>
        <p>4% more in 2023</p>
      </div>
      <div className='h-80'>
        {/* aqui iría el grafico */}
      </div>
    </div>
  )
}

export default SalesOverView
