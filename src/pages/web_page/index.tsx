import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"

const webPage = () => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <div >
      webPage
    </div >
  )
}

export default webPage
