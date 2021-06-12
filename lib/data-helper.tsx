import Moment from 'moment';

class DateHelper
{
    static getFormattedDate(date: string)
    {
        return Moment(date).format('DD MMM YYYY')
    }
}

export default DateHelper