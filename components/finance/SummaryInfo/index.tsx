import { gql, useQuery } from '@apollo/client'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'

import Loader from '../../common/Loader'

export default function SummaryInfo({ setSummaryModal, workItemInfo }: any) {
  const getCategories = () => gql`
    query Chart {
      charts {
        currentMonth {
          budget
          spent
        }
        predictedSavings {
          savings {
            currencyCode
          }
        }
        plannedItems {
          date
          amount
          comment
          tags
          contact
        }
        actualItems {
          date
          amount
          comment
          tags
          contact
        }
      }
    }
  `
  const { loading, error, data } = useQuery(getCategories())

  if (loading || error)
    return (
      <div>
        <Loader open={loading} error={error} />
      </div>
    )

  const currentMonth = data.charts.currentMonth[0]
  const { currencyCode } = data.charts.predictedSavings[0].savings
  const { plannedItems } = data.charts
  const { actualItems } = data.charts

  const actualItemsAmount = actualItems.map((item: any) => item.amount).reduce((a: number, b: number) => a + b)

  return (
    <div className="bg-summaryBackground h-screen w-screen flex justify-end items-center top-0 right-0 fixed z-50 ">
      <div className="bg-summaryModalBackground right-4 absolute h-5/6 flex flex-col mr-5">
        <div className="flex bg-secondary h-16 items-center justify-between">
          <div className="pl-6">
            <p className="text-xl m-0">WORKITEM DETAILS</p>
          </div>
          <div className="pr-4 cursor-pointer">
            <CloseIcon onClick={setSummaryModal} fontSize="large" color="action" />
          </div>
        </div>

        <p className="text-center font-bold my-2">{workItemInfo.name}</p>

        <div className=" h-full overflow-auto">
          <div className="flex pl-6 h-1/5">
            <div>
              <p className="leading-4 w-36 text-sm mt-1">Current Month:</p>
            </div>
            <div>
              <ul className="list-none text-xs pl-0 mr-14 mt-0">
                <li>Allocated Budget:</li>
                <li>Actual Earned/Spent:</li>
                <li>Remaining:</li>
              </ul>
            </div>
            <div>
              <ul className="list-none text-xs pl-0 mt-0">
                <li>
                  {currencyCode} {currentMonth.budget}
                </li>
                <li>
                  {currencyCode} {actualItemsAmount}
                </li>
                <li>
                  {currencyCode} {currentMonth.budget - actualItemsAmount}
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="flex ml-6 h-44 ">
            <div className="flex">
              <p className="w-36 h-full mt-5 text-sm">Planned items:</p>
            </div>
            <div className="flex flex-col">
              <div className="flex mt-5 text-xs">
                <ul className="list-none m-0 p-0 flex ">
                  <li className="leading-3 pl-0.5 w-28 bg-summaryItemTitle py-2 m-0 mr-1">Date:</li>
                  <li className="leading-3 pl-0.5 w-28 bg-summaryItemTitle py-2 m-0 mr-1">Amount:</li>
                  <li className="leading-3 pl-0.5 w-40 bg-summaryItemTitle py-2 m-0 mr-1">Comment:</li>
                  <li className="leading-3 pl-0.5 w-40 bg-summaryItemTitle py-2 m-0 mr-1">Tags:</li>
                  <li className="leading-3 pl-0.5 w-28 bg-summaryItemTitle py-2 m-0 mr-1">Contacts:</li>
                </ul>
              </div>
              <div className="overflow-y-scroll h-44">
                {plannedItems.map((item: any) => (
                  <div className="flex text-xs">
                    <ul className="list-none m-0 p-0 flex">
                      <li className="leading-3 pl-0.5 w-28 py-2 m-0 mr-1">{item.date}</li>
                      <li className="leading-3 pl-0.5 w-28 py-2 m-0 mr-1">
                        {currencyCode} {item.amount}
                      </li>
                      <li className="leading-3 pl-0.5 w-40 py-2 m-0 mr-1">{item.comment}</li>
                      <li className="leading-3 pl-0.5 w-40 py-2 m-0 mr-1">{item.tags}</li>
                      <li className="leading-3 pl-0.5 w-28 py-2 m-0 mr-1">{item.contact}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr />
          <div className="flex ml-6 h-44 ">
            <div className="flex">
              <p className="w-36 h-full mt-5 text-sm">Actual items:</p>
            </div>
            <div className="flex flex-col">
              <div className="flex mt-5 text-xs">
                <ul className="list-none m-0 p-0 flex ">
                  <li className="leading-3 pl-0.5 w-28 bg-summaryItemTitle py-2 m-0 mr-1">Date:</li>
                  <li className="leading-3 pl-0.5 w-28 bg-summaryItemTitle py-2 m-0 mr-1">Amount:</li>
                  <li className="leading-3 pl-0.5 w-40 bg-summaryItemTitle py-2 m-0 mr-1">Comment:</li>
                  <li className="leading-3 pl-0.5 w-40 bg-summaryItemTitle py-2 m-0 mr-1">Tags:</li>
                  <li className="leading-3 pl-0.5 w-28 bg-summaryItemTitle py-2 m-0 mr-1">Contacts:</li>
                </ul>
              </div>
              <div className="overflow-y-scroll h-44">
                {actualItems.map((item: any) => (
                  <div className="flex text-xs">
                    <ul className="list-none m-0 p-0 flex">
                      <li className="leading-3 pl-0.5 w-28 py-2 m-0 mr-1">{item.date}</li>
                      <li className="leading-3 pl-0.5 w-28 py-2 m-0 mr-1">
                        {currencyCode} {item.amount}
                      </li>
                      <li className="leading-3 pl-0.5 w-40 py-2 m-0 mr-1">{item.comment}</li>
                      <li className="leading-3 pl-0.5 w-40 py-2 m-0 mr-1">{item.tags}</li>
                      <li className="leading-3 pl-0.5 w-28 py-2 m-0 mr-1">{item.contact}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  )
}
