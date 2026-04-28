export interface StepCardProps {
  variant: 'Two Column' | 'Three Column' | 'Four Column' | 'Five Column';
  data: {
    title: string;
    description: string;
  }[];
}