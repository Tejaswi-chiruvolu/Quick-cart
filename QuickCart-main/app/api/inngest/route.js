import { inngest, synUserCreation } from "@/config/inngest";
import { serve } from "inngest/next";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
     synUserCreation,
     synUserCreation,
     synUserCreation
],
});
