import { Layout, Menu } from 'antd'
import { ReactNode } from "react"
import { useTranslation } from "react-i18next"
const { Header, Content } = Layout
import './style.scss'

type DefaultLayoutProps = { children: ReactNode }

const AppLayout = ({ children }: DefaultLayoutProps) => {
  const { t, i18n } = useTranslation()

  const handleChangeLanguage = (lang: string) => () => {
    i18n.changeLanguage(lang)
  }

  return (
    <Layout>
      <Header className="header">
        {t('header')}

        {/* <Menu /> */}

        <button onClick={handleChangeLanguage('en')}>
          en
        </button>
        <button onClick={handleChangeLanguage('th')}>
          th
        </button>
      </Header>

      <Content>
        {children}
      </Content>
    </Layout>
  )
}

export default AppLayout
