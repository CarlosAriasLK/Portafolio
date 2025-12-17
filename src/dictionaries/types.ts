export type Dictionary = {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    downloadCV: string;
    greeting: string;
    role: string;
    description: string;
    viewProjects: string;
    contact: string;
  };
  about: {
    title: string;
    description: string;
  };
  projects: {
    title: string;
    description: string;
    code: string;
    demo: string;
  };
  skills: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    description: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
};

export type Locale = 'es' | 'en';
