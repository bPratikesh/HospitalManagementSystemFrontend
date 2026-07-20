import api from "./api";

const doctorReviewService = {
  createReview: async (appointmentId, reviewData) => {
    const response = await api.post(
      `/reviews/appointment/${appointmentId}`,
      reviewData,
    );
    return response.data;
  },

  getDoctorReviews: async (doctorId) => {
    const response = await api.get(`/reviews/doctor/${doctorId}`);
    return response.data;
  },

  getDoctorSummary: async (doctorId) => {
    const response = await api.get(`/reviews/doctor/${doctorId}/summary`);
    return response.data;
  },

  hasReviewed: async (appointmentId) => {
    const response = await api.get(
      `/reviews/appointment/${appointmentId}/reviewed`,
    );
    return response.data;
  },
};

export default doctorReviewService;
