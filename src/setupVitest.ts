import {Request} from '@remix-run/web-fetch'
import matchers from '@testing-library/jest-dom/matchers'
import {beforeAll, expect, vi} from 'vitest'

vi.stubGlobal('Request', Request)

beforeAll(() => {
  expect.extend(matchers)
})
