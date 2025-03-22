import React from "react";
import Button from "../../../common/Button";
import { Common as Icons } from "../../../icons/Icons";

function ActionButtons() {
  // Add Icon later
  // Common.Print
  // Common.Download

  return (
    <div className="flex flex-wrap gap-3 justify-end">
      <Button>Print</Button>
      <Button>Download</Button>
    </div>
  );
}

export default ActionButtons;
