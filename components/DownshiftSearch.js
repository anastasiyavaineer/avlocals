import { resetIdCounter, useCombobox } from "downshift";
import {
  DropDown,
  DropDownItem,
  SearchStyles,
  Input,
} from "../components/styles/DropDown";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/client";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
const SEARCH_BUSINESSES_QUERY = gql`
  query SEARCH_BUSINESSES_QUERY($searchTerm: String!) {
    searchTerms: businesses(
      where: {
        _or: [{ name_contains: $searchTerm }, { tags_contains: $searchTerm }]
      }
    ) {
      id
      name
      slug
      profilepic {
        url
      }
    }
  }
`;

export default function DownshiftSearch() {
  const [searchski, toggleSearchski] = useState(false);

  const router = useRouter();
  const [findItems, { loading, data, error }] = useLazyQuery(
    SEARCH_BUSINESSES_QUERY,
    {
      fetchPolicy: "no-cache",
    }
  );

  const items = data?.searchTerms || [];

  const findBizButWait = debounce(findItems, 350);
  resetIdCounter();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items,
    onInputValueChange() {
      findBizButWait({
        variables: {
          searchTerm: inputValue,
        },
      });
    },
    onSelectedItemChange({ selectedItem }) {
      router.push({
        pathname: `/${selectedItem.slug}`,
      });
    },
    itemToString: (item) => item?.name || "",
  });
  return (
    <>
      {/* {searchski && ( */}
      <div className="relative z-9 py-4">
        <div {...getComboboxProps()}>
          <Input
            {...getInputProps({
              type: "search",
              placeholder: "Search businesses",
              id: "search",
              className: loading ? "bg-red-400" : null,
              // className: "w-full dark:bg-gray-900 rounded",
            })}
          />
        </div>
        <DropDown {...getMenuProps()}>
          {isOpen &&
            items.map((item, index) => (
              <DropDownItem
                {...getItemProps({ item, index })}
                key={item.id}
                highlighted={index === highlightedIndex}
              >
                <img src={item.profilepic.url} alt={item.name} width="50" />
                <p className="ml-2">{item.name}</p>
              </DropDownItem>
            ))}
          {isOpen && !items.length && !loading && (
            <DropDownItem>Sorry, No items found for {inputValue}</DropDownItem>
          )}
        </DropDown>
      </div>
      {/* ) */}
      {/* <BsSearch onClick={() => toggleSearchski(!searchski)} /> */}
    </>
  );
}
