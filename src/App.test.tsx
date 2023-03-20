import {render, screen} from '@testing-library/react'
import {expect, test} from 'vitest'

import {App} from './App'

test('works properly', () => {
  render(<App />)

  expect(screen.getByRole('heading', {name: 'Hello!'})).toBeInTheDocument()
})
