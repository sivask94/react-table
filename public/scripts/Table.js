var headers = [
    {key: "Name", label: 'DisplayName'},
    {key: "Quantity", label: 'Quantity in Kgs'},
    {key: "Price", label: 'Price in Rs'},
];
var rows = [
    {
        Name: 'Wheat',
        Quantity: '5',
        Price: '128',
    },
    {
        Price: '350',
        Name: 'Rice',
        Quantity: '7',
    },
    {
        Quantity: '4',
        Price: '65',
        Name: 'Tomato',
    },
    {
        Quantity: '3',
        Name: 'Onion',
        Price: '36',

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
    getHeaderCells: function (heads) {
        return heads.map(function (header) {
            return (<HeaderCell data={header.label}/>);
        });
    },
    render: function () {
        return (<tr>{this.getHeaderCells(this.props.head)}</tr>);
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
            <tbody>{ this.getRows(this.props.head, this.props.rows) }</tbody>
        );
    }
});

var Table = React.createClass({
    render: function () {
        return (
            <table>
                <thead><TableHeader head={headers}/></thead>
                <TableRows head={headers} rows={rows}/>
            </table>
        );
    }
});

ReactDOM.render(
    <Table/>,
    document.getElementById('content')
);
