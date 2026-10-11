import * as React from 'react';
import { cn } from '../../utils/cn';
import { FIELD_BASE } from '../../utils/ui/surface';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return <textarea className={cn(FIELD_BASE, 'min-h-24 resize-y', className)} ref={ref} {...props} />;
});
Textarea.displayName = 'Textarea';

export { Textarea };
