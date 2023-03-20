import matchers from '@testing-library/jest-dom/matchers'
import {beforeAll, expect} from 'vitest'

beforeAll(() => {
  expect.extend(matchers)
})
