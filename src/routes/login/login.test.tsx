import {render, screen} from '@testing-library/react'
import {expect, test} from 'vitest'

import {Component} from '.'

test('render properly', () => {
  render(<Component />)

  expect(screen.getByRole('heading', {name: 'Login'})).toBeInTheDocument()
  expect(
    screen.getByRole('button', {name: 'Click me to login'}),
  ).toBeInTheDocument()
})
