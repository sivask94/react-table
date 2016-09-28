var headers = {

    Name:'DisplayName',
    Quantity:'Quantity in Kgs',
    Price:'Price in Rs'
};
var rows = [
    {
        Name:'Wheat',
        Quantity:'5',
        Price:'250'
    },
    {
        Name:'Rice',
        Quantity:'7',
        Price:'350'
    },
    {
        Name:'Tomato',
        Quantity:'4',
        Price:'65'
    },
    {
        Name:'Onion',
        Quantity:'3',
        Price:'36'
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
    render: function () {
        return (
            <tr>
                {

                    for(var p in obj1)
                    {
                        if( data.hasOwnProperty (p) )
                        {
                            return <HeaderCell data={obj1[p]}/>;
                        }

                    }
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
    getRow: function (row) {
        return (
            <tr>
                {
                    for(var k in obj)
                    {
                        if( obj.hasOwnProperty( k ) )
                        {
                            return <Rowcell cell={obj[k]}/>;

                        }
                    }
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
