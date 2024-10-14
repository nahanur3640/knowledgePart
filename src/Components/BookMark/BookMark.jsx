import PropTypes from "prop-types";

const BookMark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="bg-slate-200 p-4 m-4 rounded-xl mt-2">
            <h3 className="text-3xl">{ title}</h3>
        </div>
    );
};


BookMark.PropTypes = {
    bookmark:PropTypes.object
}
export default BookMark;