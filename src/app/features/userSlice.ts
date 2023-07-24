import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

export interface UsersState {
  id: string,
  nameTitle: string
  name: string
  surname: string
  dateofBirth: any
  nationality: string
  personalId: {
    one: string
    two: string
    three: string
    four: string
    five: string
  }
  gender: string
  tel: {
    code: string
    number: string
  }
  passportId: string
  expectedSalary: string
}

interface setfieldInterface {
  value: string
  field: "nameTitle" | "name" | "surname" | "dateofBirth" | "nationality" | "personalId" | "gender" | "tel" | "passportId" | "expectedSalary"
}

const initialState: UsersState = {
  id: '0',
  nameTitle: '',
  name: '',
  surname: '',
  dateofBirth: '',
  nationality: '',
  personalId: {
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
  },
  gender: '',
  tel: {
    code: '',
    number: '',
  },
  passportId: '',
  expectedSalary: '',
}

const ishaveUsers = () => {
  let users = window.localStorage.getItem("users")
  if (users == null) {
    window.localStorage.setItem("users", "[]")
  }
  return users as string
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createorUpdateUser: (state, action: PayloadAction<UsersState>) => {
      let users = ishaveUsers()
      users = window.localStorage.getItem("users") as string
      const usersObj = JSON.parse(users)
      const userIndex = usersObj.findIndex((user: UsersState) => user.id == state.id)
      let resUser = state as UsersState

      if (userIndex == -1) {
        resUser = { ...action.payload, id: Date.now().toString() }
        state.id = '0'
      } else {
        // update
        usersObj.splice(userIndex, 1)
        resUser = { ...action.payload, id: state.id }
        state.id = resUser.id
      }

      state.nameTitle = resUser.nameTitle
      state.name = resUser.name
      state.surname = resUser.surname
      state.dateofBirth = dayjs(resUser.dateofBirth, 'MM/DD/YYYY')
      state.nationality = resUser.nationality
      state.personalId = resUser.personalId
      state.gender = resUser.gender
      state.tel = resUser.tel
      state.passportId = resUser.passportId
      state.expectedSalary = resUser.expectedSalary

      window.localStorage.setItem("users", JSON.stringify([...usersObj, resUser]))
    },
    getUserbyId: (state, action: PayloadAction<string>) => {
      let users = ishaveUsers()
      const usersObj = JSON.parse(users)
      const user = usersObj.find((user: UsersState) => user.id == action.payload)

      state.id = user.id
      state.nameTitle = user.nameTitle
      state.name = user.name
      state.surname = user.surname
      state.dateofBirth = dayjs(user.dateofBirth, 'MM/DD/YYYY')
      state.nationality = user.nationality
      state.personalId = user.personalId
      state.gender = user.gender
      state.tel = user.tel
      state.passportId = user.passportId
      state.expectedSalary = user.expectedSalary
    },
    setField: (state, action: PayloadAction<setfieldInterface>) => {
      ishaveUsers()
      const { value, field }: setfieldInterface = action.payload
      state[field] = value
    },
    clearUser: (state) => {
      state.id = ''
      state.nameTitle = ''
      state.name = ''
      state.surname = ''
      state.dateofBirth = ''
      state.nationality = ''
      state.personalId = {
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
      }
      state.gender = ''
      state.tel = {
        code: '',
        number: '',
      }
      state.passportId = ''
      state.expectedSalary = ''
    },
    deleteUserbyId: (state, action: PayloadAction<string>) => {
      let users = ishaveUsers()
      const usersObj = JSON.parse(users)
      const userIndex = usersObj.findIndex((user: UsersState) => user.id == action.payload)

      usersObj.splice(userIndex, 1)
      window.localStorage.setItem("users", JSON.stringify(usersObj))

      state.id = ''
      state.nameTitle = ''
      state.name = ''
      state.surname = ''
      state.dateofBirth = ''
      state.nationality = ''
      state.personalId = {
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
      }
      state.gender = ''
      state.tel = {
        code: '',
        number: '',
      }
      state.passportId = ''
      state.expectedSalary = ''
    }
  }
})

export const {
  createorUpdateUser,
  getUserbyId,
  setField,
  clearUser,
  deleteUserbyId
} = userSlice.actions

export default userSlice.reducer