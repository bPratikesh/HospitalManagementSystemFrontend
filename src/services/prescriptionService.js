import api from "@/services/api";

const createPrescription = async (appointmentId, prescriptionData) => {
  const response = await api.post(
    `/prescription/appointment/${appointmentId}`,
    prescriptionData,
  );

  return response.data;
};

export default {
  createPrescription,
};
