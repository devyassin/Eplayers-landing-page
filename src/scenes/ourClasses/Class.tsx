type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute  flex
    h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-black text-center text-white
    opacity-0 transition duration-500 hover:opacity-60`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} className="h-full" src={image} />
    </li>
  );
};

export default Class;
