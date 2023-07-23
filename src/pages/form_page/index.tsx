import './style.scss'

import { DownOutlined } from '@ant-design/icons'
import { Button, Col, Dropdown, Form, Input, Row, Space, Select, DatePicker, Radio } from "antd"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import { TFunction } from 'i18next'

const nameTitleOptions = (t: TFunction) => ([
  { value: 'mr', label: t('option.nameTitle.mr') },
  { value: 'miss', label: t('option.nameTitle.miss') },
  { value: 'mrs', label: t('option.nameTitle.mrs') },
])

const nationalityOptions = (t: TFunction) => ([
  { value: 'thai', label: t('option.nationality.thai') },
])

const telOptions = (t: TFunction) => ([
  { value: '+66', label: t('option.tel.+66') },
])

const formPage = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const handleCancel = () => {
    const res = form.resetFields();    //reset form
    console.log(res);
  };

  const FormSection = () => {
    return (
      <Form
        form={form}
        name="basic"
        className="formSection"
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      // labelAlign="left"
      >

        <Row gutter={8}>
          <Col span={5} >
            <Form.Item
              label={t('form.nameTitle')}
              name="nameTitle"
              rules={[{ required: true, message: t('messages.error.required', { field: 'form.nameTitle' }) }]}
            >
              <Select
                placeholder={t('form.nameTitle')}
                options={nameTitleOptions(t)}
              />
            </Form.Item>
          </Col>

          <Col span={9}>
            <Form.Item
              label={t('form.name')}
              name="name"
              rules={[{ required: true, message: t('messages.error.required', { field: 'form.name' }) }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={9} >
            <Form.Item
              label={t('form.surName')}
              name="surName"
              rules={[{ required: true, message: t('messages.error.required', { field: 'form.surName' }) }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={8} justify='start'>
          <Col span={8} >
            <Form.Item
              label={t('form.dateofBirth')}
              name="dateofBirth"
              rules={[{ required: true, message: t('messages.error.required', { field: 'form.dateofBirth' }) }]}
            >
              <DatePicker
                placeholder={t('form.dateofBirthPlaceHolder')}
                format={'MM/DD/YYYY'}
                onChange={() => { }}
              />
            </Form.Item>
          </Col>
          <Col span={10} >
            <Form.Item
              label={t('form.nationality')}
              name="nationality"
              rules={[{ required: true, message: t('messages.error.required', { field: 'form.nationality' }) }]}
            >
              <Select
                placeholder={t('form.nationality')}
                onChange={() => { }}
                options={nationalityOptions(t)}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={8} justify='start'>
          <Col span={24}>
            <Form.Item
              label={t('form.personalId')}
              name="personalId"
            >
              <Row gutter={8} justify='start' >
                <Col span={3}><Input maxLength={1} /></Col> -
                <Col span={5}><Input maxLength={1} /></Col> -
                <Col span={5}><Input maxLength={1} /></Col> -
                <Col span={4}><Input maxLength={1} /></Col> -
                <Col span={3}><Input maxLength={1} /></Col>
              </Row>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label={t('form.gender')}
              name="gender"
              rules={[{ required: true, message: t('messages.error.required', { field: 'form.gender' }) }]}

            >
              <Radio.Group
              //  onChange={()=>{}} value={value}
              >
                <Radio value={'male'}>{t('radio.male')}</Radio>
                <Radio value={'female'}>{t('radio.female')}</Radio>
                <Radio value={'none'}>{t('radio.none')}</Radio>
              </Radio.Group>

            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label={t('form.tel')}
              name="tel"
              rules={[{ required: true, message: t('messages.error.required', { field: 'form.tel' }) }]}
            >
              <Row gutter={8} justify='start' >
                <Col span={4}>
                  <Select
                    options={telOptions(t)}
                  />
                </Col>
                <Col span={12}>
                  <Input />
                </Col>
              </Row>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label={t('form.passportId')}
              name="passportId"
            >
              <Col span={10}>
                <Input />
              </Col>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label={t('form.expectedSalary')}
              name="expectedSalary"
              rules={[{ required: true, message: t('messages.error.required', { field: 'form.expectedSalary' }) }]}

            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item wrapperCol={{ offset: 8 }}>
              <Button type="default" onClick={handleCancel}>
                {t('form.clear')}
              </Button>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item wrapperCol={{ offset: 8 }}>
              <Button type="default" htmlType="submit">
                {t('form.submit')}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    )
  }

  const TableSection = () => {
    return (
      <>
        table
      </>
    )
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Row justify='center' >
          <FormSection />
        </Row>
      </Col>
      <Col span={24}>
        <Row justify='center' >
          <TableSection />
        </Row>
      </Col>
    </Row>
  )
}

export default formPage
