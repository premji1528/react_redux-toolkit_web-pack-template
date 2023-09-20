import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

test('Should App Render wihtout error', () => {
  render(<App />)

  expect(1+1).toBe(2)
})
