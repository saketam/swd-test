import { Button, ConfigProvider } from "antd"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import '../app/styles/index.scss'

const Home = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const handleClick = (url: string) => () => { router.push(url) }

  return (
    <div className="homepageWrapper">
      <Button className="homepageButton" onClick={handleClick('web_page')}>
        <div className="textBtton">
          <div>
            {t('test1')}
          </div>

          <div>
            {t('/web_page')}
          </div>
        </div>
      </Button>

      <Button className="homepageButton" onClick={handleClick('form_page')}>
        <div className="textBtton">
          <div>
            {t('test2')}
          </div>

          <div>
            {t('/form_page')}
          </div>
        </div>
      </Button>
    </div >
  )
}

export default Home
