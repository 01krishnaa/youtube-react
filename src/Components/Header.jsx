import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [showsuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      searchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const searchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
  };
  return (
    <div className="shadow-lg rounded-lg flex justify-between mt-5">
      <div className="flex">
        <img
          onClick={() => {
            dispatch(toggleMenu());
          }}
          className="ml-4 w-6 mb-2 mr-2 cursor-pointer"
          src="https://cdn.icon-icons.com/icons2/1875/PNG/512/hamburgermenu_120234.png"
        />
        <img
          className="h-7 mt-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-l-full border border-gray-200 p-2 mb-2 w-96"
          type="text"
          placeholder="Search"
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="rounded-r-full border border-gray-200 p-2">
          🔍
        </button>
        <div className="absolute">
          <ul className="shadow-lg">
            

            {suggestions[0] !== 'undefined' &&showsuggestions &&
              suggestions.map((suggestion) => (
                <div className="bg-gray-50 w-[385px] p-2 hover:bg-gray-300 ">
                  <li>🔍 {suggestion}</li>
                </div>
              ))}
          </ul>
        </div>
      </div>

      <div>
        <img
          className="w-10"
          src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
