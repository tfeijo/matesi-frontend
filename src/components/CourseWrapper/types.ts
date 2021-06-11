//* React Component
export type CourseWrapperProps = {
  hero: {
    title: string;
    backgroundUrl: string;
  };
  travels: {
    content: string;
    imageUrl: string;
    imageAlt: string;
  };
  about: {
    content: string[];
    summary: {
      classTime: string;
      ages: string;
      students: string;
    };
  };
  gallery: Array<{
    imageUrl: string;
    description: string;
  }>;
};

//* Styled Components
export type HeroProps = {
  backgroundUrl: string;
};
