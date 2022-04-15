import { useState, useEffect } from "react";
import styled from "styled-components";
import { TailSpin } from "react-loader-spinner";
import ClearIcon from "@mui/icons-material/Clear";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Search = () => {
  const [inputKeyword, setInputKeyword] = useState("");
  const [filter, setFilter] = useState("top");
  const [result, setresult] = useState([]);
  const [keyword, setKeyword] = useState("Enter keyword to search");
  const [loading, setloading] = useState(false);
  const [change, setChange] = useState("");

  useEffect(() => {}, [change]);

  const findMatch = async () => {
    setKeyword("");
    setloading(true);
    setKeyword(inputKeyword);
    let apiData;
    await fetch(`/api/search?keyword=${inputKeyword}&type=${filter}`)
      .then((res) => res.json())
      .then((data) => (apiData = data));
    setresult(apiData);
    setloading(false);
  };

  const copyKeywords = () => {
    navigator.clipboard.writeText(result)
    toast.success("Copied to Clipboard!");
  };


  return (
    <SearchWrapper>
      <ToastContainer />
      <InputWrapper>
        <Select onClick={(e) => setFilter(e.target.value.toLowerCase())}>
          <option>Top</option>
          <option>All</option>
          <option>Why</option>
          <option>Vs</option>
          <option>Where</option>
          <option>Who</option>
          <option>What</option>
          <option>When</option>
          <option>Will</option>
          <option>Are</option>
          <option>Which</option>
          <option>Can</option>
          <option>How</option>
        </Select>
        <InputKeyword
          value={inputKeyword}
          onChange={(e) => setInputKeyword(e.target.value)}
          placeholder="Enter your keyword"
        />
        <SearchBtn onClick={findMatch}>Search</SearchBtn>
      </InputWrapper>
      <Keyword>
        Keyword:-{" "}
        <span style={{ color: "red", marginLeft: "10px" }}>{keyword}</span>
      </Keyword>
      {loading ? (
        <Loading>
          <TailSpin height={35} color="red" />
        </Loading>
      ) : result.length == 0 ? (
        <div></div>
      ) : (
        <Results>
          <FileCopyIcon
            onClick={copyKeywords}
            style={{
              position: "absolute",
              right: 3,
              top: 3,
              fontSize: "35px",
              cursor: "pointer",
              color: "gray",
            }}
          />
          {result.map((e, i) => (
            <ResultKeyword key={i}>
              {e}
              {
                <ClearIcon
                  onClick={() => {
                    const arr = result;
                    arr.splice(i, 1);
                    setChange(e);
                    setresult(arr);
                  }}
                  style={{ fontSize: "20px", cursor: "pointer" }}
                />
              }
            </ResultKeyword>
          ))}
        </Results>
      )}
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 55px;
`;
const InputKeyword = styled.input`
  height: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 70%;
  padding: 8px;
  font-size: 1.2rem;
  background-color: white;
  color: gray;
  border: none;
  outline: none;

  &::placeholder {
    opacity: 20%;
  }
`;
const SearchBtn = styled.div`
  background-color: #e81717;
  display: flex;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 0px 12px 12px 0px;
  width: 30%;
  cursor: pointer;
  padding: 8px;
`;
const Results = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  max-height: 360px;
  overflow-y: auto;
  background-color: white;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  margin-top: 8px;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 20px;
`;
const Keyword = styled.h3`
  color: black;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 25px 0 0 0;
`;
const Loading = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const Select = styled.select`
  width: 16%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  padding: 8px;
  border-radius: 12px 0 0 12px;
  background-color: white;
  color: black;
  border: none;
  outline: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const ResultKeyword = styled.span`
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  padding: 8px;
  margin: 5px;
  border-radius: 8px;
`;
export default Search;