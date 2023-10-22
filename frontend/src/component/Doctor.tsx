import { DoctorContext } from "@/contexts/DoctorContext";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

const Doctor = () => {
  const accessToken = localStorage.getItem("accessToken");
  const params = useParams();
  const { fetchOneDoctor, oneDoctor } = useContext(DoctorContext);
  useEffect(() => {
    fetchOneDoctor(id);
  }, [accessToken, oneDoctor]);
  const id = Number(params.id as string);
  if (!oneDoctor) return null;
  return (
    <div>
      <div>{id}</div>
      <div>{oneDoctor.map((i) => i.name)}</div>
      <div>{oneDoctor.map((i) => i.department)}</div>
      <div>{oneDoctor.map((i) => i.experience)}</div>
      <div>{oneDoctor.map((i) => i.education)}</div>
      <div>{oneDoctor.map((i) => i.availability.map((i) => i.date))}</div>
      <div>
        {oneDoctor.map((i) =>
          i.availability.map((i) => i.slots.map((i) => i.time))
        )}
      </div>{" "}
      <div>
        {oneDoctor.map((i) =>
          i.availability.map((i) => i.slots.map((i) => i.totalSlot))
        )}
      </div>{" "}
      <div>
        {oneDoctor.map((i) =>
          i.availability.map((i) => i.slots.map((i) => i.availableSlot))
        )}
      </div>
    </div>
  );
};

export default Doctor;
