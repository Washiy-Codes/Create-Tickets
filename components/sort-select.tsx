"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


type options = {
  label: string;
  sortKey: string;
  sortValue: string;
};

type sortObject = {
  sortKey: string;
  sortValue: string;
};
export type SortSelectProps = {
  options: options[];
  value: sortObject;
  onChange: (value: sortObject) => void;
};

export type SortSelectOption = {
  label: string;
  sortKey: string;
  sortValue: string;
};

const SortSelect = ({options, value, onChange}: SortSelectProps) => {  
const handleSort = (compositeKey: string) => {
  const [sortKey, sortValue] = compositeKey.split('-');

  onChange({ sortKey, sortValue });
  
};

return(
    <Select defaultValue={value.sortKey + '-' + value.sortValue} onValueChange={handleSort}>
  <SelectTrigger className="w-32"> 
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    {options.map((option) => (
      <SelectItem key={option.sortKey + option.sortValue} value={option.sortKey + '-' + option.sortValue}>
        {option.label}
      </SelectItem>
    ))}
  </SelectContent>
</Select>
)
};

export { SortSelect };






// const handleSort = (value: string) => {
  //   const params = new URLSearchParams(searchParams);
  //   if(value === defaultValue) {
  //     params.delete("sort");
  //   }else if(value){
  //       params.set("sort", value);
  //   }
  //   if (value) {
  //     params.set("sort", value);
  //   } else {
  //     params.delete("sort");
  //   }

  //   replace(`${pathname}?${params.toString()}`, {
  //     scroll: false,
  //   });
  // };




  // const searchParams = useSearchParams();

// const pathname = usePathname();
//   const { replace } = useRouter();

  // const params = new URLSearchParams(searchParams);
  //   if (value === defaultValue || !value) {
  //   params.delete("sort");
  // } else {
  //   params.set("sort", value);
  // }

  // replace(`${pathname}?${params.toString()}`, {
  //   scroll: false,
  // });