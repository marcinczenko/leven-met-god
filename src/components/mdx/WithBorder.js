import styled from '@emotion/styled'

const WithBorder = styled.div(({ thickness = 1 }) => ({
  padding: '25px',
  marginBottom: '25px',
  border: `${thickness}px solid black`
}))

export { WithBorder }
