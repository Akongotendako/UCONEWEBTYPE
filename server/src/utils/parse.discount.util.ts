export const parseDiscount = (discount: string | number | undefined): number => {
    if (!discount) return 0;
    return typeof discount === "string" ? parseFloat(discount) / 100 : discount
}