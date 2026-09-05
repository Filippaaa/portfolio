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
    <div className="flex gap-2 text-sm">
      <button
        className={language === 'en' ? 'underline' : ''}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>

      <button
        className={language === 'de' ? 'underline' : ''}
        onClick={() => setLanguage('de')}
      >
        DE
      </button>

      <button
        className={language === 'sv' ? 'underline' : ''}
        onClick={() => setLanguage('sv')}
      >
        SV
      </button>
    </div>
  )
}

export default LanguageSelector