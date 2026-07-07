import api from "./api";

const payForAppointment = async (appointmentId) => {
  const response = await api.put(`/payment/appointment/${appointmentId}`);
  return response.data;
};

export default {
  payForAppointment,
};
