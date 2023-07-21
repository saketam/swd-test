import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type DefaultLayoutProps = { children: ReactNode }

const Layout = ({ children }: DefaultLayoutProps) => {
  const { t, i18n } = useTranslation()

  const handleChangeLanguage = (lang: string) => () => {
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <div>
        {t('header')}
        <br />

        <button onClick={handleChangeLanguage('en')}>
          en
        </button>
        <button onClick={handleChangeLanguage('th')}>
          th
        </button>

        <br />
        <br />

        {children}
      </div>
    </>
  )
}

export default Layout
