export function getMantissa(amount: number)
{
    return amount.toString().split('.').length > 1 ? `.${amount.toString().split('.')[1].substr(0, 2)}` : '.00'
}