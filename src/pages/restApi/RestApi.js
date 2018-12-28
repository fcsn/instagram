import React from 'react';
import Wrapper from './RestApiStyle';
import _Fetch from '../../common/fetch';
import { SERVER_URL } from '../../common/settings';

/*--------------------------------------------------*/

const url = `${SERVER_URL}/insta/restapi/`;
// url 뒤에 붙는 주소. 버튼누를때마다 바뀜
const restAPIs = [
  'auth_desc',
  'model_desc',
  'sns_desc',
];
/*--------------------------------------------------*/

class RestAPI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [], // url+descList[desc] 로 불러온 전체 데이터
      restAPIkey: 0, // 현재 클릭한 descList 키값
      tableNames: [], // 테이블이름들
      tableName: '', // 현재 클릭한 테이블이름
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  // 전체 데이터를 불러옵니다. restAPI 버튼을 누를때마다 실행됨.
  getData = async () => {
    const { restAPIkey } = this.state;
    try {
      // 전체 데이터
      const res = await _Fetch({
        method: 'GET',
        url: url + restAPIs[restAPIkey],
      });

      // 테이블이름들을 tableNames 배열에 넣습니다
      const tableNames = [];
      res.map((item, index, array) => {
        if (index === 0) {
          tableNames.push(item.table);
        } else if (index > 0) {
          if (array[index].table !== array[index - 1].table) {
            tableNames.push(item.table);
          }
        }
        return true;
      });
      console.log(tableNames);
      this.setState({
        data: res,
        restAPIkey,
        tableNames,
        tableName: tableNames[0],
        isLoaded: true,
      });
    } catch (e) {
      // alert('An error has occurred.');
      console.error(e);
    }
  }

  // restAPI 선택 버튼 목록
  renderRestAPI() {
    const { restAPIkey } = this.state;
    const list = restAPIs.map((item, index) => {
      return (
        <button
          key={`rest${index + 1}`}
          onClick={() => {
            this.setState({ restAPIkey: index }, () => this.getData());
          }}
          type="button"
          className={index === restAPIkey ? 'clicked' : 'notclicked'}
        >
          {item}
        </button>
      );
    });

    return (
      <div>
        <span>rest API: </span>
        {list}
      </div>
    );
  }

  // 테이블명 선택 버튼 목록
  renderTableNames() {
    const { tableNames, tableName } = this.state;
    const list = tableNames.map((item, index) => {
      return (
        <button
          key={`table-tab${index + 1}`}
          onClick={() => {
            this.setState({ tableName: item }, () => this.renderTable());
          }}
          className={item === tableName ? 'clicked' : 'notclicked'}
          type="button"
        >
          {item}
        </button>
      );
    });

    return (
      <div>
        <span>Table명: </span>
        {list}
      </div>
    );
  }

  // 테이블 출력
  renderTable() {
    const { data, tableName } = this.state;
    const list = data.map((item, index) => {
      // 현재 테이블명 state값과 같은 테이블인 item들만 불러옴
      if (item.table === tableName) {
        return (
          <tr key={`table${index + 1}`}>
            <td>{item.method}</td>
            <td>{item.api_name}</td>
            <td>{item.api}</td>
            <td>{item.msg}</td>
          </tr>
        );
      }
      return true;
    });
    return list;
  }

  render() {
    const { isLoaded } = this.state;
    if (isLoaded) {
      return (
        <Wrapper>
          {this.renderRestAPI()}
          <hr />
          {this.renderTableNames()}
          <hr />
          <table>
            <thead>
              <tr>
                <th>method</th>
                <th>api name</th>
                <th>api</th>
                <th>message</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </Wrapper>
      );
    }
    return <div />;
  }
}

export default RestAPI;
