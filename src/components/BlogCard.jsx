import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";

const BlogCard = ({ blog, deletable, handleDelete}) => {
  const { cover_image, title, description, published_at, id } = blog;
  return (
    <div className="flex relative">
      
      <Link
        to={`/blog/${id}`}
        className="transition border-2 border-primary hover:border-secondary hover:scale-105 border-opacity-30 max-w-sm mx-auto group hover:no-underline focus:no-underline"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44"
          src={cover_image || placeHolderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div onClick={() => handleDelete(id)} className="absolute p-3 rounded-full bg-primary hover:bg-secondary cursor-pointer hover:scale-105 -top-5 -right-5">
          <MdDeleteForever size={20} className="text-secondary hover:text-primary" />
        </div>
      )}
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
  deletable: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default BlogCard;
