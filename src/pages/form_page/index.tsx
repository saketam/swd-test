import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"

const formPage = () => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <div >
      formPage
    </div >
  )
}

export default formPage
