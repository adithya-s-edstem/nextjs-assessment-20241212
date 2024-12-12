"use client"

import Image from 'next/image'

type ButtonProps = {
  onClick: () => void,
  label: string,
  disabled?: boolean,
  icon?: any
}

export default function Button({ onClick, label, disabled, icon }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={disabled}
      className="py-2 px-4 bg-slate-100 shadow-sm rounded-lg border border-slate-200 transition hover:bg-slate-200 hover:border-slate-300 hover:shadow-md font-semibold flex items-center gap-2"
    >
      <Image
        src={icon}
        alt='label'
        width="24"
      />
      {label}
    </button>
  )
}