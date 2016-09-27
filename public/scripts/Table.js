var headers = ["Name", "Quantity", "Price"];
var rows = [{Name : Rice, Quantity : '2kg', Price : 100},
  {"wheat","4kg","150"},{"Tomato","6kg",80}];

var HeaderCell = React.createClass({
  render : function() {
    return (
      <td>{this.props.data}</td>
    );
  }
});

var TableHeader = React.createClass({
  render : function() {
    return (
      <th>
        {this.props.head.map(function (data, idx) {
          return <HeaderCell data={data}/>;
        })}
      </th>
    );
  }
});

var Rowcell = React.createClass({
  render: function () {
    return (

        <td>{this.props.cell}</td>
    );
  }
});

var Row = React.createClass({
  render: function () {
    return (
      <tr>
        {this.props.dat.map(function (data, idx) {
          return <Rowcell cell={data}/>;
        })}
      </tr>
    );
  }
});

var TableRows = React.createClass({
  render: function () {
    return (
      <tr>
        {this.props.row.map(function (data, idx) {
          return <Row dat={data}/>;
        })}
      </tr>
    );
  }
});

var Table = React.createClass({
  render : function() {
    return (
      <table>
        <thead><TableHeader head={headers}/></thead>
        <tbody><TableRows row={rows}/></tbody>
      </table>
    );
  }
});

ReactDOM.render(
  <Table/>,
  document.getElementById('content')
);
