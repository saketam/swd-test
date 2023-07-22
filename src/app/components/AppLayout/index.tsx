import './style.scss'

import { DownOutlined } from '@ant-design/icons'
import { Button, ButtonProps, Dropdown, Layout, Space, Typography } from 'antd'
import type { MenuProps } from 'antd'
import { useRouter } from 'next/router'
import { ReactNode } from "react"
import { useTranslation } from "react-i18next"

const { Header, Content } = Layout

type DefaultLayoutProps = { children: ReactNode }

const AppLayout = ({ children }: DefaultLayoutProps) => {
  const { t, i18n } = useTranslation()
  const router = useRouter()

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    i18n.changeLanguage(e.key)
  }

  const handleHomeClick: ButtonProps['onClick'] = () => {
    router.push('/')
  }

  const items: MenuProps['items'] = [
    {
      label: t('th'),
      key: 'th',
    },
    {
      label: t('en'),
      key: 'en',
    }
  ]

  return (
    <Layout>
      <Header className="header">
        <Typography.Title level={1} className="title">
          {t(router.pathname)}
        </Typography.Title>

        <div className="buttonGroup">
          <Dropdown menu={{
            items,
            onClick: handleMenuClick,
          }}>
            <Button>
              <Space>
                {t(i18n.language)}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Button onClick={handleHomeClick}>
            {t(router.pathname)}
          </Button>
        </div>
      </Header>

      <Content className="content">
        {children}
      </Content>
    </Layout >
  )
}

export default AppLayout
