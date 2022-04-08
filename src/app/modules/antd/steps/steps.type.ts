import { TemplateRef } from '@angular/core';

export interface StepsOptionInterface {
  value: any | null;
  description?: string | TemplateRef<void>;
  icon: string | string[] | Set<string> | { [klass: string]: any; }
  status: 'wait' | 'process' | 'finish' | 'error';
  title: string | TemplateRef<void>;
  subtitle: string | TemplateRef<void>;
  disabled?: boolean;
  percentage?: number;
}