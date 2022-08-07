import React from 'react'
import moment from 'moment'
const PostDetail = ({posts}) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-two':
        return <h3 key={index} className="text-2xl font-manrope font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'heading-three':
        return <h3 key={index} className="text-xl font-manrope font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8 font-manrope">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-lg font-manrope font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
        case 'heading-five':
        return <h4 key={index} className="text-md font-manrope font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className=' mx-auto max-w-3xl'>
      <div className='relative overflow-hidden mb-6'>
        <img 
         className='w-full h-full '
        src={posts.featuredImage.url}
        alt={posts.title} />
      </div>
      <div className='flex items-center gap-x-4 mb-6 lg:gap-x-8'>
        <div className='flex items-center justify-center gap-x-2 '>
                          <div className='flex items-center justify-center'>
                                  <img
                                      src={posts.author.photo.url}
                                      className='rounded-full object-cover w-10 h-10'
                                  />
                          </div>
                          <p className='text-gray text-sm capitalize font-poppins'>{posts.author.name}</p>
                      </div>
        <div className='px-2 py-1 cursor-pointer text-xs bg-light-gray text-gray uppercase rounded-sm transition ease-in-out duration-150 hover:bg-black hover:text-white'>{posts.categories[0].name}</div>
                      <div><p className='text-sm uppercase text-gray font-sm font-poppins self-end'>{moment(posts.createdAt).format('MMM DD, YYYY')}</p></div>

      </div>
      <h1 className='font-bold font-manrpe text-3xl mb-4 md:text-4xl'>{posts.title}</h1>
      {posts.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

        return getContentFragment(index, children, typeObj, typeObj.type)
      })}
    </div>
  )
}

export default PostDetail