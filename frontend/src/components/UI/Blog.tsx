interface BlogTitleProps {
  title: string;
}

const BlogTitle = ({ title }: BlogTitleProps) => (
  <h1 className="text-3xl font-bold mb-4">{title}</h1>
);

export { BlogTitle };
