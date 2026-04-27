export interface FeatureCardProps {
  variant?: 'Two Columns' | 'Three Columns';
  data: FeatureCardItemProps[];
}

export interface FeatureCardItemProps {
  image: string;
  tagline?: string;
  title: string;
  description: string;
}