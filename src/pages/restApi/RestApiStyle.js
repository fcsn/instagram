import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px;
  span {
    display: inline-block;
    width: 70px;
  }
  button {
    width: auto;
    appearance:none;
    box-sizing:border-box;
    height: 36px;
    line-height:20px;
    border-radius:2px;
    padding:8px 0;
    background-color:#4ba3bb;
    margin:2px;
    color:#e2e2e2;
    border:none;
    font-size: 15px;
    cursor: pointer;
    outline: none;
    &.clicked {
      background-color: #4ba3bb;
      color: #fff;
      border: 1px solid #4ba3bb;
    }
    &.notclicked {
      background-color: #fff;
      color: #4ba3bb;
      border: 1px solid #4ba3bb;
    }
  }
  td, th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  td {
    white-space: pre-wrap;
  }

  tr:nth-child(even){background-color: #f2f2f2;}
  tr {background-color: #ddd;}
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4ba3bb;
    color: white;
  }
`;

export default Wrapper;
