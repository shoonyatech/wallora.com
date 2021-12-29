type categoriesSummaryProps = {
  balanceTotal: number
  plannedTotal: number
  actualTotal: number
}

const CategorySummary = ({
  balanceTotal,
  plannedTotal,
  actualTotal
}: categoriesSummaryProps) => {
  return (
    <div className="finance-category-summary-container" style={{width: `${balanceTotal >= 100 ? 100 : balanceTotal}%`}}>
      <span className="finance-category-summary-details">
        { balanceTotal >= 100 ? 'Exceeds by 100' : plannedTotal - actualTotal }
      </span>
    </div>
  )
}

export default CategorySummary;