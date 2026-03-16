import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground",
  {
    variants: {
      variant: {
        default: "",
        muted: "bg-muted text-muted-foreground",
        outline: "bg-transparent text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
