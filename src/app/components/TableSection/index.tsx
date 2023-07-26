import './style.scss'

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { UsersState, getUserbyId, deleteUserbyId, deleteUserbyIds } from "@features/userSlice"
import { Button, Checkbox, Col, Row, Table } from "antd"
import type { ColumnsType, TableProps } from 'antd/es/table'
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface DataType {
  key: React.Key
  name: string
  gender: string
  tel: string
  nationality: string
  action: React.ReactNode
}

const ActionSection = (id: string) => {
  const dispatch = useDispatch()

  const handleEdit = () => {
    dispatch(getUserbyId(id))
  }

  const handledelete = () => {
    dispatch(deleteUserbyId(id))
  }

  return (
    <div >
      <EditOutlined onClick={handleEdit} style={{ fontSize: '24px', paddingRight: '24px' }} />
      <DeleteOutlined onClick={handledelete} style={{ fontSize: '24px' }} />
    </div>
  )
}

const TableSection = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const users = JSON.parse(window.localStorage.getItem("users") as string)
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const columns: ColumnsType<DataType> = [
    {
      title: t('table.name'),
      dataIndex: 'name',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
      title: t('table.gender'),
      dataIndex: 'gender',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.gender.localeCompare(b.gender)
    },
    {
      title: t('table.tel'),
      dataIndex: 'tel',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.tel.localeCompare(b.tel)
    },
    {
      title: t('table.nationality'),
      dataIndex: 'nationality',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.nationality.localeCompare(b.nationality)
    },
    {
      title: t('table.action'),
      dataIndex: 'action',
    },
  ]

  const data: DataType[] = []
  users?.map((user: UsersState, index: number) => {
    data.push({
      key: user.id,
      name: `${t(`option.nameTitle.${user.nameTitle}`)} ${user.name} ${user.surname}`,
      gender: t(`radio.${user.gender}`),
      tel: `${user.tel.code} ${user.tel.number}`,
      nationality: t(`option.nationality.${user.nationality}`),
      action: ActionSection(user.id)
    })
  })

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const onCheckAll = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      setSelectedRowKeys(data?.map((datum) => datum.key))
    } else {
      setSelectedRowKeys([])
    }
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  const handleClearSelected = () => {
    if (selectedRowKeys == []) return

    dispatch(deleteUserbyIds(selectedRowKeys))
    setSelectedRowKeys([])
  }

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <Row style={{ width: '100%' }} gutter={[0, 20]}>
      <Col span={20} offset={4} >
        <Row justify="start">
          <Col span={2}>
            <Checkbox onChange={onCheckAll}>{t('checkAll')}</Checkbox>
          </Col>
          <Col span={2}>
            <Button type="default" onClick={handleClearSelected}>
              {t('table.clear')}
            </Button>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row justify="center">
          <Table
            className="table"
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            onChange={onChange}
          />
        </Row>
      </Col>
    </Row>
  )
}

export default TableSection
