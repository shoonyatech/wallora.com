/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
import { gql, useQuery } from '@apollo/client'
import React,{ useRef, useState } from "react";

import Loader from '../../common/Loader'

const TAGS = () => gql`
  query Tags {
    user {
      userSettings {
        taxes{
          type
        }
        emis{
            type
        }
        bills{
            type
        }
        commutes{
            type
        }
         households{
            type
        }
        entertainments{
            type
        }
        hobbies{
            type
        }
        community{
            type
        }
        grooming{
            type
        }
        profession{
            type
          }
      }
    }
  }
  `

export default function FinanceTag() {
  const [tags, setTags] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [options, setOptions] = useState([]);
  const inputRef = useRef();
  const defaultOptions: never[] = [];

  const { loading, error, data } = useQuery(TAGS())

  if (loading || error)
    return (
      <div>
        <Loader open={loading} error={error} />
      </div>
    )

    Object.keys(data.user.userSettings).map((key, index) => {
      if(index>0){
        data.user.userSettings[key].map((tag: { type: any; }) => defaultOptions.push(tag.type))
      }
    });

  const removeTags = (indexToRemove: number) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputRef.current.value === "") {
      setOptions([]);
    } else {
      setOptions(
        defaultOptions.filter((option) => option.includes(event.target.value))
      );
    }
  };

  return (
    <div className="flex flex-wrap items-start border-solid border-2 border-gray-100 w-96 rounded-lg pr-4 pl-2">
      <ul className="flex flex-wrap m-0 p-0 ">
        {tags.map((tag, index) => (
          <li key={index} className="flex w-auto items-center justify-center list-none rounded-xl h-8 pr-4 pl-4 bg-tag mr-4 mb-4 mt-4">
            <span>{tag}</span>
            <span className="block text-center bg-secondary ml-2 cursor-pointer w-1/2 pt-px pb-px pl-2 pr-2 rounded-full" onClick={() => removeTags(index)}>
              x
            </span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col">
        <input
          type="text"
          onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
          onChange={(event) => inputChange(event)}
          placeholder="Tags"
          ref={inputRef}
          onClick={() => setShowResults(true)}
          className='flex-1 outline-none border-none align-middle p-2'
        />
        {showResults && options.length > 0 ? (
          <ul className="flex flex-col absolute overflow-y-scroll pl-2 pr-2 mt-12 bg-tag max-h-48 ">
            {options.map((option, index) => (
              <li key={index} className="list-none p-2 ">
                <button
                  className="cursor-pointer "
                  type='button'
                  onClick={() => {
                    setTags([...tags, option]);
                    setOptions([]);
                    inputRef.current.value = "";
                  }}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}



