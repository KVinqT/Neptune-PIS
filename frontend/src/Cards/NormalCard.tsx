interface Props {
  title: string;
}
const NormalCard = ({ title }: Props) => {
  return (
    <div className="bg-[#F5F7FB] rounded-xl border w-[180px] mt-6 py-4 text-md font-semibold cursor-pointer ml-5">
      <div className="m-auto flex items-center justify-center">
        <p className="ml-2">{title}</p>
      </div>
    </div>
  );
};

export default NormalCard;
