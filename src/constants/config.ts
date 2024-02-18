type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Resyanac",
    fullName: "Resyana Cahyanita",
    email: "resyanac@gmail.com",
  },
  hero: {
    name: "Resya!",
    p: ["I am Full-Stack Software Engineer and i love to design"],
  },
  contact: {
    p: "Contact",
    h2: "Let's Connect!",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Meet Me.",
      content: `I'm a Full Stack Software Engineer with a knack for solving real-world problems through technology. 
      With a background in finance and tax, I bring a unique blend of analytical skills and technical expertise to the table. 
      From crafting user-friendly interfaces to designing scalable backend systems, I'm passionate about creating solutions 
      that make a difference. I'm always eager to learn and stay updated on the latest trends in technology. Let's connect 
      and explore how we can work together to bring your ideas to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experiences.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The presented projects serve as demonstrations of my skills and expertise, 
      showcasing real-world instances of my work. Each project is succinctly described and 
      accompanied by links to its corresponding code repository and live demo. These examples
       highlight my proficiency in solving intricate problems, adeptness with various technologies, 
       and capability in effectively managing projects.`,
    },
  },
};
