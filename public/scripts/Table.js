var headers = ["Name", "Quantity", "Price"];
var rows = [
    ["Rice", "2kg", 100],
    ["wheat", "4kg", 150],
    ["Tomato", "6kg", 8]
];

var HeaderCell = React.createClass({
    render: function () {
        return (
            <th>{this.props.data}</th>
        );
    }
});

var TableHeader = React.createClass({
    render: function () {
        return (
            <tr>
                {this.props.head.map(function (data, idx) {
                    return <HeaderCell data={data}/>;
                })}
            </tr>
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

var TableRows = React.createClass({
    getRow: function (row) {
        return (
            <tr>
                {
                    row.map(function (elem) {
                        return <Rowcell cell={elem}/>;
                    })
                }
            </tr>
        );
    },
    render: function () {
        var self = this;

        return (
            <tbody>
            {this.props.rows.map(function (row) {
                return self.getRow(row)
            })}
            </tbody>
        );
    }
});

var Table = React.createClass({
    render: function () {
        return (
            <table>
                <thead><TableHeader head={headers}/></thead>
                <TableRows rows={rows}/>
            </table>
        );
    }
});

ReactDOM.render(
    <Table/>,
    document.getElementById('content')
);
