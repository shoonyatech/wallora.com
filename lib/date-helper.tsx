import Moment from 'moment';

// Format = DD/MM/YYYY
export function getDate(date = null)
{
    if (date === null)
    {
        return Moment();
    }

    return Moment(date, 'DD/MM/YYYY');
}

export function getMonth(date = null)
{
    if (date === null)
    {
        return Moment(date).format('MMMM');
    }

    return Moment(date, "DD/MM/YYYY").format('MMMM');
}

export function getDateString(date: Moment.Moment)
{
    return date.format('DD MMM YYYY')
}

export function getFormattedDate(date: string)
{
    return Moment(date).format('DD MMM YYYY')
}

export function dateBeforeDays(days: number, date: Moment.Moment = Moment())
{
    return date.subtract(days, 'days')   
}

export function dateAfterDays(days: number, date: Moment.Moment = Moment())
{
    return  date.add(days, 'days')
}

export function dateBeforeMonths(months: number)
{
    return Moment().subtract(months, 'months')
}

export function dateAfterMonths(months: number)
{
    return Moment().add(months, 'months')
}

export function startDateBeforeMonths(date: Moment.Moment, months: number)
{
    return date.endOf('month').add(1, "days")
}

export function startDateAfterMonths(date: Moment.Moment, months: number)
{
    return date.startOf('month').subtract(1, "months")
}