import "./App6.css"
export default function DataTable(props) {

    const { data, setData } = props;

    const handleChange = (index, event) => {
        const value = event.target.value;
        setData(prevData => {
            const newData = [...prevData];
            newData[index].y = value;
            return newData;
        });
    };
    return (
        <>
            <table >
                <thead>
                    <tr>
                        <th>X</th>
                        <th>Y</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.x}</td>
                            <td>
                                <input type="text" value={item.y} onChange={event => handleChange(index, event)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}