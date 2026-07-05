import api from "./api";

const authService = {
  registerDoctor: (doctorData) => {
    return api.post("/auth/register/doctor", doctorData);
  },

  registerPatient: (patientData) => {
    return api.post("/auth/register/patient", patientData);
  },

  login: (loginData) => {
    return api.post("/auth/login", loginData);
  },
};

export default authService;
