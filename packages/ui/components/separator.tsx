import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";

export function MySheet() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Open Sheet</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <Dialog.Title>Order</Dialog.Title>
          <Dialog.Description>Review your items and place your order</Dialog.Description>
          {/* your sheet content */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
