import './style.scss'

import { RootState } from '@features/store';
import { addUser, clearUser } from '@features/userSlice'
import { Button, Col, DatePicker, Form, Input, Radio, Row, Select } from "antd"
import { TFunction } from 'i18next'
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"

const TableSection = dynamic(import("../../app/components/TableSection"), { ssr: false })

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

// https://redux.js.org/style-guide/#avoid-putting-form-state-in-redux
const formPage = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const user = useSelector((state: RootState) => state.user)
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue(user)
  }, [form, user])

  const onFinish = (values: any) => {
    const newData = { ...values }
    newData.dateofBirth = values.dateofBirth?.format('MM/DD/YYYY')
    dispatch(addUser(newData))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const handleClear = () => {
    form.resetFields();
    dispatch(clearUser())
  };

  const FormSection = () => {
    return (
      <Form
        form={form}
        name="basic"
        className="formSection"
        initialValues={user}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={8}>
          <Col span={5} >
            <Form.Item
              label={t('form.nameTitle')}
              name="nameTitle"
              rules={[
                { required: true, message: t('messages.error.required', { field: 'form.nameTitle' }) }
              ]}
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
              rules={[
                { whitespace: true, message: t('messages.error.required', { field: 'form.name' }) },
                { required: true, message: t('messages.error.required', { field: 'form.name' }) }
              ]}
            >
              <Input
              />
            </Form.Item>
          </Col>
          <Col span={9} >
            <Form.Item
              label={t('form.surname')}
              name="surname"
              rules={[
                { whitespace: true, message: t('messages.error.required', { field: 'form.surname' }) },
                { required: true, message: t('messages.error.required', { field: 'form.surname' }) }
              ]}
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
            <Form.Item label={t('form.personalId')}>
              <Row gutter={8} justify='start' >
                <Col span={3}>
                  <Form.Item name={['personalId', 'one']}><Input maxLength={1} /></Form.Item>
                </Col> -
                <Col span={5}>
                  <Form.Item name={['personalId', 'two']}><Input maxLength={4} /></Form.Item>
                </Col> -
                <Col span={5}>
                  <Form.Item name={['personalId', 'three']}><Input maxLength={5} /></Form.Item>
                </Col> -
                <Col span={4}>
                  <Form.Item name={['personalId', 'four']}><Input maxLength={2} /></Form.Item>
                </Col> -
                <Col span={3}>
                  <Form.Item name={['personalId', 'five']}><Input maxLength={1} /></Form.Item>
                </Col>
              </Row>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={8} justify='start'>
          <Col span={24}>
            <Form.Item
              label={t('form.gender')}
              name="gender"
              rules={[
                { required: true, message: t('messages.error.required', { field: 'form.surname' }) }
              ]}
            >
              <Radio.Group>
                <Radio value={'male'}>{t('radio.male')}</Radio>
                <Radio value={'female'}>{t('radio.female')}</Radio>
                <Radio value={'none'}>{t('radio.none')}</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={8} justify='start'>
          <Col span={24}>
            <Form.Item
              label={t('form.tel')}
              rules={[
                { required: true, message: t('messages.error.required', { field: 'form.tel' }) },
                { whitespace: true, message: t('messages.error.required', { field: 'form.tel' }) },
              ]}
            >
              <Row gutter={8} justify='start' >
                <Col span={4}>
                  <Form.Item name={['tel', 'code']}>
                    <Select options={telOptions(t)} />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item name={['tel', 'number']}>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={8} justify='start'>
          <Col span={24}>
            <Col span={8}>
              <Form.Item
                label={t('form.passportId')}
                name="passportId"
              >
                <Input />
              </Form.Item>
            </Col>
          </Col>
        </Row>

        <Row gutter={8} justify='start'>
          <Col span={12}>
            <Form.Item
              label={t('form.expectedSalary')}
              name="expectedSalary"
              rules={[
                { required: true, message: t('messages.error.required', { field: 'form.expectedSalary' }) },
                { whitespace: true, message: t('messages.error.required', { field: 'form.expectedSalary' }) },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item wrapperCol={{ offset: 8 }}>
              <Button type="default" onClick={handleClear}>
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

      </Form >
    )
  }

  return (
    <Row gutter={[0, 40]} justify='center' >
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
