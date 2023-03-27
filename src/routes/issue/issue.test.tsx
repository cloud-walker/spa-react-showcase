import {render, screen} from '@testing-library/react'
import {createMemoryRouter, RouteObject, RouterProvider} from 'react-router-dom'
import {expect, test} from 'vitest'

import {Component} from '.'

test('render properly', () => {
  const routes: RouteObject[] = [
    {path: '/issues/:id_issue', element: <Component />},
  ]
  const router = createMemoryRouter(routes, {
    initialEntries: ['/issues/123'],
    initialIndex: 1,
  })
  render(<RouterProvider router={router} />)

  expect(screen.getByText('Issue: 123')).toBeInTheDocument()
})
