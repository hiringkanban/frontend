import { fontSize } from '../../../styles/styleGuide';

const headingStyle: { [key: string]: string } = {
  h1: `
        font-size: ${fontSize.main_heading};
        @media (max-width: 768px) {
            font-size: 1.4rem;
        }
    `,
  h2: `
        font-size: ${fontSize.secondary_heading};
        @media (max-width: 768px) {
            font-size: 1.2rem;
        }
    `,
  h3: `
        font-size: ${fontSize.tertiary_heading};
    `,
  h4: `
        font-size: ${fontSize.fourth_heading};
    `,
  h5: `
        font-size: ${fontSize.fifth_heading};
    `,
};
export default headingStyle;
