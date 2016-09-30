var headers = [
    {key: "name", label: 'Display Name'},
    {key: "qty", label: 'Quantity in Kgs'},
    {key: "price", label: 'Price in Rs'},
];
var rows = [
    {
        name: 'Wheat',
        qty: '5',
        price: '128',
    },
    {
        price: '350',
        name: 'Rice',
        qty: '7',
    },
    {
        qty: '4',
        price: '65',
        name: 'Tomato',
    },
    {
        qty: '3',
        name: 'Onion',
        price: '36',
    }
];

var Rowcell = React.createClass({
    render: function () {
        return (
            <td>{this.props.cell}</td>
        );
    }
});

var TableRows = React.createClass({
    getRows: function (headers, rows) {
        var rowElement = rows.map(function (row) {
            var cells = headers.map(function (header) {
                return (<Rowcell cell={row[header.key]}/>);
            });
            return (<tr>{cells}</tr>);
        });
        return rowElement;
    },

    render: function () {
        return (
            <tbody>{ this.getRows(this.props.headers, this.props.rows) }</tbody>
        );
    }
});

var Table = React.createClass({
    getInitialState : function () {
        return {
            sortKey : "name",
            sortOrder : false
        };
    },

    onHeaderClick : function (key) {
        var sortOrder = !this.state.sortOrder;
        this.setState({
            sortKey: key,
            sortOrder: sortOrder
        });
    },

    getHeaderRow : function (data) {
        var self = this;
        return (<th onClick={function (e) {
                self.onHeaderClick(data.key)
            }}>{data.label}</th>
        );
    },

    getTableHeader : function (headers) {
        var self = this;
        var headerElement = headers.map(function (header) {
            return self.getHeaderRow(header);
        });
        return (<tr>{headerElement}</tr>);
    },

    render : function () {
        var self = this;
        var headers = this.props.headers;
        var rows = this.props.rows;
        rows.sort(function(ov, nv){
            var sortOrder = self.state.sortOrder;
            var sortKey = self.state.sortKey;
            var oldVal = ov[sortKey];
            var newVal = nv[sortKey];

            if (sortOrder) {
                if (oldVal < newVal) return -1;
                if (oldVal > newVal) return 1;
            } else {
                if (oldVal > newVal) return -1;
                if (oldVal < newVal) return 1;
            }
            return 0;
        });

        return (
            <table>
                <thead>{this.getTableHeader(headers)}</thead>
                <TableRows headers={headers} rows={rows}/>
            </table>
        );
    }
});

ReactDOM.render(
    <Table headers={headers} rows={rows}/>,
    document.getElementById('content')
);

