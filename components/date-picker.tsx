"use client"
import { format } from "date-fns"
import { LucideCalendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"

type DatePickerProps = {
  name: string;
  id: string;
  defaultValue?: string | undefined;
}

const DatePicker =({name, id, defaultValue}: DatePickerProps)=> {
  const [date, setDate] = useState<Date | undefined>(defaultValue ? new Date(defaultValue) : new Date());
  const [isOpen, setIsOpen] = useState(false);
  const formattedStringDate = date ? format(date, "yyyy-MM-dd") : ""
  
  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setIsOpen(false);
  }
 
 
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild id={id}>
        <Button
          variant="outline"
          data-empty={!date}
          className="justify-start text-left font-normal w-full"
        >
          <LucideCalendar />
          {formattedStringDate}
          <input type="hidden" name={name} value={formattedStringDate} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={handleSelect} />
      </PopoverContent>
    </Popover>
  )
}

export {DatePicker}
