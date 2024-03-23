import { useLoaderData } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();

  const { cover_image, title, tags, body_html } = blog;

  return (
    <div>
      <div className="border-2 border-primary p-2 border-opacity-30 mx-auto group hover:no-underline focus:no-underline ">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44"
          src={cover_image || placeHolderImage}
        />
        <div className="flex flex-wrap py-6 gap-2">
          {tags.map((tag, idx) => (
            <a key={idx} href="#" className="px-3 py-1 hover:underline">
              #{tag}
            </a>
          ))}
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>

          <div>
            <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>          
          </div>


        </div>
      </div>
    </div>
  );
};

export default Content;
