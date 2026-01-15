import { memo } from 'react'

const Backgroundlayer = memo(({image}) => {
  return (
    <div className='fixed inset-0 index-1' style={{background: `url(${image}) repeat-x center / cover`}}>

    </div>
  )
})

export default Backgroundlayer