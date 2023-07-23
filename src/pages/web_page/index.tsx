import { Button, Col, ConfigProvider, Divider, Row } from "antd"
import { t } from "i18next"
import { useRouter } from "next/router"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import './style.scss'


const TriangleLeft = () => <div className="triangle triangle-left" />
const TriangleRight = () => <div className="triangle triangle-right" />
const TriangleUp = () => <div className="triangle" />
const Triangledown = () => <div className="triangle triangle-down" />
const Oval = () => <div className="oval" />
const Square = () => <div className="square" />
const Rectangle = () => <div className="rectangle" />
const Parallelogram = () => <div className="parallelogram" />
const Circle = () => <div className="circle" />
const Trapezoid = () => <div className="trapezoid" />

const startShape = [
  Parallelogram,
  Rectangle,
  Trapezoid,
  Circle,
  Oval,
  Square,
]

const ActionSection = () => {
  return (
    <Row >
      <Col span={8}>
        <Row justify='end' >
          <Button className="button">
            <TriangleLeft />
            <span className="description">{t('move_shape')}</span>
          </Button>
        </Row>
      </Col>
      <Col span={8}>
        <Row justify='center' >
          <Button className="button2">
            <Row>
              <Col span={10}>
                <TriangleUp />
              </Col>
              <Col span={4} />
              <Col span={10}>
                <Triangledown />
              </Col>
            </Row>
          </Button>
        </Row>
        <span className="description">{t('move_position')}</span>
      </Col>
      <Col span={8}>
        <Row justify='start' >
          <Button className="button">
            <TriangleRight />
            <span className="description">{t('move_shape')}</span>
          </Button>
        </Row>
      </Col>
    </Row>
  )
}

const webPage = () => {
  const { t } = useTranslation()
  const [shapes, setShapes] = useState(startShape)

  return (
    <>
      <ActionSection />
      <Divider />

      <Row gutter={[16, 16]} justify='center'>
        {
          shapes.map((shape) => {
            return (
              <Col span={8} >
                <Row justify='center'>
                  <Button className="button">
                    {shape()}
                  </Button>
                </Row>
              </Col>
            )
          })
        }
      </Row>
    </>
  )
}

export default webPage
