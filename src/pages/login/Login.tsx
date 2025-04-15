import { Modal } from '../../widgets/modal/Modal.tsx'
import { selectIsLoggedIn, selectModalLogin, setIsLoggedIn, setModalLogin } from '../../app/store/appSlice.ts'
import { useAppSelector } from '../../app/store/hooks/useAppSelector.ts'
import { useLoginMutation } from '../../widgets/modal/api/authApi.ts'
import { useAppDispatch } from '../../app/store/hooks/useAppDispatch.ts'

export const Login = () => {
  const SignOutHandler = () => dispatch(setModalLogin({ modalLogin: false }))
  const openModal = useAppSelector(selectModalLogin)
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  const [login] = useLoginMutation()
  const dispatch = useAppDispatch()

  const logout = () => {
    dispatch(setIsLoggedIn({ isLoggedIn: false }))
    dispatch(setModalLogin({ modalLogin: false }))
    localStorage.removeItem('token')
  }

  const onSubmit = () => {
    isLoggedIn
      ? logout()
      : login({ username: 'USERNAME' }).then((res) => {
          dispatch(setIsLoggedIn({ isLoggedIn: true }))
          dispatch(setModalLogin({ modalLogin: false }))
        })
  }

  return (
    <Modal
      onClose={SignOutHandler}
      onSubmitTitle={isLoggedIn ? 'Logout' : 'Login'}
      title={isLoggedIn ? 'Logout Process Manager' : 'Welcome to Process Manager!'}
      open={openModal}
      onSubmit={onSubmit}
    >
      <p>{`Do you want to ${isLoggedIn ? 'Logout' : 'Login'}?`}</p>
    </Modal>
  )
}
