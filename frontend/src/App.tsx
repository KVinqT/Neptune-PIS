import { InputForm } from "./component/InputForm";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="bg-[#F5F7FB] md:w-[700px] md:h-[70vh] rounded-xl absolute left-0 right-0 top-0 bottom-0 m-auto shadow-2xl">
        <div className="ml-20 mt-10 font-sans font-bold text-2xl text-[#5068E9]">
          Sign In
        </div>
        <div>
          <InputForm />
        </div>
      </div>
    </div>
  );
}
