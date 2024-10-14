
import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark'

const BookMarks = ({ bookmarks }) => {
    return (
        <div className='md:w-1/3 bg-gray-300  ml-4'>
            <h2 className='text-2xl text-center rounded-xl'>Bookmarks Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmarks=><BookMark key={bookmarks.id} bookmark={bookmarks}></BookMark>)
            }
        </div>
    );
};

BookMarks.PropTypes = {
    bookmarks:PropTypes.array
}
export default BookMarks;