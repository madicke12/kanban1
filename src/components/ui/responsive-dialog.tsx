import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface ResponsiveDialogProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export const ResponsiveDialog: React.FC<ResponsiveDialogProps> = ({ trigger, children }) => {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className={`${isMobile ? 'w-[95vw] max-w-[95vw]' : 'sm:max-w-[425px]'} p-0`}>
        {children}
      </DialogContent>
    </Dialog>
  );
};
