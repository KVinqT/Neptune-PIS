// config/config.ts

interface Config {
  jwtSecretReception: string;
  jwtSecretPatient: string;
}

export const config: Config = {
  jwtSecretReception: process.env.JWT_SECRET_RECEPTION || "",
  jwtSecretPatient: process.env.JWT_SECRET_PATIENT || "",
};
