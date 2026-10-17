export interface NavItem {
  label: string;
  href: string;
}

export interface ProblemItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface TechItem {
  title: string;
  category: 'Embedded Hardware' | 'Sensors & I/O' | 'AI & Processing' | 'Data & Interface';
  role: string;
  description: string;
  iconName: string;
}

export interface WorkflowStep {
  stepNumber: number;
  title: string;
  systemComponent: string;
  description: string;
  actionDetail: string;
  simulatedAudioPrompt?: string;
  simulatedAudioResponse?: string;
}
