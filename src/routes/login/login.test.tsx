import {render, screen} from '@testing-library/react'
import {expect, test} from 'vitest'

import {element} from '.'

test('render properly', () => {
  render(element)

  expect(screen.getByRole('heading', {name: 'Login'})).toBeInTheDocument()
  expect(
    screen.getByRole('button', {name: 'Click me to login'}),
  ).toBeInTheDocument()
})
