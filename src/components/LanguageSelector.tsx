type Language = 'en' | 'de' | 'sv'

type LanguageSelectorProps = {
  language: Language
  setLanguage: (language: Language) => void
}

function LanguageSelector({
  language,
  setLanguage,
}: LanguageSelectorProps) {
  return (
    <div className="flex gap-2 text-[14px]">
      <button
        className={language === 'en' ? 'underline' : ''}
        onClick={() => setLanguage('en')}
      >
        en
      </button>

      <button
        className={language === 'de' ? 'underline' : ''}
        onClick={() => setLanguage('de')}
      >
        de
      </button>

      <button
        className={language === 'sv' ? 'underline' : ''}
        onClick={() => setLanguage('sv')}
      >
        sv
      </button>
    </div>
  )
}

export default LanguageSelector