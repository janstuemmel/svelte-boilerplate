jest.mock('../../../src/api')
jest.mock('../../../src/stores')

import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitForDomChange } from '@testing-library/svelte'

import Login from '../../../src/components/Login.svelte'
import { login } from '../../../src/api'
import { token } from '../../../src/stores'

test('should fail login without input', async () => {

  // given
  login.mockImplementationOnce(() => ({ error: true }))
  const { getByText } = render(Login)
  const button = getByText('Login')

  // when
  fireEvent.click(button)
  await waitForDomChange()

  // then
  expect(getByText('wrong cred'))
})

test('should login', async () => {
 
  // given
  login.mockImplementationOnce(() => ({ token: 'tok' }))
  const { getByText, getByPlaceholderText } = render(Login)
  const button = getByText('Login')
  const email = getByPlaceholderText('Email')
  const pass = getByPlaceholderText('Password')

  // when
  await fireEvent.input(email, { target: { value: 'foo' } })
  await fireEvent.input(pass, { target: { value: 'bar' } })
  await fireEvent.click(button)

  // then
  expect(login).toHaveBeenCalledWith('foo', 'bar')
  expect(token.set).toHaveBeenCalledWith('tok')
})