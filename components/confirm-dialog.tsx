import { ActionState, EMPTY_ACTION_STATE } from "./form/utils/to-action-state";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { cloneElement, useActionState, useState } from "react";
import { SubmitButton } from "./form/submit-button";
import { Form } from "./form/form";

type UseConfirmDialogProps = {
    action: () => Promise<ActionState>;
  trigger: React.ReactElement<{ onClick?: React.MouseEventHandler<HTMLButtonElement> }>;
    title?: string;
    description?: string;
};
const useConfirmDialog = ({
    action, trigger, 
    title = "Are you absolutely sure?", 
    description ="This action cannot be undone. This will permanently delete the ticket."}:
     UseConfirmDialogProps) => {
        const [isOpen, setIsOpen] = useState(false);
        
        const dialogTrigger = cloneElement(trigger, {
            onClick: () => setIsOpen((prev) => !prev)
        });
       
        const [actionState, formAction] = useActionState(action, EMPTY_ACTION_STATE);

        const handleSuccess = ()=> setIsOpen(false);
       
        const dialog = (
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>{title}</AlertDialogTitle>
      <AlertDialogDescription>
        {description}
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction asChild>
        <Form action={formAction} actionState={actionState} onSuccess={handleSuccess}>
         <SubmitButton  label="Confirm" />
        </Form>
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    )
    return [dialogTrigger, dialog];
}

export { useConfirmDialog }