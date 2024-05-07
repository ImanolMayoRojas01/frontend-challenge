import '@testing-library/jest-dom/vitest'
import { render } from '@testing-library/react'
import BackButton from '.'

test('Render component', () => {
  const textButton = 'Volver'
  const component = render(<BackButton text={textButton} />)
  component.getByText(textButton)
})
