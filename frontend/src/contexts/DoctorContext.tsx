import { createContext, useEffect, useState } from "react";

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
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    if (accessToken) {
      activeDoctorFetch;
    }
  }, [accessToken]);
  const [doctorData, setDoctorData] = useState(defaultContext);
  const activeDoctorFetch = async (todayDate: string) => {
    const response = await fetch(
      `http://localhost:5000/doctors?today=${todayDate}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    const { name, department, experience, education, availability } = data;
    console.log(data);
    setDoctorData({
      ...data,
      name,
      department,
      experience,
      education,
      availability,
    });
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
