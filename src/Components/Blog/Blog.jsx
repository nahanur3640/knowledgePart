import PropTypes from 'prop-types'
import { IoBookSharp } from "react-icons/io5";


const Blog = ({ blog, handleAddToBookmarks }) => {
    const { title, cover, author, img, reading_time, posted_date, hashtags } = blog

    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-1'>
                    <img className='w-14' src={img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div >
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmarks(blog)} className='ml-2 text-2xl text-red-600'><IoBookSharp />
                    </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func
}
export default Blog;