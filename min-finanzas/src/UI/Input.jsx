import React from 'react'

export const Input = ({
    Id,
    Tipo,
    Nombre = 'Input',
    Label = '',
    Placeholder = '',
    Estilo,
    Change
}) => {

    const Base = `w-full bg-white px-3 py-1.5 mt-1.5 rounded-xl font-[nunito-sans] border border-[#9589e8] text-gray-600
    focus:outline-none focus:ring-2 focus:ring-[#9589e8] focus:border-transparent transition-all duration-500`

    const BaseLabel = `text-sm font-semibold font-[nunito-sans] text-[#6961c2]`

    return (
        <div className='w-full mb-2'>
            <label htmlFor={Id} className={BaseLabel}>
                {Label}
            </label>
            <br />
            <input
                type={Tipo}
                id={Id}
                name={Nombre}
                placeholder={Placeholder}
                className={`${Base} ${Estilo}`}
                onChange={Change}
            />
        </div>
    )
}
