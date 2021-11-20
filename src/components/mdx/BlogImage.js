const BlogImage = ({ src, alt, link, width, border }) => {
  return (
    <div className='w-full overflow-x-auto flex flex-col justify-center items-start sm:items-center my-5'>
      <div className={border ? 'border-2 border-black' : ''} style={{ width }}>
        {link
          ? (
            <a href={link} target='_blank' rel='nofollow noopener noreferrer'>
              <img src={src} alt={alt} />
            </a>
            )
          : (
            <img src={src} alt={alt} />
            )}
      </div>
    </div>
  )
}

export { BlogImage }
