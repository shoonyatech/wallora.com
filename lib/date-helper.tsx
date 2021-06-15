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

export function getDateString(date: Moment.Moment)
{
    return date.format('DD MMM YYYY')
}

export function getFormattedDate(date: string)
{
    return Moment(date).format('DD MMM YYYY')
}

export function dateBeforeDays(days: number)
{
    return Moment().subtract(days, 'days')
}

export function dateAfterDays(days: number)
{
    return Moment().add(days, 'days')
}


export function dateBeforeMonths(months: number)
{
    return Moment().subtract(months, 'months')
}

export function dateAfterMonths(months: number)
{
    return Moment().add(months, 'months')
}
