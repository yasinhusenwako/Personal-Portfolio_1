import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = ({ ...props }) => {
  return <Slot {...props} />;
};

Form.displayName = "Form";

export { Form };
