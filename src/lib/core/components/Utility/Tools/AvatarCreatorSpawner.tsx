import React, { FC } from "react";
import { member, Member } from "lib/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AvatarCreatorSpawnerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
}

const AvatarCreatorSpawner: FC<AvatarCreatorSpawnerInput> = (
  props: AvatarCreatorSpawnerInput
) => {
  const { id, persistentId, updateOrderId, updateOrder, Enabled } = props;

  return (
    <component
      name="FrooxEngine.AvatarCreatorSpawner"
      id={id}
      persistentId={persistentId}
      updateOrderId={updateOrderId}
      updateOrder={updateOrder}
    >
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Enabled"
        content={Enabled} /* default: False */
      />
    </component>
  );
};

export default AvatarCreatorSpawner;
