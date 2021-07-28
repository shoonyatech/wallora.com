import CloseIcon from '@material-ui/icons/Close'
import React from 'react'

export default function SummaryInfo({ setSummaryModal, workItemInfo }: any) {
  return (
    <div className="bg-summaryBackground h-screen w-screen flex justify-end items-center top-0 fixed z-50 ">
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
                <li>INR 7,000</li>
                <li>INR 646</li>
                <li>INR 6,354</li>
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
                <div>
                  <p className="leading-3 pl-0.5 w-28 bg-summaryItemTitle py-2 m-0 mr-1">Date:</p>
                </div>
                <div>
                  <p className="leading-3 pl-0.5 w-28 bg-summaryItemTitle py-2 m-0 mr-1">Amount:</p>
                </div>
                <div>
                  <p className="leading-3 pl-0.5 w-40 bg-summaryItemTitle py-2 m-0 mr-1">Comment:</p>
                </div>
                <div>
                  <p className="leading-3 pl-0.5 w-40 bg-summaryItemTitle py-2 m-0 mr-1">Tags:</p>
                </div>
                <div>
                  <p className="leading-3 pl-0.5 w-28 bg-summaryItemTitle py-2 m-0 mr-1">Contacts:</p>
                </div>
              </div>
              <div className="flex overflow-y-scroll">
                <div>
                  <ul className="list-none text-xs pl-0 mr-1 mt-0 w-28 ml-0">
                    <li>JUL 2021</li>
                    <li>AUG 2021</li>
                    <li>SEP 2021</li>
                    <li>OCT 2021</li>
                    <li>NOV 2021</li>
                    <li>DEC 2021</li>
                    <li>JAN 2022</li>
                    <li>FEB 2022</li>
                    <li>MAR 2022</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-none text-xs pl-0 mr-1 mt-0 w-28 ml-0">{/* Amount */}</ul>
                </div>
                <div>
                  <ul className="list-none text-xs pl-0 mr-1 mt-0 w-40 ml-0">{/* Comment */}</ul>
                </div>
                <div>
                  <ul className="list-none text-xs pl-0 mr-1 mt-0 w-40 ml-0">{/* Tags */}</ul>
                </div>
                <div>
                  <ul className="list-none text-xs pl-0 mr-1 mt-0 w-28 ml-0">{/* Contacts */}</ul>
                </div>
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
                <div>
                  <p className="leading-3 pl-0.5 w-28 bg-summaryItemTitle py-2 m-0 mr-1">Date:</p>
                </div>
                <div>
                  <p className="leading-3 pl-0.5 w-28 bg-summaryItemTitle py-2 m-0 mr-1">Amount:</p>
                </div>
                <div>
                  <p className="leading-3 pl-0.5 w-40 bg-summaryItemTitle py-2 m-0 mr-1">Comment:</p>
                </div>
                <div>
                  <p className="leading-3 pl-0.5 w-40 bg-summaryItemTitle py-2 m-0 mr-1">Tags:</p>
                </div>
                <div>
                  <p className="leading-3 pl-0.5 w-28 bg-summaryItemTitle py-2 m-0 mr-1">Contacts:</p>
                </div>
              </div>
              <div className="flex overflow-y-scroll">
                <div>
                  <ul className="list-none text-xs pl-0 mr-1 mt-0 w-28 ml-0">
                    <li>2/2 2021</li>
                    <li>4/2 2021</li>
                    <li>7/2 2021</li>
                    <li>11/2 2021</li>
                    <li>2/2 2021</li>
                    <li>4/2 2021</li>
                    <li>7/2 2021</li>
                    <li>11/2 2021</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-none text-xs pl-0 mr-1 mt-0 w-28 ml-0">
                    <li>INR 120.00</li>
                    <li>INR 230.00</li>
                    <li>INR 547.00</li>
                    <li>INR 120.00</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-none text-xs pl-0 mr-1 mt-0 w-40 ml-0">
                    <li>Egg Cheese</li>
                    <li>Detergent</li>
                    <li>Rice, Bread</li>
                    <li>Cheese</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-none text-xs pl-0 mr-1 mt-0 w-40 ml-0">{/* Tags */}</ul>
                </div>
                <div>
                  <ul className="list-none text-xs pl-0 mr-1 mt-0 w-28 ml-0">{/* Contacts */}</ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  )
}
