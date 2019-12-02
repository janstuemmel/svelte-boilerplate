jest.mock('../../src/util')

import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'

import Root from '../../src/Root.svelte'
import { token } from '../../src/stores'

test('should show home page', async () => {

  // given
  token.set('foo')

  // when
  const { getByText } = render(Root)

  // then
  expect(getByText('Home')).toBeInTheDocument()
})


test('should show login page', async () => {

  // given
  token.set(null)

  // when
  const { getByDisplayValue } = render(Root)

  // then
  expect(getByDisplayValue('Login')).toBeInTheDocument()
})