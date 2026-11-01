let IS_PROD = true;

const server = IS_PROD
  ? "https://zoom-clone-6iba.onrender.com"
  : "http://localhost:8000";

export default server;
