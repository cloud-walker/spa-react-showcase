import {screen} from '@testing-library/react'
import {afterEach, beforeEach, expect, test} from 'vitest'

const elRoot = document.createElement('div')
elRoot.id = 'root'

beforeEach(() => {
  document.body.appendChild(elRoot)
})

afterEach(() => {
  document.body.removeChild(elRoot)
})

test('works properly', async () => {
  await import('./main')

  expect(
    await screen.findByRole('heading', {name: 'Login'}),
  ).toBeInTheDocument()
})
