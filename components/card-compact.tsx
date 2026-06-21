import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
type CardCompactProps = {
    title: string;
    content: React.ReactNode;
    className: string;
    footer?: React.ReactNode;
    description?: string;
}
const CardCompact = ({ title, content, className, footer, description }: CardCompactProps) => {
    return (
        <Card className={className}>
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
           {content} 
        </CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}
       </Card>
    )
}

export {CardCompact}