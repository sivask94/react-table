var headers = [

{Name: 'DisplayName'},
{Quantity: 'Quantity in Kgs'},
{Price: 'Price in Rs'}
];
var rows = [
    {
        Name: 'Wheat',
        Quantity: '5',
        Price: '128',
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
        var cell=[];
        for (var p in heads) {
            if (heads.hasOwnProperty(p))
                cell.push(<HeaderCell data={heads[p]}/>);
        }
        return cell;
    },
    render: function () {
        var sel=this;
        return (
            <tr>
                {
                    this.props.head.map(function(heads){
                        return sel.getHeaderCells(heads);
                    })
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

    getRowKeys: function (row) {
        var cells = [];
        for (var k in row) {
            if (row.hasOwnProperty(k))
                cells.push(<Rowcell cell={row[k]}/>);
        }
        return cells;
    },

    getRow: function (row) {
        return (
            <tr>{this.getRowKeys(row)}</tr>
        );
    },

    render: function () {
        var self = this;
        return (
            <tbody>
            {
                this.props.rows.map(function (row) {
                    console.log(row);
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
