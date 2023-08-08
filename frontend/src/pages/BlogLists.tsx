import { Link } from 'react-router-dom';
const BlogLists = () => {
  const blogTitles = [
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
    {
      title:
        'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
      id: '123',
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-slate-300">
      <div className="bg-white p-10 rounded-lg shadow-lg w-1/2 h-5/6 overflow-y-scroll">
        <h1 className="text-3xl font-bold mb-8 text-center">Blog Titles</h1>
        <ul className="space-y-4">
          {blogTitles.map((blogData, index) => (
            <Link
              key={index}
              to={`/specific-blog/${blogData.id}`}
              className="text-lg truncate text-gray-800 bg-gray-100 p-4 block cursor-pointer"
            >
              {blogData.title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogLists;
