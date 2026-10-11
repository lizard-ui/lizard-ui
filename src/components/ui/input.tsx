import * as React from 'react';
import { cn } from '../../utils/cn';
import { FIELD_BASE } from '../../utils/ui/surface';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return <input type={type} className={cn(FIELD_BASE, 'h-10', className)} ref={ref} {...props} />;
});
Input.displayName = 'Input';

export { Input };
