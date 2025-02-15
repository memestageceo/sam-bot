export {}
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_OPTIONS: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_TOKEN: string;
      OPENAI_API_KEY: string;
      GOOGLE_ANALYTICS_MEASURE_ID: string;
      GOOGLE_ANALYTICS_SECRET: string;
      PLAUSIBLE_DOMAIN: string;
      PORT: string;
    }
  }
}