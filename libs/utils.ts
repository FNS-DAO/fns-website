import { ElNotification } from 'element-plus'

export function NoteSuccess(message: string) {
  ElNotification({
    title: 'Success',
    message,
    type: 'success'
  })
}

export function isEmail(email: string) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)
}
