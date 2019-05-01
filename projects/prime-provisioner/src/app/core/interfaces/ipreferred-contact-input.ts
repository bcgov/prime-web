export interface IPreferredContactInput {
  name: string;
  value: ContactValueOption;
  id: string;
  label: string;
}

export type ContactValueOption = 'phone' | 'email' | 'both';
