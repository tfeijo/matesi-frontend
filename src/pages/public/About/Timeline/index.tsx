import { Container, Section } from './styles';

type Section = {
  title: string;
  text: string;
  image: {
    src: string;
    alt: string;
  };
};

interface AboutTimelineProps {
  sections: Section[];
  className?: string;
}

export function AboutTimeline({ sections, className }: AboutTimelineProps) {
  return (
    <Container className={className}>
      {sections.map(section => (
        <Section>
          <div>
            <div className="text-container">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
            <div className="timeline">
              <span />
            </div>
            <div className="image-container">
              <img src={section.image.src} alt={section.image.alt} />
            </div>
          </div>
        </Section>
      ))}
    </Container>
  );
}
