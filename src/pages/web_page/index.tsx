import './style.scss'

import { Button, Col, Divider, Row } from "antd"
import { useState } from "react"
import { useTranslation } from "react-i18next"

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
  Square,
  Circle,
  Oval,
  Trapezoid,
  Rectangle,
  Parallelogram,
]

const WebPage = () => {
  const { t } = useTranslation()
  const [shapes, setShapes] = useState(startShape)
  const [swapGrid, setSwapGrid] = useState(true)

  const swap = () => setSwapGrid(prev => !prev)

  const handleMoveShape = (direction: string) => () => {
    if (direction == 'left') {
      return setShapes(prev => {
        const newShape = [...prev]
        const first = newShape.shift() as () => JSX.Element
        return [...newShape, first]
      })
    } else if (direction == 'right') {
      return setShapes(prev => {
        const newShape = [...prev]
        const last = newShape.pop() as () => JSX.Element
        return [last, ...newShape]
      })
    } else if (direction == 'updown') {
      return setShapes(prev => {
        const newShape = [...prev]
        const first = newShape.slice(0, 3)
        const last = newShape.slice(3, 6)
        swap()
        return [...last, ...first]
      })
    } else if (direction == 'random') {
      return setShapes(prev => {
        const newShape = [...prev]
        return newShape.sort(() => 0.5 - Math.random())
      })
    }
  }

  const ActionSection = () => {
    return (
      <Row >
        <Col span={8}>
          <Row justify='end' >
            <Button className="button" onClick={handleMoveShape('left')}>
              <TriangleLeft />
              <span className="description">{t('move_shape')}</span>
            </Button>
          </Row>
        </Col>
        <Col span={8}>
          <Row justify='center' >
            <Button className="button2" onClick={handleMoveShape('updown')}>
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
            <Button className="button" onClick={handleMoveShape('right')}>
              <TriangleRight />
              <span className="description">{t('move_shape')}</span>
            </Button>
          </Row>
        </Col>
      </Row>
    )
  }

  const ResultSection = () => {
    return (
      <>
        <Row gutter={[16, 16]} style={{ flexFlow: swapGrid ? "row wrap" : "row wrap-reverse" }}>
          <Col span={24}>
            <Row gutter={[16, 16]} >
              <Col span={3}></Col>
              {
                shapes.slice(0, 3).map((shape, index) => (
                  <Col span={7} key={index}>
                    <Row justify='center'>
                      <Button className="button" onClick={handleMoveShape('random')}>
                        {shape()}
                      </Button>
                    </Row>
                  </Col>
                ))
              }
            </Row>
          </Col>

          <Col span={24}>
            <Row gutter={[16, 16]}>
              {
                shapes.slice(3, 6).map((shape, index) => (
                  <Col span={7} key={index}>
                    <Row justify='center'>
                      <Button className="button" onClick={handleMoveShape('random')}>
                        {shape()}
                      </Button>
                    </Row>
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
      </>
    )
  }

  return (
    <>
      <ActionSection />
      <Divider />
      <ResultSection />
    </>
  )
}

export default WebPage
