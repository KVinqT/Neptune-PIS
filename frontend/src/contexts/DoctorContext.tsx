import { createContext, useState } from "react";

interface DoctorInfo {
  name: [] | null;
  department: [] | null;
  experience: [] | null;
  education: [] | null;
  availability: [];
  activeDoctorFetch: (value: string) => void;
  updateDoctor: (value: any) => void;
}
const defaultContext: DoctorInfo = {
  name: [],
  department: [],
  experience: [],
  education: [],
  availability: [],
  activeDoctorFetch: () => {},
  updateDoctor: () => {},
};
export const DoctorContext = createContext<DoctorInfo>(defaultContext);
const DoctorProvider = ({ children }: any) => {
  const [doctorData, setDoctorData] = useState(defaultContext);
  const activeDoctorFetch = async (todayDate: string) => {
    const response = await fetch(
      `http://localhost:5000/doctors?today=${todayDate}`
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <DoctorContext.Provider
      value={{ ...doctorData, updateDoctor: setDoctorData, activeDoctorFetch }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorProvider;
