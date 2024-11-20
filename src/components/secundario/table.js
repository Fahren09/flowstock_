import React from 'react';
import { Table, Button } from 'react-bootstrap';

const TableComponent = ({ 
    data = [], 
    columns = [], 
    onAdd, 
    actions = [] 
}) => {
    return (
        <div>
            {onAdd && (
                <Button
                    variant="success"
                    onClick={onAdd}
                    style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none', marginBottom: '15px' }}
                >
                    Agregar
                </Button>
            )}
            <Table className="mt-3" style={{ border: 'none' }}>
                <thead>
                    <tr>
                        {columns.map((col, idx) => (
                            <th 
                                key={idx} 
                                style={{ border: 'none', backgroundColor: '#232D47', color: '#C6F8CF' }}
                            >
                                {col.label}
                            </th>
                        ))}
                        {actions.length > 0 && (
                            <th 
                                style={{ border: 'none', backgroundColor: '#232D47', color: '#C6F8CF' }}
                            >
                                Acciones
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id || index}>
                            {columns.map((col, idx) => (
                                <td 
                                    key={idx} 
                                    style={{ backgroundColor: '#0F8D89', color: '#C6F8CF', border: 'none' }}
                                >
                                    {col.key === 'id' ? index + 1 : (col.render ? col.render(item[col.key], item) : item[col.key])}
                                </td>
                            ))}
                            {actions.length > 0 && (
                                <td 
                                    style={{ backgroundColor: '#0F8D89', color: '#C6F8CF', border: 'none' }}
                                >
                                    {actions.map((action, idx) => (
                                        <Button
                                            key={idx}
                                            variant={action.variant || 'primary'}
                                            onClick={() => action.onClick(item)}
                                            className="me-2"
                                            style={{ backgroundColor: action.bgColor || '#232D47', color: action.color || '#C6F8CF', border: 'none' }}
                                        >
                                            {action.label}
                                        </Button>
                                    ))}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default TableComponent;
