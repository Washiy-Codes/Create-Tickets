import { myBig } from "@/lib/big";

export const toCents = (dollars: number) => {
    return new myBig(dollars).mul(100).round(2).toNumber();
}

export const fromCents = (cents: number) => {
    return new myBig(cents).div(100).round(2).toNumber();
}


const currencyFromCents = (cents: number) => {
    return (
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(fromCents(cents))
    );
}

export { currencyFromCents }