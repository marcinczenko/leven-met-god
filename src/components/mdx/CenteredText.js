const CenteredText = ({ children, italic }) => {
  return (
    <div className={`w-full flex justify-center  ${italic ? 'italic' : ''}`}>
      <p className='font-sans text-base whitespace-pre'>{children}</p>
    </div>
  )
}

export { CenteredText }
