var headers = {

    Name: 'DisplayName',
    Quantity: 'Quantity in Kgs',
    Price: 'Price in Rs'
};
var rows = [
    {
        Name: 'Wheat',
        Quantity: '5',
        Price: '250'
    },
    {
        Name: 'Rice',
        Quantity: '7',
        Price: '350'
    },
    {
        Name: 'Tomato',
        Quantity: '4',
        Price: '65'
    },
    {
        Name: 'Onion',
        Quantity: '3',
        Price: '36'
    }
];

var HeaderCell = React.createClass({
    render: function () {
        return (
            <th>{this.props.data}</th>
        );
    }
});

var TableHeader = React.createClass({
    getHeaderCells: function () {
        for (var p in headers) {
            if (headers.hasOwnProperty(p))
            return <HeaderCell data={headers[p]}/>;
        }
    },
    render: function () {

        return (
            <tr>
                {this.getHeaderCells(this.props.heads)

                }
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
    getRowkeys: function (row) {
        for(var k in row) {
            if (row.hasOwnProperty(k))
                return <Rowcell cell={row[k]}/>;

        }
    },

    getRow: function (row) {
        return (
            <tr>{this.getRowkeys(row)}</tr>
        );
    },

    render: function () {
        debugger;
        var self = this;
        return (
            <tbody>
            {
                this.props.rows.map(function (row) {
                    return self.getRow(row);
                })
            }
            </tbody>
        );
    }
});

var Table = React.createClass({
    render: function () {

        return (

            <table>
                <thead><TableHeader heads={headers}/></thead>
                <TableRows rows={rows}/>
            </table>
        );
    }
});

ReactDOM.render(
    <Table/>,
    document.getElementById('content')
);
