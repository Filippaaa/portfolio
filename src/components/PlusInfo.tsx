import * as Phosphor from '@phosphor-icons/react'

type BuildInfoProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

function BuildInfo({ open, setOpen }: BuildInfoProps) {
  return (
    <div className="fixed right-5 bottom-5 flex flex-col items-end">
      <div
        className={`mb-2 w-[300px] text-right overflow-hidden text-sm transition-all duration-300 ease-in-out ${
          open ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <span className="text-[14px]">
        Built with Figma · VS Code · React · TypeScript · Tailwind CSS · Vite · Inter · Phosphor · Git · GitHub
        </span>
      </div>

      <button
        className="flex items-center justify-center"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Hide tools used' : 'Show tools used'}
      >
        {open ? (
          <Phosphor.Minus size={16} />
        ) : (
          <Phosphor.Plus size={16} />
        )}
      </button>
    </div>
  )
}

export default BuildInfo