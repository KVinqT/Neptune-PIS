import dayjs from "dayjs";
import { createContext, useEffect, useState } from "react";

interface DoctorInfo {
  name: [] | null;
  department: [] | null;
  experience: [] | null;
  education: [] | null;
  availability: [];
  allDoctorByEachDepartment: [];
  allDepartment: [];
  activeDoctorFetch: (value: string) => void;
  fetchAllDepartment: () => void;
  fetchAllDoctor: (value: number) => void;
  updateDoctor: (value: any) => void;
}
const defaultContext: DoctorInfo = {
  name: [],
  department: [],
  experience: [],
  education: [],
  availability: [],
  allDoctorByEachDepartment: [],
  allDepartment: [],
  activeDoctorFetch: () => {},
  fetchAllDepartment: () => {},
  fetchAllDoctor: (id) => {},
  updateDoctor: () => {},
};
export const DoctorContext = createContext<DoctorInfo>(defaultContext);
const DoctorProvider = ({ children }: any) => {
  const accessToken = localStorage.getItem("accessToken");
  const todayDate = dayjs().format("DD-MM-YYYY");

  useEffect(() => {
    if (accessToken) {
      activeDoctorFetch(todayDate);
      fetchAllDepartment();
    }
  }, [accessToken]);

  const [doctorData, setDoctorData] = useState(defaultContext);

  const fetchAllDoctor = async (id: number) => {
    const token = localStorage.getItem("accessToken");
    const response = await fetch(`http://localhost:5000/departments/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    const { allDoctor } = data;
    setDoctorData({
      ...data,
      allDoctorByEachDepartment: allDoctor,
    });
  };

  const fetchAllDepartment = async () => {
    const token = localStorage.getItem("accessToken");
    const response = await fetch(`http://localhost:5000/departments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    const { allDepartment } = data;
    console.log("data about all department", data);
    setDoctorData({
      ...data,
      allDepartment,
    });
  };

  const activeDoctorFetch = async (todayDate: string) => {
    const token = localStorage.getItem("accessToken");
    const response = await fetch(
      `http://localhost:5000/doctors?today=${todayDate}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
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
      value={{
        ...doctorData,
        updateDoctor: setDoctorData,
        activeDoctorFetch,
        fetchAllDepartment,
        fetchAllDoctor,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorProvider;
