const linkByTag = (tech: string): string | undefined => {
  switch (tech) {
    case "React":
      return "https://reactjs.org";
    case "Node.js":
      return "https://nodejs.org";
    case "Next.js":
      return "https://nextjs.org";
    case "Supabase":
      return "https://supabase.io";
    case "Tailwind CSS":
      return "https://tailwindcss.com";
    case "Stripe":
      return "https://stripe.com";
    case "OpenAI":
      return "https://openai.com/docs";
    case "Google STT":
      return "https://cloud.google.com/speech-to-text";
    case "Whisper":
      return "https://openai.com/research/whisper";
    case "RevenueCat":
      return "https://www.revenuecat.com";
    case "React Native":
      return "https://reactnative.dev";
    case "Matter.js":
      return "https://brm.io/matter-js";
    case "RunPod.io":
      return "https://runpod.io";
    case "LLM":
      return "https://huggingface.co/models";
    case "Tamagui":
      return "https://tamagui.dev";
    case "Plaid":
      return "https://plaid.com/docs";
    case "PlayHT":
      return "https://play.ht";
    case "Alpaca":
      return "https://alpaca.markets/docs";
    case "Docker":
      return "https://www.docker.com";
    case "Trigger.dev":
      return "https://trigger.dev";
    default:
      return;
  }
};

export default linkByTag;
