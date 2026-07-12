"use client";

import { useActionState } from "react";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { Form } from "@/components/form/form";
import { switchOrganization } from "../actions/switch-organization";

type OrganizationSwitchButtonProps = {
  organizationId: string;
  // trigger: React.ReactElement;
    trigger: React.ReactElement<React.ComponentPropsWithRef<"button">, "button">;
};

const OrganizationSwitchButton = ({
  organizationId,
  trigger,
}: OrganizationSwitchButtonProps) => {
  const [actionState, action] = useActionState(switchOrganization.bind(null, organizationId), EMPTY_ACTION_STATE);

  return (
    <Form action={action} actionState={actionState} key={organizationId}>
      {trigger}
    </Form>
  );
};

export { OrganizationSwitchButton };




