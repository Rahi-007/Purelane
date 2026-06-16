interface IProps{
  title: string;
}

const Tittle = ({title}: IProps) => {
  return (
    <h1 className="text-3xl font-bold text-gray-700 py-4">{title}</h1>
  );
};

export default Tittle;
