export interface IPreferredContactInput {
  name: string;
  value: ContactValueOption | boolean;
  id: string;
  label: string;
}

export type ContactValueOption = 'phone' | 'email' | 'both';
