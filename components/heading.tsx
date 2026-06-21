import { Separator } from "@/components/ui/separator"
type HeadingProps = {
  title: string;
  description?: string;
}
const Heading = ({ title, description }: HeadingProps) => {
  return (
    <>
    <div className="ml-2 flex flex-col gap-y-1 pt-2">
        <h1 className="text-2lg font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      <Separator />
    </>
  )
}
export { Heading }