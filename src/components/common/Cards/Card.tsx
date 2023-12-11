import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@/configurations/materialconfig";
  import { twMerge } from "tailwind-merge";
import Image from "next/image";
   type CardProps = {
    title: string;
    description?: string;
    bgColor?: string;
    image?: any;
   }
  export function CardDefault({title,description,bgColor,image}:CardProps) {
    return (
      <Card className={twMerge("my-6 w-80 mx-auto",bgColor? `bg-[${bgColor}]` : "")}>
        <CardHeader  floated={false} shadow={false} color="blue-gray" className="relative h-80 rounded-b-none">
          <Image
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            width={700}
            height={224}
            className="h-full w-full object-cover"
          />
          
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardBody>
        {/* <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter> */}
      </Card>
    );
  }